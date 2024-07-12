import { NextResponse } from 'next/server';
import { PrismaClient } from '@/generated/client';

const prisma = new PrismaClient();

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (id) {
        const workout = await prisma.workout.findUnique({
            where: { id: parseInt(id) },
            include: { WorkoutExercise: { include: { exercise: true } } },
        });
        return workout
            ? NextResponse.json(workout)
            : NextResponse.json({ error: 'Workout not found' }, { status: 404 });
    } else {
        const workouts = await prisma.workout.findMany({
            include: { WorkoutExercise: { include: { exercise: true } } },
        });
        return NextResponse.json(workouts);
    }
}

export async function POST(request: Request) {
    const body = await request.json();
    const workout = await prisma.workout.create({
        data: body,
        include: { WorkoutExercise: { include: { exercise: true } } },
    });
    return NextResponse.json(workout, { status: 201 });
}

export async function PUT(request: Request) {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    const body = await request.json();

    if (!id) {
        return NextResponse.json({ error: 'ID is required' }, { status: 400 });
    }

    try {
        const updatedWorkout = await prisma.workout.update({
            where: { id: parseInt(id) },
            data: body,
            include: { WorkoutExercise: { include: { exercise: true } } },
        });
        return NextResponse.json(updatedWorkout);
    } catch (error) {
        return NextResponse.json({ error: 'Workout not found' }, { status: 404 });
    }
}

export async function DELETE(request: Request) {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
        return NextResponse.json({ error: 'ID is required' }, { status: 400 });
    }

    try {
        await prisma.workout.delete({
            where: { id: parseInt(id) },
        });
        return NextResponse.json({ message: 'Workout deleted successfully' });
    } catch (error) {
        return NextResponse.json({ error: 'Workout not found' }, { status: 404 });
    }
}
