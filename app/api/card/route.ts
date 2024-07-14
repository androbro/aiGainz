import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (id) {
        const card = await prisma.card.findUnique({
            where: { id: parseInt(id) },
            include: { chartData: { include: { dataPoints: true } } },
        });
        return card
            ? NextResponse.json(card)
            : NextResponse.json({ error: 'Card not found' }, { status: 404 });
    } else {
        const cards = await prisma.card.findMany({
            include: { chartData: { include: { dataPoints: true } } },
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

export async function PUT(request: Request) {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    const body = await request.json();

    if (!id) {
        return NextResponse.json({ error: 'ID is required' }, { status: 400 });
    }

    try {
        const updatedCard = await prisma.card.update({
            where: { id: parseInt(id) },
            data: {
                title: body.title,
                period: body.period,
                chartData: {
                    update: {
                        ...body.chartData,
                        dataPoints: {
                            deleteMany: {},
                            create: body.chartData.dataPoints,
                        },
                    },
                },
            },
            include: { chartData: { include: { dataPoints: true } } },
        });
        return NextResponse.json(updatedCard);
    } catch (error) {
        return NextResponse.json({ error: 'Card not found' }, { status: 404 });
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
