import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient, ChartDataType } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url);
    const dataType = searchParams.get('dataType') as ChartDataType;
    const dataSourceId = searchParams.get('dataSourceId');
    const periodStart = searchParams.get('period');

    if (!dataType || !dataSourceId || !periodStart) {
        return NextResponse.json(
            { error: 'dataType, dataSourceId, and period are required' },
            { status: 400 }
        );
    }

    try {
        const startDate = new Date(periodStart);
        const endDate = new Date(); // Current date

        console.log(
            `Fetching data points for ${dataType} with ID ${dataSourceId} from ${startDate.toISOString()} to ${endDate.toISOString()}`
        );

        const dataPoints = await fetchDataPoints(
            dataType,
            parseInt(dataSourceId),
            startDate,
            endDate
        );
        return NextResponse.json(dataPoints);
    } catch (error) {
        console.error('Error fetching data points:', error);
        return NextResponse.json({ error: 'Failed to fetch data points' }, { status: 500 });
    }
}

async function fetchDataPoints(
    dataType: ChartDataType,
    dataSourceId: number,
    startDate: Date,
    endDate: Date
) {
    const whereClause: any = {
        date: {
            gte: startDate,
            lte: endDate,
        },
    };

    switch (dataType) {
        case ChartDataType.EXERCISE:
            whereClause.exerciseId = dataSourceId;
            break;
        case ChartDataType.MUSCLE_TYPE:
            whereClause.muscleTypeId = dataSourceId;
            break;
        case ChartDataType.WORKOUT_EQUIPMENT:
            whereClause.workoutEquipmentId = dataSourceId;
            break;
        case ChartDataType.WORKOUT_EXERCISE:
            whereClause.workoutExerciseId = dataSourceId;
            break;
        case ChartDataType.EQUIPMENT_TYPE:
            const equipment = await prisma.workoutEquipment.findUnique({
                where: { id: dataSourceId },
            });
            if (equipment) {
                whereClause.workoutEquipmentId = {
                    in: await prisma.workoutEquipment
                        .findMany({ where: { type: equipment.type }, select: { id: true } })
                        .then((ids) => ids.map((e) => e.id)),
                };
            }
            break;
        case ChartDataType.EQUIPMENT_CATEGORY:
            const categoryEquipment = await prisma.workoutEquipment.findUnique({
                where: { id: dataSourceId },
            });
            if (categoryEquipment) {
                whereClause.workoutEquipmentId = {
                    in: await prisma.workoutEquipment
                        .findMany({
                            where: { category: categoryEquipment.category },
                            select: { id: true },
                        })
                        .then((ids) => ids.map((e) => e.id)),
                };
            }
            break;
    }

    return prisma.chartDataPoint.findMany({
        where: whereClause,
        orderBy: { date: 'asc' },
    });
}