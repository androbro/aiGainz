import { NextRequest, NextResponse } from 'next/server';
import { ChartDataType, PrismaClient } from '@prisma/client';
import { GroupedData } from '@/app/api/groupedData/interfaces';
import { DataPointsApi } from '@/app/api/dataPoints/api';

const prisma = new PrismaClient();

//this is not filtering yet. you need to filter using the data from the datapoints table
export async function GET(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url);
        console.log('searchParams on group:', searchParams);
        const periodString = searchParams.get('period') as string;
        const period = new Date(periodString);

        //fetch data from the dataPoints table
        const dataPoints = await DataPointsApi.getAllDataPoints(period);

        const exercises = await prisma.exercise.findMany({
            where: {
                id: {
                    in: dataPoints.exercises.map((dataPoint) => dataPoint.id),
                },
            },
        });
        const muscleTypes = await prisma.muscleType.findMany({
            where: {
                id: {
                    in: dataPoints.muscleTypes.map((dataPoint) => dataPoint.id),
                },
            },
        });
        const workoutEquipments = await prisma.workoutEquipment.findMany({
            where: {
                id: {
                    in: dataPoints.workoutEquipments.map((dataPoint) => dataPoint.id),
                },
            },
        });

        const groupedData: GroupedData[] = [
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
        ].filter((group) => group.children.length > 0);

        return NextResponse.json(groupedData);
    } catch (error) {
        console.error('Error fetching grouped data:', error);
        return NextResponse.json({ error: 'Failed to fetch grouped data' }, { status: 500 });
    }
}