import express from 'express';
import { uploadImage } from '../media/cloudinary';

export const uploadImg = async (req: express.Request, res: express.Response) => {
    const file = req.file;

    console.log(file);
    

    // const imgPath = ``

    // try {
    //     const publicId = uploadImage(imgPath);
    // } catch (error) {
        
    // }
}