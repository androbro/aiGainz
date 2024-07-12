import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
    //get employees
    const employees = await prisma.employee.findMany();
    return new Response(JSON.stringify(employees), { status: 200 });
}

export async function POST(request: Request) {
    const body = await request.json();
    console.log(body);
    return new Response(JSON.stringify(body), { status: 200 });
}
