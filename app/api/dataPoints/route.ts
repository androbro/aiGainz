import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient, ChartDataType } from '@prisma/client';
import { withOptimize } from '@prisma/extension-optimize';

const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
    let searchParams: URLSearchParams;
    try {
        // Decode the URL before parsing
        const decodedUrl = decodeURIComponent(request.url);
        // Try to parse the full decoded URL
        const fullUrl = new URL(decodedUrl);
        searchParams = fullUrl.searchParams;
    } catch (error) {
        console.error('Failed to parse full URL, attempting to parse path and query:', error);
        // If full URL parsing fails, try to parse just the path and query
        const urlParts = request.url.split('?');
        if (urlParts.length > 1) {
            const decodedQuery = decodeURIComponent(urlParts[1]);
            searchParams = new URLSearchParams(decodedQuery);
        } else {
            searchParams = new URLSearchParams();
        }
    }
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