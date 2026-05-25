import pg from "pg";

const { Pool } = pg;

let pool = null;

export function getDatabaseInstance() {
    if (!pool) {
        pool = new Pool({
            user: process.env.DB_USER,
            host: process.env.DB_HOST,
            database: process.env.DB_NAME,
            password: process.env.DB_PASS,
            port: Number(process.env.DB_PORT)
        });
    }
    return pool;
}