import express from 'express';
import { getAllPosts, deletePost, createNewPost } from '../controllers/posts';

export default (router: express.Router) => {
    router.get('/posts', getAllPosts);
    router.post('/posts', createNewPost);
    router.delete('/posts/:id', deletePost);
    // router.patch('/posts/:id', updatePost);
    
    return router;
}