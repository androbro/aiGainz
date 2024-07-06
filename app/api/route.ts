// app/api/route.ts
import { NextResponse } from 'next/server';
import { createComment, getData } from '@/lib/types';

export async function GET() {
    const version = await getData();
    return NextResponse.json({ version });
}

export async function POST(request: Request) {
    const { comment } = await request.json();
    await createComment(comment);
    return NextResponse.json({ message: 'Comment created successfully' });
}
