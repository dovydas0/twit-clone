import express from 'express';
import bcrypt from 'bcrypt';
import { validateUUID } from '../utils';
import { v4 as uuid, validate } from 'uuid';

import { deleteUserById, getUserById, getByEmail, getUsers, createUser } from "../db/users"

export const getAllUsers = async(req: express.Request, res: express.Response) => {
    try {
        const users = await getUsers();
        return res.status(200).json(users.rows);
    } catch (error) {
        console.log(error);
        return res.status(404).json({ message: "No users found" });        
    }
}

export const getUserByEmail = async(req: express.Request, res: express.Response) => {
    try {
        const { email } = req.body;

        const user = await getByEmail(email);        

        if (user.rows.length < 1) {
            return res.status(404).json({ message: "User not found" });
        }
        
        return res.status(200).json(user.rows);
    } catch (error) {
        console.log(error);
        return res.status(404).json({ message: "No user found" });        
    }
}

export const deleteUser = async (req: express.Request, res: express.Response) => {
    try {
        const { id } = req.params;

        if (!validateUUID(id)) {
            return res.status(404).json({ message: "User not found" });
        } 
        
        const { rows } = await getUserById(id);

        if (rows.length < 1) {
            return res.status(404).json({ message: "User not found" });
        }
        
        await deleteUserById(id);

        return res.status(200).json({ message: "User deleted" });
    } catch (error) {
        console.log(error);
        return res.status(400);        
    }
}

export const createNewUser = async(req: express.Request, res: express.Response) => {

    try {
        const { 
            username,
            password,
            email,
            dob,
            avatar,
            cover_image,
            bio,
            location,
            website } = req.body;

        if (!username || !password || !email || !dob) {
            return res.status(400).json({ message: "Invalid Request: Data missing." });
        }
        
        const newPassword = await bcrypt.hash(password, 10)
        await createUser(username, newPassword, email, dob, avatar, cover_image, bio, location, website)        

        return res.status(200).json({ message: "User created" });
    } catch (error) {
        return res.status(400).json({ message: "Something went wrong" });
    }

}

export const updateUser = async (req: express.Request, res: express.Response) => {

}
