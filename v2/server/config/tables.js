import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();
const connString = process.env.DATABASE_URL;
const pool = new Pool({
    connectionString: connString,
});

const createTable = async () => {
    const usersTables = `CREATE TABLE IF NOT EXISTS users(
        id SERIAL NOT NULL PRIMARY KEY,
        firstname TEXT NOT NULL,
        lastname TEXT NOT NULL,
        email TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL,
        gender TEXT NOT NULL,
        jobrole TEXT NOT NULL,
        department TEXT NOT NULL,
        address TEXT NOT NULL,
        iadmin BOOLEAN DEFAULT false
    )`;
     await pool.query(usersTables);
}

createTable();
