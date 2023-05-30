import express from 'express';
import cors from 'cors';
import { poolNew, createDatabase, connectToDatabase, createTables } from './db';

const app = express();
const PORT = 8000;

// middleware
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.end("home");
})

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
