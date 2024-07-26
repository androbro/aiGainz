import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { withOptimize } from '@prisma/extension-optimize';

const prisma = new PrismaClient();

//workoutExercise route
export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (id) {
        const workoutExercise = await prisma.workoutExercise.findUnique({
            where: { id: parseInt(id) },
            include: { workout: true, exercise: true },
        });
        return workoutExercise
            ? NextResponse.json(workoutExercise)
            : NextResponse.json({ error: 'WorkoutExercise not found' }, { status: 404 });
    } else {
        const workoutExercises = await prisma.workoutExercise.findMany({
            include: { workout: true, exercise: true },
        });
        return NextResponse.json(workoutExercises);
    }
}

export async function POST(request: Request) {
    const body = await request.json();
    const workoutExercise = await prisma.workoutExercise.create({
        data: body,
        include: { workout: true, exercise: true },
    });
    return NextResponse.json(workoutExercise, { status: 201 });
}

export async function PUT(request: Request) {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    const body = await request.json();

    if (!id) {
        return NextResponse.json({ error: 'ID is required' }, { status: 400 });
    }

    try {
        const updatedWorkoutExercise = await prisma.workoutExercise.update({
            where: { id: parseInt(id) },
            data: body,
            include: { workout: true, exercise: true },
        });
        return NextResponse.json(updatedWorkoutExercise);
    } catch (error) {
        return NextResponse.json({ error: 'WorkoutExercise not found' }, { status: 404 });
    }
}

export async function DELETE(request: Request) {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
        return NextResponse.json({ error: 'ID is required' }, { status: 400 });
    }

    try {
        await prisma.workoutExercise.delete({
            where: { id: parseInt(id) },
        });
        return NextResponse.json({ message: 'WorkoutExercise deleted successfully' });
    } catch (error) {
        return NextResponse.json({ error: 'WorkoutExercise not found' }, { status: 404 });
    }
}