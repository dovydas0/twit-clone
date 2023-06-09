import express from 'express';
import cors from 'cors';
import router from './router';
import cookieParser from 'cookie-parser';
import { createDatabase, connectToDatabase, createTables } from './db/dbImplementation';

const app = express();
const PORT = 8000;

// middleware
app.use(cors());
app.use(express.json());
app.use(cookieParser());

// Database implementation
app.get('/db', (req, res) => {
    createDatabase();
    setTimeout(() => {
        connectToDatabase();
        setTimeout(() => {
            createTables();
        }, 1000)
    }, 1000)
    res.end('hi');
})

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`); 
})

app.use('/', router());