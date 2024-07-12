import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
    //get employees
    const employees = await prisma.employee.findMany();
    console.log(employees);
    return new Response(JSON.stringify(employees), { status: 200 });
}

export async function POST(request: Request) {
    //create employee
    const body = await request.json();
    const employee = await prisma.employee.create({
        data: body
    });
    return new Response(JSON.stringify(employee), { status: 200 });
}
