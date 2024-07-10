import React from 'react';
import { useUser } from '@auth0/nextjs-auth0/client';
import { ReactQueryProvider } from '@/app/reactQueryProvider';

interface AuthenticatedQueryProviderProps {
    children: React.ReactNode;
}
export const AuthenticatedQueryProvider = ({ children }: AuthenticatedQueryProviderProps) => {
    const { user } = useUser();

    if (!user) {
        // User is not authenticated, render a fallback or redirect to login
        return (
            <div>
                Please log in to access this page.
                <a href="/api/auth/login">Login</a>
            </div>
        );
    }

    // User is authenticated, render the ReactQueryProvider and its children
    return <ReactQueryProvider>{children}</ReactQueryProvider>;
};
