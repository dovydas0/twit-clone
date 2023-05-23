import express from 'express';
// import { client } from 'db';

const app = express();
const PORT = 8001;


// client.connect();




app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`); 
})