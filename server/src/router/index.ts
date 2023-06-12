import express from 'express';
import users from './users';
import posts from './posts';
import comments from './comments';
import authentication from './authentication';

const router = express.Router();

export default (): express.Router => {
    authentication(router);
    users(router);
    posts(router);
    comments(router);

    return router;
}

