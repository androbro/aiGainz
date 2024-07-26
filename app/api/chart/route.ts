import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient, ChartDataType } from '@prisma/client';
import { withOptimize } from '@prisma/extension-optimize';

const prisma = new PrismaClient().$extends(withOptimize());

export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (id) {
        const chart = await prisma.chart.findUnique({
            where: { id: parseInt(id) },
        });

        if (!chart) {
            return NextResponse.json({ error: 'Chart not found' }, { status: 404 });
        }
        return NextResponse.json(chart);
    } else {
        const charts = await prisma.chart.findMany();
        return NextResponse.json(charts);
    }
}

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        console.log('Received POST request with body:', body);

        const chart = await prisma.chart.create({
            data: {
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
                dataType: body.chart.dataType as ChartDataType,
                dataSourceId: body.chart.dataSourceId,
            },
        });

        console.log('Chart created successfully:', chart);
        return NextResponse.json(chart, { status: 201 });
    } catch (error) {
        console.error('Error creating chart:', error);
        return NextResponse.json(
            { error: 'Failed to create chart', details: error },
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
        // console.log('Received body:', JSON.stringify(body, null, 2));

        console.log('Attempting to update chart with ID:', id);
        const updatedChart = await prisma.chart.update({
            where: { id: parseInt(id) },
            data: {
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
                dataType: body.chart.dataType as ChartDataType,
                dataSourceId: body.chart.dataSourceId,
            },
        });

        console.log('Chart updated successfully');
        return NextResponse.json(updatedChart);
    } catch (error) {
        console.error('Error updating chart:', error);
        return NextResponse.json(
            { error: 'Chart not found or update failed', details: error },
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
        await prisma.chart.delete({
            where: { id: parseInt(id) },
        });
        return NextResponse.json({ message: 'Chart deleted successfully' });
    } catch (error) {
        return NextResponse.json({ error: 'Chart not found or delete failed' }, { status: 404 });
    }
}