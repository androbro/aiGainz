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
export async function POST(request: Request) {
    const body = await request.json();
    const card = await prisma.card.create({
        data: {
            title: body.title,
            period: body.period,
            chartData: {
                create: {
                    ...body.chartData,
                    dataPoints: {
                        create: body.chartData.dataPoints,
                    },
                },
            },
        },
        include: { chartData: { include: { dataPoints: true } } },
    });
    return NextResponse.json(card, { status: 201 });
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