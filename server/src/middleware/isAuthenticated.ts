import jwt from 'jsonwebtoken';
import express from 'express';

export const isAuthenticated = (req: express.Request, res: express.Response, next: express.NextFunction) => {
    try {
        const sessionToken = req.cookies['USER_TOKEN'];
        
        if (!sessionToken) {
            return res.sendStatus(403);
        }
        
        // Verifying session token
        const user = jwt.verify(sessionToken, process.env.JWT_SECRET_KEY)

        return next();
    } catch (error) {
        res.clearCookie('USER_TOKEN');
        return res.sendStatus(403);
    }
};