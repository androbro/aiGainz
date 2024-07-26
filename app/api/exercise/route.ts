import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { withOptimize } from '@prisma/extension-optimize';

const prisma = new PrismaClient();

//exercise route
export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (id) {
        const exercise = await prisma.exercise.findUnique({
            where: { id: parseInt(id) },
            include: { primaryMuscle: true, secondaryMuscle: true, equipment: true },
        });
        return exercise
            ? NextResponse.json(exercise)
            : NextResponse.json({ error: 'Exercise not found' }, { status: 404 });
    } else {
        const exercises = await prisma.exercise.findMany({
            include: { primaryMuscle: true, secondaryMuscle: true, equipment: true },
        });
        return NextResponse.json(exercises);
    }
}

export async function POST(request: Request) {
    const body = await request.json();
    const exercise = await prisma.exercise.create({
        data: body,
        include: { primaryMuscle: true, secondaryMuscle: true, equipment: true },
    });
    return NextResponse.json(exercise, { status: 201 });
}

export async function PUT(request: Request) {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    const body = await request.json();

    if (!id) {
        return NextResponse.json({ error: 'ID is required' }, { status: 400 });
    }

    try {
        const updatedExercise = await prisma.exercise.update({
            where: { id: parseInt(id) },
            data: body,
            include: { primaryMuscle: true, secondaryMuscle: true, equipment: true },
        });
        return NextResponse.json(updatedExercise);
    } catch (error) {
        return NextResponse.json({ error: 'Exercise not found' }, { status: 404 });
    }
}

export async function DELETE(request: Request) {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
        return NextResponse.json({ error: 'ID is required' }, { status: 400 });
    }

    try {
        await prisma.exercise.delete({
            where: { id: parseInt(id) },
        });
        return NextResponse.json({ message: 'Exercise deleted successfully' });
    } catch (error) {
        return NextResponse.json({ error: 'Exercise not found' }, { status: 404 });
    }
}