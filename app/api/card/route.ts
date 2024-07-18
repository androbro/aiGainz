import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    const currentDate = new Date();

    if (id) {
        const card = await prisma.card.findUnique({
            where: { id: parseInt(id) },
            include: {
                chartData: {
                    include: {
                        dataPoints: true,
                    },
                },
            },
        });

        if (!card) {
            return NextResponse.json({ error: 'Card not found' }, { status: 404 });
        }

        // Filter dataPoints based on the card's period
        if (card.period) {
            card.chartData.dataPoints = card.chartData.dataPoints.filter(
                (dp) => dp.date >= card.period! && dp.date <= currentDate
            );
        }

        return NextResponse.json(card);
    } else {
        const cards = await prisma.card.findMany({
            include: {
                chartData: {
                    include: {
                        dataPoints: true,
                    },
                },
            },
        });

        // Filter dataPoints for each card based on its period
        cards.forEach((card) => {
            if (card.period) {
                card.chartData.dataPoints = card.chartData.dataPoints.filter(
                    (dp) => dp.date >= card.period! && dp.date <= currentDate
                );
            }
        });

        return NextResponse.json(cards);
    }
}
export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        console.log('Received POST request with body:', body);

        // Extract the data source type and ID
        const [dataSourceType, dataSourceId] = body.dataSource.split('_');

        // Prepare the chart data
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
            dataPoints: [], // We'll populate this based on the data source
        };

        // Fetch data points based on the data source
        let dataPoints: { date: Date; score: number }[] = [];
        if (dataSourceType === 'exercise') {
            const workouts = await prisma.workoutExercise.findMany({
                where: {
                    exerciseId: parseInt(dataSourceId),
                    workout: {
                        createdAt: {
                            gte: new Date(body.period),
                        },
                    },
                },
                orderBy: {
                    workout: {
                        createdAt: 'asc',
                    },
                },
                include: {
                    workout: true,
                },
            });

            dataPoints = workouts.map((we) => ({
                date: we.workout.createdAt,
                score: we.weight * we.reps * we.sets,
            }));
        }
        // Add similar logic for muscleTypes and workoutEquipments if needed

        // Create the card with chart data
        const card = await prisma.card.create({
            data: {
                title: body.name,
                period: new Date(body.period),
                chartData: {
                    create: {
                        ...chartData,
                        dataPoints: {
                            create: dataPoints,
                        },
                    },
                },
            },
            include: { chartData: { include: { dataPoints: true } } },
        });

        console.log('Card created successfully:', card);
        return NextResponse.json(card, { status: 201 });
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
                period: body.period,
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
                        dataPoints: {
                            deleteMany: {},
                            create: body.chartData.dataPoints.map((dp: any) => ({
                                date: dp.date,
                                score: dp.score,
                            })),
                        },
                    },
                },
            },
            include: { chartData: { include: { dataPoints: true } } },
        });
        console.log('Card updated successfully');
        return NextResponse.json(updatedCard);
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
        return NextResponse.json({ error: 'Card not found' }, { status: 404 });
    }
}