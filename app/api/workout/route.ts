import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { withOptimize } from '@prisma/extension-optimize';

const prisma = new PrismaClient();

//workout route
export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    const startDateParam = searchParams.get('startDate');

    if (id) {
        // Fetch and return a single workout by id
        const workout = await prisma.workout.findUnique({
            where: { id: parseInt(id) },
            include: { WorkoutExercise: { include: { exercise: true } } },
        });
        return workout
            ? NextResponse.json(workout)
            : NextResponse.json({ error: 'Workout not found' }, { status: 404 });
    } else if (startDateParam) {
        // Fetch and return workouts within a date range
        if (isNaN(Date.parse(startDateParam))) {
            return NextResponse.json(
                { error: 'Invalid startDate query parameter' },
                { status: 400 }
            );
        }
        const startDate = new Date(startDateParam);
        const endDate = new Date(); // Now

        try {
            const workouts = await prisma.workout.findMany({
                where: {
                    createdAt: {
                        gte: startDate,
                        lte: endDate,
                    },
                },
                include: { WorkoutExercise: { include: { exercise: true } } },
            });
            return NextResponse.json(workouts);
        } catch (error) {
            return NextResponse.json({ error: 'Failed to fetch workouts' }, { status: 500 });
        }
    } else {
        // Return all workouts if no specific query parameters are provided
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