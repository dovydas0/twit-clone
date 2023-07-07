import express from 'express';
import cors from 'cors';
// import path from 'path';
import router from './router';
import cookieParser from 'cookie-parser';
import { v2 as cloudinary } from 'cloudinary';
import multer from 'multer';
import { createDatabase, connectToDatabase, createTables } from './db/dbImplementation';
require('dotenv').config();

// Cloudinary configuration
cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET,
    secure: true
});

// const buildPath = path.join(__dirname, "../client/dist");

const storage = multer.memoryStorage();

export const upload = multer({ storage })

// creating express app
const app = express();

// Setting server port
const PORT = 8000;

// middleware
// app.use(express.static(buildPath));
app.use(cors({
    credentials: true,
    origin: process.env.CLIENT_URL
}));
app.use(express.json());
app.use(cookieParser());

// Database implementation
app.get('/db/reimplementation/danger/only-at-the-deployment', (req, res) => {
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

app.use('/api', router());