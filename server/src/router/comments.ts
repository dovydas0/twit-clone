import express from 'express';
import { getAllComments, deleteComment, createNewComment } from '../controllers/comments';

export default (router: express.Router) => {
    router.get('/comments/:id', getAllComments);
    router.post('/comments', createNewComment);
    router.delete('/comments/:id', deleteComment);
    // router.patch('/posts/:id', updatePost);
    
    return router;
}