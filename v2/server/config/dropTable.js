import{ Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const connString = process.env.DATABASE_URL;
const pool = new Pool({
    connectionString: connString,
});
try{
    const dropTable = [
        'DROP TABLE IF EXISTS users CASCADE',
    ];
    const dropTables = async () => {
        for(const table of dropTable){
            await pool.query(table);
        }
    }
    dropTables();
}
catch (error){
    console.log(error.messsage);
}
