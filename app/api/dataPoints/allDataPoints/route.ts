import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient, ChartDataType } from '@prisma/client';
import { withOptimize } from '@prisma/extension-optimize';

const prisma = new PrismaClient();

//datapoints/allDataPoints
export async function GET(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url);
        console.log('searchParams on allDataPoints:', searchParams);
        const period = searchParams.get('period');

        const exercisesDataPoints = await prisma.chartDataPoint.findMany({
            where: {
                date: {
                    gte: period!,
                },
                exerciseId: {
                    not: null,
                },
            },
        });
        const muscleTypeDataPoints = await prisma.chartDataPoint.findMany({
            where: {
                date: {
                    gte: period!,
                },
                muscleTypeId: {
                    not: null,
                },
            },
        });
        const workoutEquipmentDataPoints = await prisma.chartDataPoint.findMany({
            where: {
                date: {
                    gte: period!,
                },
                workoutEquipmentId: {
                    not: null,
                },
            },
        });

        return NextResponse.json({
            exercises: exercisesDataPoints,
            muscleTypes: muscleTypeDataPoints,
            workoutEquipments: workoutEquipmentDataPoints,
        });
    } catch (error) {
        console.error('Error fetching grouped data:', error);
        return NextResponse.json({ error: 'Failed to fetch grouped data' }, { status: 500 });
    }
}