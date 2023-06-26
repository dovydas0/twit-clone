import express from 'express';
import { validateUUID } from '../utils';
import { v4 as uuid, validate } from 'uuid';

import { getPosts, deletePostById, createPost, getPostById, updatePostById } from "../db/posts"
import { getUserById, updateUserById } from '../db/users';

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

        if (!content.trim()) {
            return res.status(400).json({ message: "No content provided" });
        }

        const { rows } = await getUserById(userID)
        
        // Checking if user exists
        if (rows.length < 1) {
            return res.status(400).json({ message: "Invalid user ID" });
        }

        await createPost(userID, content);        

        const updatedUserObject = {
            ...rows[0],
            tweet_count: rows[0].tweet_count + 1
        }

        await updateUserById(userID, updatedUserObject)

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

export const updatePostLikes = async(req: express.Request, res: express.Response) => {
    try {
        const { id } = req.params;
        const isLiked = req.body;

        const { rows } = await getPostById(id);        

        // Checking if the post has already been liked
        if (!isLiked.isLiked) {
            rows[0].liked++;
        } else {
            rows[0].liked--;
        }

        // Updating the post
        const updatedPost = await updatePostById(id, rows[0].content, rows[0].liked)
        console.log(updatedPost[0].rows);
        
    } catch (error) {
        return res.status(400).json({ message: "Invalid post ID" });
    }
}