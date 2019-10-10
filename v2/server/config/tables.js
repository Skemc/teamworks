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
        isadmin BOOLEAN DEFAULT false
    )`;
    const articleTable = `CREATE TABLE IF NOT EXISTS articles (
        id SERIAL NOT NULL PRIMARY KEY,
        title TEXT NOT NULL,
        article TEXT NOT NULL,
        createdon TIMESTAMP NOT NULL
    )`;
     await pool.query(usersTables);
     await pool.query(articleTable);

     const firstUser = `INSERT INTO users(firstname,lastname, email, password, gender, jobrole, department,address, isadmin) VALUES('eric','karekezi', 'eric6@gmail.com', '$2b$10$hjXgNwYIzx8Hxeg.silh3usMzPF.TGMV3lMY55LACDhv19TnrtrMW', 'male','cooker', 'kitchen','gikondo','true')`;

     await pool.query(firstUser);
}
createTable();
