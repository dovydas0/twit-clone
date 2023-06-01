import express from 'express';
import { validateUUID } from '../utils';
import { v4 as uuid, validate } from 'uuid';

import { getPosts, deletePostById, createPost, getPostById } from "../db/posts"
import { getUserById } from '../db/users';

export const getAllPosts = async(req: express.Request, res: express.Response) => {
    try {
        const { rows } = await getPosts();
        return res.status(200).json(rows);
    } catch (error) {
        console.log(error);
        return res.status(404).json({ message: "No posts found" });        
    }
}

export const createNewPost = async(req: express.Request, res: express.Response) => {

    try {
        const { userID, content } = req.body;

        if (!validateUUID(userID)) {
            return res.status(400).json({ message: "Invalid user ID" });
        }

        // Checking is user exists
        const { rows } = await getUserById(userID)
        if (rows.length < 1) {
            return res.status(400).json({ message: "Invalid user ID" });
        }

        await createPost(userID, content);        

        return res.status(200).json({ message: "Post created" });
    } catch (error) {
    
        return res.status(400).json({ message: "Post creation failed" });
    }
}

export const deletePost = async(req:express.Request, res: express.Response) => {

    try {
        const { id } = req.params;

        if (!validateUUID(id)) {
            return res.status(400).json({ message: "Invalid post ID" });
        }

        const { rows } = await getPostById(id);

        if (rows.length < 1) {
            return res.status(400).json({ message: "Invalid post ID" });
        }

        await deletePostById(id)

        return res.status(200).json({ message: "Post deleted" });
    } catch (error) {
        return res.status(400).json({ message: "Something went wrong" });
    }

}