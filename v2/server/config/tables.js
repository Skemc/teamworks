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
        authorid TEXT NOT NULL,
        createdon TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )`;
const commentTable = `CREATE TABLE IF NOT EXISTS comments (
        id SERIAL NOT NULL PRIMARY KEY,
        articleTitle TEXT NOT NULL,
        article TEXT NOT NULL,
        authorid TEXT NOT NULL,
        comment TEXT NOT NULL,
        createdon TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )`;

     await pool.query(usersTables);
     await pool.query(articleTable);
 await pool.query(commentTable);

     const firstUser = `INSERT INTO users(firstname,lastname, email, password, gender, jobrole, department,address, isadmin) VALUES('eric','karekezi', 'eric6@gmail.com', '$2b$10$hjXgNwYIzx8Hxeg.silh3usMzPF.TGMV3lMY55LACDhv19TnrtrMW', 'male','cooker', 'kitchen','gikondo','true')`;
     const firstArticle = `INSERT INTO articles(title, article, authorid) VALUES('yyy', 'yyy','eric6@gmail.com')`;
     
     await pool.query(firstUser);
     await pool.query(firstArticle);
}
createTable();
