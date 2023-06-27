import express from 'express';
import { validateUUID } from '../utils';

import { deleteCommentById, getCommentById, getComments, createComment } from "../db/comments"

export const getAllComments = async(req: express.Request, res: express.Response) => {
    try {
        const { id } = req.params;
        const { rows } = await getComments(id);
        
        return res.status(200).json(rows);
    } catch (error) {
        console.log(error);
        return res.status(404).json({ message: "No comments found" });        
    }
}

export const createNewComment = async(req: express.Request, res: express.Response) => {

    try {
        const { userID, postID, content } = req.body;

        if (!userID || !postID || !content) {
            return res.status(400).json({ message: "Invalid Request: Data missing." });
        }
        
        await createComment(userID, postID, content)        

        return res.status(200).json({ message: "Comment created" });
    } catch (error) {
        
        return res.status(400).json({ message: "Something went wrong" });
    }

}

export const deleteComment = async (req: express.Request, res: express.Response) => {
    try {
        const { id } = req.params;

        if (!validateUUID(id)) {
            return res.status(404).json({ message: "Comment not found" });
        } 
        
        const { rows } = await getCommentById(id);

        if (rows.length < 1) {
            return res.status(404).json({ message: "Comment not found" });
        }
        
        await deleteCommentById(id);

        return res.status(200).json({ message: "Comment deleted" });
    } catch (error) {
        console.log(error);
        return res.status(400);        
    }
}

// export const updateComment = async (req: express.Request, res: express.Response) => {

// }
