import express from 'express';
import cors from 'cors';
import { client } from './db';

const app = express();
const PORT = 8001;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.end("home");
})

app.get('/db', (req, res) => {
    
    // res.json({
    //     body: "content"
    // })
    res.end('hi');
})

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`); 
})
