import express from 'express';
import { client } from './db';

const app = express();
const PORT = 8001;

client.connect();
client.query("SELECT * FROM user")
.then((data: any) => {
    console.log(data);
})
.finally(() => {
    client.end();
})





app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`); 
})