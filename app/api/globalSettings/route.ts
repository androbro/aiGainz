import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

//exercise route
export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    const key = searchParams.get('key');
    if (id) {
        const setting = await prisma.globalSetting.findUnique({
            where: { id: parseInt(id) },
        });
        return setting
            ? NextResponse.json(setting)
            : NextResponse.json({ error: 'Setting not found' }, { status: 404 });
    } else if (key) {
        const setting = await prisma.globalSetting.findUnique({
            where: { key: key },
        });
        return setting
            ? NextResponse.json(setting)
            : NextResponse.json({ error: 'Setting not found' }, { status: 404 });
    } else {
        const settings = await prisma.globalSetting.findMany();
        return NextResponse.json(settings);
    }
}
export async function POST(request: Request) {
    const body = await request.json();
    const setting = await prisma.globalSetting.create({
        data: body,
    });
    return NextResponse.json(setting, { status: 201 });
}
export async function PUT(request: Request) {
    const url = new URL(request.url);
    const id = url.searchParams.get('id');
    const body = await request.json();

    if (!id) {
        return NextResponse.json({ error: 'ID is required' }, { status: 400 });
    }
    try {
        const updatedSetting = await prisma.globalSetting.update({
            where: { id: parseInt(id) },
            data: body,
        });
        return NextResponse.json(updatedSetting);
    } catch (error) {
        return NextResponse.json({ error: 'Setting not found' }, { status: 404 });
    }
}
export async function DELETE(request: Request) {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    if (!id) {
        return NextResponse.json({ error: 'ID is required' }, { status: 400 });
    }
    try {
        await prisma.globalSetting.delete({
            where: { id: parseInt(id) },
        });
    } catch (error) {
        return NextResponse.json({ error: 'Setting not found' }, { status: 404 });
    }
}