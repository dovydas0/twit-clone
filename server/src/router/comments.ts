import express from 'express';
import { getAllComments, deleteComment, createNewComment } from '../controllers/comments';
import { changeCommentLikedState, getCommentLikedState } from '../controllers/userCommentJunstion';
import { isAuthenticated } from '../middleware/isAuthenticated';

export default (router: express.Router) => {
    // /comments
    router.get('/comments/:id', getAllComments);
    router.post('/comments', isAuthenticated, createNewComment);
    router.delete('/comments/:id', isAuthenticated, deleteComment);
    // router.patch('/posts/:id', updatePost);
    
    // ACTIONS
    router.post('/comment/like', isAuthenticated, changeCommentLikedState);
    router.post('/comment/status', isAuthenticated, getCommentLikedState);

    return router;
}