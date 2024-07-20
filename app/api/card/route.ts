import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient, ChartDataType } from '@prisma/client';
import { DataPointsApi } from '@/app/api/dataPoints/api';

const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

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

        // Fetch data points using the new dataPoints API
        const dataPointsResponse = await fetch(
            `${request.nextUrl.origin}/api/dataPoints?dataType=${card.chart.dataType}&dataSourceId=${card.chart.dataSourceId}&period=${card.period?.toISOString()}`
        );
        const dataPoints = await dataPointsResponse.json();

        // Add dataPoints to the card object
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
        // Fetch data points for each card
        const cardsWithDataPoints = await Promise.all(
            cards.map(async (card) => {
                const dataPointsResponse = await fetch(
                    `${request.nextUrl.origin}/api/dataPoints?dataType=${card.chart.dataType}&dataSourceId=${card.chart.dataSourceId}&period=${card.period?.toISOString()}`
                );
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
                chart: {
                    create: chartData,
                },
            },
            include: { chart: true },
        });

        // Fetch data points for the newly created card
        const dataPoints = await DataPointsApi.getDataPoints(
            card.chart.dataType,
            card.chart.dataSourceId,
            card.period!
        );

        const cardWithDataPoints = {
            ...card,
            chart: {
                ...card.chart,
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
        const dataPoints = DataPointsApi.getDataPoints(
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