import express from 'express';
import { getAllPosts, deletePost, createNewPost } from '../controllers/posts';
import { changePostLikedState, getPostLikedState } from '../controllers/userPostJunction';

export default (router: express.Router) => {
    // /posts
    router.get('/posts', getAllPosts);
    router.post('/posts', createNewPost);
    router.delete('/posts/:id', deletePost);
    // router.patch('/posts/:id', updatePost);
    
    // ACTIONS
    router.post('/posts/like', changePostLikedState);
    router.post('/posts/status', getPostLikedState);
    
    return router;
}