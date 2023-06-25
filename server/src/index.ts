import express from 'express';
import cors from 'cors';
import router from './router';
import cookieParser from 'cookie-parser';
import { v2 as cloudinary } from 'cloudinary';
import multer from 'multer';
import { createDatabase, connectToDatabase, createTables } from './db/dbImplementation';
require('dotenv').config();

// Cloudinary configuration
cloudinary.config({ 
    cloud_name: 'dgtndwfxr', 
    api_key: '416645621722788', 
    api_secret: '6MkkVTnhk250yOiu8oW6wlKo5rw',
    secure: true
  });

const storage = multer.memoryStorage();

export const upload = multer({ storage })

// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, "media/")
//     },
//     filename: (req, file, cb) => {
//         const uniqueSuffix = Date.now();
//         cb(null, file.fieldname + '-' + uniqueSuffix)
//     }
// })

// const upload = multer({ storage: storage})

// creating express app
const app = express();

// Setting server's port
const PORT = 8000;

// middleware
app.use(cors({
    credentials: true,
    origin: process.env.CLIENT_URL
}));
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