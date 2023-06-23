import express from 'express'
import { uploadImg } from '../controllers/images'

export default (router: express.Router) => {
    router.post('/media/upload', uploadImg);
}