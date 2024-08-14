import { NextRequest, NextResponse } from 'next/server';
import { CardType, ChartDataType, PrismaClient } from '@prisma/client';
import { CreateCard, ExtendedCard } from '@/app/api/card/interfaces';
import { DataPointsApi } from '@/app/api/dataPoints/api';

const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    const type = searchParams.get('type');

    // Get the base URL from the request
    const baseUrl = `${request.nextUrl.protocol}//${request.nextUrl.host}`;

    if (id) {
        const card = await prisma.card.findUnique({
            where: { id: parseInt(id) },
            include: {
                chart: true,
            },
        });

        if (!card) {
            return NextResponse.json({ error: 'Card not found' }, { status: 404 });
        }

        // Fetch data points using the dataPoints API
        const dataPointsUrl = new URL('/api/dataPoints', baseUrl);
        dataPointsUrl.searchParams.set('dataType', card.chart.dataType);
        dataPointsUrl.searchParams.set('dataSourceId', card.chart.dataSourceId.toString());
        dataPointsUrl.searchParams.set(
            'period',
            card.period?.toISOString() || new Date().toISOString()
        );

        const dataPointsResponse = await fetch(dataPointsUrl);
        const dataPoints = await dataPointsResponse.json();

        const cardWithDataPoints = {
            ...card,
            chart: {
                ...card.chart,
                dataPoints: dataPoints,
            },
        };

        return NextResponse.json(cardWithDataPoints);
    } else if (type) {
        console.log('Fetching cards by type:', type);
        const cards = await prisma.card.findMany({
            where: { type: type as CardType },
            include: {
                chart: true,
            },
        });

        const cardsWithDataPoints = await Promise.all(
            cards.map(async (card) => {
                const dataPointsUrl = new URL('/api/dataPoints', baseUrl);
                dataPointsUrl.searchParams.set('dataType', card.chart.dataType);
                dataPointsUrl.searchParams.set('dataSourceId', card.chart.dataSourceId.toString());
                dataPointsUrl.searchParams.set(
                    'period',
                    card.period?.toISOString() || new Date().toISOString()
                );

                const dataPointsResponse = await fetch(dataPointsUrl);
                const dataPoints = await dataPointsResponse.json();

                return {
                    ...card,
                    chart: {
                        ...card.chart,
                        dataPoints: dataPoints,
                    },
                };
            })
        );

        return NextResponse.json(cardsWithDataPoints);
    } else {
        const cards = await prisma.card.findMany({
            include: {
                chart: true,
            },
        });

        const cardsWithDataPoints = await Promise.all(
            cards.map(async (card) => {
                const dataPointsUrl = new URL('/api/dataPoints', baseUrl);
                dataPointsUrl.searchParams.set('dataType', card.chart.dataType);
                dataPointsUrl.searchParams.set('dataSourceId', card.chart.dataSourceId.toString());
                dataPointsUrl.searchParams.set(
                    'period',
                    card.period?.toISOString() || new Date().toISOString()
                );

                const dataPointsResponse = await fetch(dataPointsUrl);
                const dataPoints = await dataPointsResponse.json();

                return {
                    ...card,
                    chart: {
                        ...card.chart,
                        dataPoints: dataPoints,
                    },
                };
            })
        );

        return NextResponse.json(cardsWithDataPoints);
    }
}

