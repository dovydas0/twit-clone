import express from 'express';
import { getAllUsers, deleteUser, updateUser, getUserByEmail } from '../controllers/users';
import { isAuthenticated } from '../middleware/isAuthenticated';

export default (router: express.Router) => {
    router.get('/users', isAuthenticated, getAllUsers);
    router.post('/users/email', getUserByEmail);
    router.delete('/users/:id', deleteUser);
    // router.patch('/users/:id', updateUser);
}