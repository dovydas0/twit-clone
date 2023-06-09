import express from 'express';

export const isAuthenticated = (req: express.Request, res: express.Response, next: express.NextFunction) => {
    try {
        const sessionToken = req.cookies['USER_TOKEN'];
        
        if (!sessionToken) {
            return res.sendStatus(403);
        }
        
        console.log(sessionToken);
        

        // const existingUser = await getUserBySessionToken(sessionToken);

        // if (!existingUser) {
        //     return res.sendStatus(403);
        // }

        // merge(req, { identity: existingUser });

        return next();
    } catch (error) {
        return res.sendStatus(400);
    }
};