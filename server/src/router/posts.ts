import express from 'express';
import { getAllPosts, deletePost, createNewPost, updatePostLikes } from '../controllers/posts';

export default (router: express.Router) => {
    // /posts
    router.get('/posts', getAllPosts);
    router.post('/posts', createNewPost);
    router.delete('/posts/:id', deletePost);
    // router.patch('/posts/:id', updatePost);
    
    // /posts/like/:id
    router.post('/posts/like/:id', updatePostLikes);
    
    return router;
}