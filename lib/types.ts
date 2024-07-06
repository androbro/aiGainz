// lib/db.ts
import { neon } from '@neondatabase/serverless';

const url = process.env.DATABASE_URL ? process.env.DATABASE_URL : 'postgresql';

const sql = neon(url);

export async function getData() {
    const response = await sql`SELECT version()`;
    return response[0].version;
}

export async function createComment(comment: string) {
    await sql`CREATE TABLE IF NOT EXISTS comments (comment TEXT)`;
    await sql('INSERT INTO comments (comment) VALUES ($1)', [comment]);
}
