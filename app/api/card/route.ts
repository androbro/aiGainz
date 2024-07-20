import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient, ChartDataType } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    const currentDate = new Date();

    if (id) {
        const card = await prisma.card.findUnique({
            where: { id: parseInt(id) },
            include: {
                chartData: true,
            },
        });

        if (!card) {
            return NextResponse.json({ error: 'Card not found' }, { status: 404 });
        }

        // Fetch data points based on dataType and dataSourceId
        const dataPoints = await fetchDataPoints(
            card.chartData.dataType,
            card.chartData.dataSourceId,
            card.period
        );

        // Add dataPoints to the card object
        const cardWithDataPoints = {
            ...card,
            chartData: {
                ...card.chartData,
                dataPoints: dataPoints,
            },
        };

        return NextResponse.json(cardWithDataPoints);
    } else {
        const cards = await prisma.card.findMany({
            include: {
                chartData: true,
            },
        });

        // Fetch data points for each card
        const cardsWithDataPoints = await Promise.all(
            cards.map(async (card) => {
                const dataPoints = await fetchDataPoints(
                    card.chartData.dataType,
                    card.chartData.dataSourceId,
                    card.period
                );
                return {
                    ...card,
                    chartData: {
                        ...card.chartData,
                        dataPoints: dataPoints,
                    },
                };
            })
        );

        return NextResponse.json(cardsWithDataPoints);
    }
}

async function fetchDataPoints(dataType: ChartDataType, dataSourceId: number, period: Date | null) {
    const whereClause: any = {
        date: { gte: period || new Date(0) },
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
            // For EQUIPMENT_TYPE, we need to fetch the equipment and then use its type
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
            // Similar to EQUIPMENT_TYPE, but using category instead
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

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        console.log('Received POST request with body:', body);

        const chartData = {
            label: body.name,
            fill: false,
            borderColor: '#4B91F1',
            tension: 0.4,
            pointRadius: 2,
            showLegend: true,
            showXAxis: true,
            showYAxis: true,
            maintainAspectRatio: false,
            responsive: true,
            width: null,
            height: 200,
            dataType: body.dataType as ChartDataType,
            dataSourceId: parseInt(body.dataSourceId),
        };

        const card = await prisma.card.create({
            data: {
                title: body.name,
                period: new Date(body.period),
                chartData: {
                    create: chartData,
                },
            },
            include: { chartData: true },
        });

        // Fetch data points for the newly created card
        const dataPoints = await fetchDataPoints(
            card.chartData.dataType,
            card.chartData.dataSourceId,
            card.period
        );

        const cardWithDataPoints = {
            ...card,
            chartData: {
                ...card.chartData,
                dataPoints: dataPoints,
            },
        };

        console.log('Card created successfully:', cardWithDataPoints);
        return NextResponse.json(cardWithDataPoints, { status: 201 });
    } catch (error) {
        console.error('Error creating card:', error);
        return NextResponse.json(
            { error: 'Failed to create card', details: error },
            { status: 500 }
        );
    }
}

export async function PUT(req: NextRequest) {
    console.log('PUT request received');
    const url = new URL(req.url);
    const id = url.searchParams.get('id');
    console.log('Received ID:', id);

    if (!id) {
        return NextResponse.json({ error: 'ID is required' }, { status: 400 });
    }

    try {
        const body = await req.json();
        console.log('Received body:', JSON.stringify(body, null, 2));

        console.log('Attempting to update card with ID:', id);
        const updatedCard = await prisma.card.update({
            where: { id: parseInt(id) },
            data: {
                title: body.title,
                period: new Date(body.period),
                chartData: {
                    update: {
                        label: body.chartData.label,
                        fill: body.chartData.fill,
                        borderColor: body.chartData.borderColor,
                        tension: body.chartData.tension,
                        pointRadius: body.chartData.pointRadius,
                        showLegend: body.chartData.showLegend,
                        showXAxis: body.chartData.showXAxis,
                        showYAxis: body.chartData.showYAxis,
                        maintainAspectRatio: body.chartData.maintainAspectRatio,
                        responsive: body.chartData.responsive,
                        width: body.chartData.width,
                        height: body.chartData.height,
                        dataType: body.chartData.dataType,
                        dataSourceId: body.chartData.dataSourceId,
                    },
                },
            },
            include: { chartData: true },
        });

        // Fetch updated data points
        const dataPoints = await fetchDataPoints(
            updatedCard.chartData.dataType,
            updatedCard.chartData.dataSourceId,
            updatedCard.period
        );

        const updatedCardWithDataPoints = {
            ...updatedCard,
            chartData: {
                ...updatedCard.chartData,
                dataPoints: dataPoints,
            },
        };

        console.log('Card updated successfully');
        return NextResponse.json(updatedCardWithDataPoints);
    } catch (error) {
        console.error('Error updating card:', error);
        return NextResponse.json(
            { error: 'Card not found or update failed', details: error },
            { status: 500 }
        );
    }
}

export async function DELETE(request: Request) {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
        return NextResponse.json({ error: 'ID is required' }, { status: 400 });
    }

    try {
        await prisma.card.delete({
            where: { id: parseInt(id) },
        });
        return NextResponse.json({ message: 'Card deleted successfully' });
    } catch (error) {
        return NextResponse.json({ error: 'Card not found or delete failed' }, { status: 404 });
    }
}