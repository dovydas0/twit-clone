import express from 'express';
import { changeCommentState, createStateEntry, getPostCommentRow } from '../db/userCommentJunction';
import { getCommentById, updateCommentById } from '../db/comments';



export const changeCommentLikedState = async (req: express.Request, res: express.Response) => {
    try {
        const { userID, commentID, postID, isLiked } = req.body;

        const postCommentRow = await getPostCommentRow(commentID, userID);

        // Checking if the relation entry already exists in the database
        if (postCommentRow.rows[0] === undefined) {
            await createStateEntry(userID, postID, commentID, isLiked)
        } else {
            await changeCommentState(commentID, isLiked)
        }

        // Fetching the post to check like count
        const { rows } = await getCommentById(commentID);
        
        if (isLiked) {
            rows[0].likes++;
        } else {
            rows[0].likes--;
        }
        
        // Updating the post
        await updateCommentById(commentID, rows[0].content, rows[0].likes)

        return res.status(200).json({ message: 'Operation successful'});


    } catch (error) {
        console.log(error);
        
        return res.status(400).json({ message: "Something went wrong"});
    }
}

export const getCommentLikedState = async (req: express.Request, res: express.Response) => {
    try {
        const { commentID, userID } = req.body;

        const postCommentRow = await getPostCommentRow(commentID, userID);

        return res.status(200).json(postCommentRow.rows[0]);
    } catch (error) {
        console.log(error);
        
        return res.status(400).json({ message: 'Something went wrong'});
    }
}