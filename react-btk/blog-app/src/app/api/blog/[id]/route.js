import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

let db = null;

export async function GET(request, context) {
    const { id } = await context.params;

    if (!db) {
        db = await open({
            filename: './blog.db',
            driver: sqlite3.Database,
        });
    }

    const result = await db.get(`SELECT * FROM blogs WHERE id = ?`, id);

    if (!result) {
        return new Response(JSON.stringify({ error: 'Blog not found' }), { status: 404 });
    }

    return Response.json(result);
}
