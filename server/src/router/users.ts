import express from 'express';
import { upload } from '../index'
import { getAllUsers, deleteUser, updateUser, getUserByEmail } from '../controllers/users';
import { isAuthenticated } from '../middleware/isAuthenticated';

export default (router: express.Router) => {
    router.get('/users', isAuthenticated, getAllUsers);
    router.post('/users/email', getUserByEmail);
    router.delete('/users/:id', isAuthenticated, deleteUser);
    router.patch('/users/:id', isAuthenticated, upload.fields([
        { name: 'avatar', maxCount: 1 },
        { name: 'cover_image', maxCount: 1 }
    ]), updateUser);
}