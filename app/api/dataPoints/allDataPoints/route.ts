import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient, ChartDataType } from '@prisma/client';
import { withOptimize } from '@prisma/extension-optimize';

const prisma = new PrismaClient();

//datapoints/allDataPoints
export async function GET(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url);
        const startDate = searchParams.get('startDate');

        const whereClause: any = {
            date: {
                gte: startDate,
            },
        };

        const exercises = await prisma.exercise.findMany(whereClause);
        const muscleTypes = await prisma.muscleType.findMany(whereClause);
        const workoutEquipments = await prisma.workoutEquipment.findMany(whereClause);

        return NextResponse.json({
            exercises: exercises,
            muscleTypes: muscleTypes,
            workoutEquipments: workoutEquipments,
        });
    } catch (error) {
        console.error('Error fetching grouped data:', error);
        return NextResponse.json({ error: 'Failed to fetch grouped data' }, { status: 500 });
    }
}