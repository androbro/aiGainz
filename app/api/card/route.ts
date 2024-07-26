import { NextRequest, NextResponse } from 'next/server';
import { ChartDataType, PrismaClient } from '@prisma/client';
import { CreateCard } from '@/app/api/card/interfaces';
import { DataPointsApi } from '@/app/api/dataPoints/api';

const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

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

        console.log('Fetching data points with URL in card.route:', dataPointsUrl.toString());
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
                        create: body.chart,
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

//url = /api/card?id=1
export async function PUT(req: NextRequest) {
    const url = new URL(req.url);
    const id = url.searchParams.get('id');

    if (!id) {
        return NextResponse.json({ error: 'ID is required' }, { status: 400 });
    }

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

        console.log('Card updated successfully:', updatedCardWithDataPoints);
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