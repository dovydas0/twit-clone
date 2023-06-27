import express from 'express';
import { getAllPosts, deletePost, createNewPost } from '../controllers/posts';
import { changePostLikedState, getPostLikedState } from '../controllers/userPostJunction';
import { isAuthenticated } from '../middleware/isAuthenticated';

export default (router: express.Router) => {
    // /posts
    router.get('/posts', getAllPosts);
    router.post('/posts', isAuthenticated, createNewPost);
    router.delete('/posts/:id', isAuthenticated, deletePost);
    // router.patch('/posts/:id', updatePost);
    
    // ACTIONS
    router.post('/posts/like', isAuthenticated, changePostLikedState);
    router.post('/posts/status', isAuthenticated, getPostLikedState);
    
    return router;
}