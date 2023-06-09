import express from 'express';
import { getAllUsers, deleteUser, updateUser, createNewUser, getUserByEmail } from '../controllers/users';

export default (router: express.Router) => {
    router.get('/users', getAllUsers);
    router.post('/users', createNewUser);
    router.post('/users/email', getUserByEmail);
    router.delete('/users/:id', deleteUser);
    // router.patch('/users/:id', updateUser);
}