export async function POST(request: NextRequest) {
    try {
        const body: CreateCard = await request.json();
        console.log('Received POST request with body:', body);

        const cardWithChart = await prisma.$transaction(async (prisma) => {
            return prisma.card.create({
                data: {
                    title: body.title,
                    period: body.period,
                    chart: {
                        create: body.chart, // The 'id' is already omitted in the CreateCard interface
                    },
                },
                include: { chart: true },
            });
        });

        // Fetch data points for the newly created card
        const dataPoints = await DataPointsApi.getDataPoints(
            cardWithChart.chart.dataType,
            cardWithChart.chart.dataSourceId,
            cardWithChart.period!
        );

        console.log('Data points:', dataPoints);

        const cardWithDataPoints = {
            ...cardWithChart,
            chart: {
                ...cardWithChart.chart,
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
    const url = new URL(req.url);
    const id = url.searchParams.get('id');

    if (id) {
        // Existing single card update logic
        try {
            const body = await req.json();
            // console.log('Received body:', JSON.stringify(body, null, 2));

            console.log('Attempting to update card with ID:', id);
            const updatedCard = await prisma.card.update({
                where: { id: parseInt(id) },
                data: {
                    title: body.title,
                    period: new Date(body.period),
                    chart: {
                        update: {
                            label: body.chart.label,
                            fill: body.chart.fill,
                            borderColor: body.chart.borderColor,
                            tension: body.chart.tension,
                            pointRadius: body.chart.pointRadius,
                            showLegend: body.chart.showLegend,
                            showXAxis: body.chart.showXAxis,
                            showYAxis: body.chart.showYAxis,
                            maintainAspectRatio: body.chart.maintainAspectRatio,
                            responsive: body.chart.responsive,
                            width: body.chart.width,
                            height: body.chart.height,
                            dataType: body.chart.dataType,
                            dataSourceId: body.chart.dataSourceId,
                        },
                    },
                },
                include: { chart: true },
            });

            // Fetch updated data points
            const dataPoints = await DataPointsApi.getDataPoints(
                updatedCard.chart.dataType,
                updatedCard.chart.dataSourceId,
                updatedCard.period!
            );

            const updatedCardWithDataPoints = {
                ...updatedCard,
                chart: {
                    ...updatedCard.chart,
                    dataPoints: dataPoints,
                },
            };

            return NextResponse.json(updatedCardWithDataPoints);
        } catch (error) {
            console.error('Error updating card:', error);
            return NextResponse.json(
                { error: 'Card not found or update failed', details: error },
                { status: 500 }
            );
        }
    } else {
        // New logic for updating multiple cards
        try {
            const cards: ExtendedCard[] = await req.json();
            const updatedCards = await Promise.all(
                cards.map(async (card) => {
                    if (!card.chart) {
                        throw new Error(`Chart data missing for card with ID: ${card.id}`);
                    }
                    const updatedCard = await prisma.card.update({
                        where: { id: card.id },
                        data: {
                            title: card.title,
                            period: card.period ? new Date(card.period) : undefined,
                            chart: {
                                update: {
                                    label: card.chart.label,
                                    fill: card.chart.fill,
                                    borderColor: card.chart.borderColor,
                                    tension: card.chart.tension,
                                    pointRadius: card.chart.pointRadius,
                                    showLegend: card.chart.showLegend,
                                    showXAxis: card.chart.showXAxis,
                                    showYAxis: card.chart.showYAxis,
                                    maintainAspectRatio: card.chart.maintainAspectRatio,
                                    responsive: card.chart.responsive,
                                    width: card.chart.width,
                                    height: card.chart.height,
                                    dataType: card.chart.dataType,
                                    dataSourceId: card.chart.dataSourceId,
                                },
                            },
                        },
                        include: { chart: true },
                    });

                    // Fetch updated data points
                    const dataPoints = await DataPointsApi.getDataPoints(
                        updatedCard.chart.dataType,
                        updatedCard.chart.dataSourceId,
                        updatedCard.period || new Date()
                    );

                    return {
                        ...updatedCard,
                        chart: {
                            ...updatedCard.chart,
                            dataPoints: dataPoints,
                        },
                    };
                })
            );

            console.log('Cards updated successfully:', updatedCards);
            return NextResponse.json(updatedCards);
        } catch (error) {
            console.error('Error updating cards:', error);
            return NextResponse.json(
                { error: 'Failed to update cards', details: error },
                { status: 500 }
            );
        }
    }
}

export async function DELETE(request: NextRequest) {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
        return NextResponse.json({ error: 'ID is required' }, { status: 400 });
    }

    try {
        await prisma.$transaction(async (tx) => {
            // First, find the card to get its chartId
            const card = await tx.card.findUnique({
                where: { id: parseInt(id) },
                select: { chartId: true },
            });

            if (!card) {
                throw new Error('Card not found');
            }

            // Delete the card
            await tx.card.delete({
                where: { id: parseInt(id) },
            });

            // Delete the associated chart
            await tx.chart.delete({
                where: { id: card.chartId },
            });
        });

        return NextResponse.json({
            message: 'Card, chart, and associated data deleted successfully',
        });
    } catch (error) {
        console.error('Error deleting card and associated data:', error);
        return NextResponse.json(
            { error: 'Failed to delete card and associated data' },
            { status: 500 }
        );
    }
}