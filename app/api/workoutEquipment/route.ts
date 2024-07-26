import { NextResponse } from 'next/server';
import { PrismaClient, EquipmentType, EquipmentCategory, EquipmentLocation } from '@prisma/client';
import { withOptimize } from '@prisma/extension-optimize';

const prisma = new PrismaClient();

//workoutEquipment route
export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (id) {
        const workoutEquipment = await prisma.workoutEquipment.findUnique({
            where: { id: parseInt(id) },
            include: { exercises: true },
        });
        return workoutEquipment
            ? NextResponse.json(workoutEquipment)
            : NextResponse.json({ error: 'WorkoutEquipment not found' }, { status: 404 });
    } else {
        const workoutEquipments = await prisma.workoutEquipment.findMany({
            include: { exercises: true },
        });
        return NextResponse.json(workoutEquipments);
    }
}

export async function POST(request: Request) {
    const body = await request.json();
    const workoutEquipment = await prisma.workoutEquipment.create({
        data: {
            ...body,
            type: body.type as EquipmentType,
            category: body.category as EquipmentCategory,
            location: body.location as EquipmentLocation,
        },
        include: { exercises: true },
    });
    return NextResponse.json(workoutEquipment, { status: 201 });
}

export async function PUT(request: Request) {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    const body = await request.json();

    if (!id) {
        return NextResponse.json({ error: 'ID is required' }, { status: 400 });
    }

    try {
        const updatedWorkoutEquipment = await prisma.workoutEquipment.update({
            where: { id: parseInt(id) },
            data: {
                ...body,
                type: body.type as EquipmentType,
                category: body.category as EquipmentCategory,
                location: body.location as EquipmentLocation,
            },
            include: { exercises: true },
        });
        return NextResponse.json(updatedWorkoutEquipment);
    } catch (error) {
        return NextResponse.json({ error: 'WorkoutEquipment not found' }, { status: 404 });
    }
}

export async function DELETE(request: Request) {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
        return NextResponse.json({ error: 'ID is required' }, { status: 400 });
    }

    try {
        await prisma.workoutEquipment.delete({
            where: { id: parseInt(id) },
        });
        return NextResponse.json({ message: 'WorkoutEquipment deleted successfully' });
    } catch (error) {
        return NextResponse.json({ error: 'WorkoutEquipment not found' }, { status: 404 });
    }
}