import express from 'express';
import cors from 'cors';
import router from './router';
import cookieParser from 'cookie-parser';
import { v2 as cloudinary } from 'cloudinary';
import multer from 'multer';
import path from 'path';
import { createDatabase, connectToDatabase, createTables } from './db/dbImplementation';
require('dotenv').config();

// Cloudinary configuration
cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET,
    secure: true
  });

const buildPath = path.join(__dirname, "../../client/dist");
const storage = multer.memoryStorage();

export const upload = multer({ storage })

// creating express app
const app = express();

// Setting server port
const PORT = 8000;

// middleware
app.use(cors({
    credentials: true,
    origin: "*"
}));
app.use(express.json());
app.use(express.static(buildPath));
app.use(cookieParser());

// Database implementation
app.get('/db/reimplementation/danger/only-at-the-depoyment', (req, res) => {
    createDatabase();
    setTimeout(() => {
        connectToDatabase();
        setTimeout(() => {
            createTables();
        }, 1000)
    }, 1000)
    res.end('hi');
})

app.get('/', (req, res) => {
    console.log(buildPath + "\\index.html");
    res.sendFile(buildPath + "\\index.html"),
    (err: any) => {
        console.log(err);
    }

})

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`); 
})

app.use('/', router());