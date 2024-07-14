import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

//muscleType route
export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (id) {
        const muscleType = await prisma.muscleType.findUnique({
            where: { id: parseInt(id) },
            include: { primaryExercises: true, secondaryExercises: true },
        });
        return muscleType
            ? NextResponse.json(muscleType)
            : NextResponse.json({ error: 'MuscleType not found' }, { status: 404 });
    } else {
        const muscleTypes = await prisma.muscleType.findMany({
            include: { primaryExercises: true, secondaryExercises: true },
        });
        return NextResponse.json(muscleTypes);
    }
}

export async function POST(request: Request) {
    const body = await request.json();
    const muscleType = await prisma.muscleType.create({
        data: body,
        include: { primaryExercises: true, secondaryExercises: true },
    });
    return NextResponse.json(muscleType, { status: 201 });
}

export async function PUT(request: Request) {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    const body = await request.json();

    if (!id) {
        return NextResponse.json({ error: 'ID is required' }, { status: 400 });
    }

    try {
        const updatedMuscleType = await prisma.muscleType.update({
            where: { id: parseInt(id) },
            data: body,
            include: { primaryExercises: true, secondaryExercises: true },
        });
        return NextResponse.json(updatedMuscleType);
    } catch (error) {
        return NextResponse.json({ error: 'MuscleType not found' }, { status: 404 });
    }
}

export async function DELETE(request: Request) {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
        return NextResponse.json({ error: 'ID is required' }, { status: 400 });
    }

    try {
        await prisma.muscleType.delete({
            where: { id: parseInt(id) },
        });
        return NextResponse.json({ message: 'MuscleType deleted successfully' });
    } catch (error) {
        return NextResponse.json({ error: 'MuscleType not found' }, { status: 404 });
    }
}
