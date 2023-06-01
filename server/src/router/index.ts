import express from 'express';
import users from './users';
import posts from './posts';

const router = express.Router();

export default (): express.Router => {
    users(router);
    posts(router);

    return router;
}

