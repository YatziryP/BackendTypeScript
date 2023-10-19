import 'dotenv/config';
import mysql from 'mysql2/promise';

const connection = mysql.createConnection({
    host: process.env.CHAT_AI_DB_HOST,
    user: process.env.CHAT_AI_DB_USER,
    password: process.env.CHAT_AI_DB_PASS,
    database: process.env.CHAT_AI_DB_NAME,
    waitForConnections: true,
});

export default connection;