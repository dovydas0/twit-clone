import express from 'express';
import { getAllUsers, deleteUser, updateUser, createNewUser } from '../controllers/users';

export default (router: express.Router) => {
    router.get('/users', getAllUsers);
    router.post('/users', createNewUser);
    router.delete('/users/:id', deleteUser);
    // router.patch('/users/:id', updateUser);
}