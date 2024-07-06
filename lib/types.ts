// lib/db.ts
import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.DATABASE_URL!);

export async function getData() {
    const response = await sql`SELECT version()`;
    return response[0].version;
}

export async function createComment(comment: string) {
    await sql`CREATE TABLE IF NOT EXISTS comments (comment TEXT)`;
    await sql('INSERT INTO comments (comment) VALUES ($1)', [comment]);
}