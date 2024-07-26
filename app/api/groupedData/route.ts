import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { withOptimize } from '@prisma/extension-optimize';

const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
    try {
        const exercises = await prisma.exercise.findMany();
        const muscleTypes = await prisma.muscleType.findMany();
        const workoutEquipments = await prisma.workoutEquipment.findMany();

        const groupedData = [
            {
                key: 'exercises',
                label: 'Exercises',
                children: exercises.map((exercise) => ({
                    key: `exercise_${exercise.id}`,
                    label: exercise.name,
                    data: exercise,
                })),
            },
            {
                key: 'muscleTypes',
                label: 'Muscle Types',
                children: muscleTypes.map((muscleType) => ({
                    key: `muscleType_${muscleType.id}`,
                    label: muscleType.name,
                    data: muscleType,
                })),
            },
            {
                key: 'workoutEquipments',
                label: 'Workout Equipments',
                children: workoutEquipments.map((equipment) => ({
                    key: `equipment_${equipment.id}`,
                    label: equipment.name,
                    data: equipment,
                })),
            },
        ];

        return NextResponse.json(groupedData);
    } catch (error) {
        console.error('Error fetching grouped data:', error);
        return NextResponse.json({ error: 'Failed to fetch grouped data' }, { status: 500 });
    }
}