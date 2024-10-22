// app/api/protected/route.ts
import { withApiAuthRequired, getSession } from '@auth0/nextjs-auth0';
import { type NextRequest } from 'next/server';
import { type NextApiRequest, type NextApiResponse } from 'next';

export const dynamic = 'force-dynamic';

// Define the response type
type RouteResponse = Response | Promise<Response>;

// Define the handler type
type RouteHandler = (request: NextRequest) => RouteResponse;

// Create the base handler
const handler: RouteHandler = async (req) => {
    try {
        // Convert NextRequest to NextApiRequest for Auth0 compatibility
        const request = {
            ...req,
            cookies: Object.fromEntries(
                req.cookies.getAll().map(c => [c.name, c.value])
            )
        } as unknown as NextApiRequest;

        // Create a minimal response object
        const response = {
            setHeader: () => {},
            getHeader: () => {},
            end: () => {},
        } as unknown as NextApiResponse;

        const session = await getSession(request, response);

        if (!session || !session.user) {
            return new Response(
                JSON.stringify({ error: 'Unauthorized' }),
                {
                    status: 401,
                    headers: { 'Content-Type': 'application/json' }
                }
            );
        }

        return new Response(
            JSON.stringify({
                protected: 'My Secret',
                id: session.user.sub
            }),
            {
                status: 200,
                headers: { 'Content-Type': 'application/json' }
            }
        );
    } catch (error) {
        console.error('Protected route error:', error);
        return new Response(
            JSON.stringify({ error: 'Internal Server Error' }),
            {
                status: 500,
                headers: { 'Content-Type': 'application/json' }
            }
        );
    }
};

// Export the wrapped handler
export const GET = withApiAuthRequired(handler) as RouteHandler;