import express from 'express';
import { changeLikedState, createStateEntry, getUserPostRow } from '../db/userPostJunction';
import { getPostById, updatePostById } from '../db/posts';


export const changePostLikedState = async (req: express.Request, res: express.Response) => {
    try {
        const { userID, postID, isLiked } = req.body;

        const userPostRow = await getUserPostRow(userID, postID);

        // Checking if the relation entry already exists in the database
        if (userPostRow.rows[0] === undefined) {
            await createStateEntry(userID, postID, isLiked)
        } else {
            await changeLikedState(userID, postID, isLiked)
        }

        // Fetching the post to check like count
        const { rows } = await getPostById(postID);
        
        if (isLiked) {
            rows[0].likes++;
        } else {
            rows[0].likes--;
        }
        
        // Updating the post
        await updatePostById(postID, rows[0].content, rows[0].likes)

        return res.status(200).json({ message: 'Operation successful'});
    } catch (error) {
        console.log(error);
        
        return res.status(400).json({ message: 'Something went wrong'});
    }
}

export const getPostLikedState = async (req: express.Request, res: express.Response) => {
    try {
        const { userID, postID } = req.body;
        
        const userPostRow = await getUserPostRow(userID, postID);
                
        return res.status(200).json(userPostRow.rows[0]);
    } catch (error) {
        console.log(error);
        
        return res.status(400).json({ message: 'Something went wrong'});
    }
}