import express from 'express';
import { register, login, reconnection } from '../controllers/authentication';
import { isAuthenticated } from '../middleware/isAuthenticated';

export default (router: express.Router) => {
    router.post('/auth/register', register);
    router.post('/auth/login', login);
    router.get('/auth/user', isAuthenticated, reconnection);
}