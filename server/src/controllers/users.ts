import express from 'express';
import { validateUUID } from '../utils';

import { deleteUserById, getUserById, getByEmail, getUsers, updateUserById } from "../db/users"

export const getAllUsers = async (req: express.Request, res: express.Response) => {
    try {
        const users = await getUsers();
        return res.status(200).json(users.rows);
    } catch (error) {
        console.log(error);
        return res.status(404).json({ message: "No users found" });        
    }
}

export const getUserByEmail = async (req: express.Request, res: express.Response) => {
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

export const updateUser = async (req: express.Request, res: express.Response) => {
    try {
        const { id } = req.params;
        const user = req.body;

        if (user.name.length < 4 || !user.avatar) {
            return res.status(404).json({ message: 'Invalid request'})
        }
    
        const { rows } = await getUserById(id);
        
        delete rows[0].password;

        const updatedUserObject = {
            ...rows[0],
            username: rows[0].username,
            bio: rows[0].bio,
            location: rows[0].location,
            website: rows[0].website,
            avatar: rows[0].avatar,
            cover_image: rows[0].cover_image
        }
        
        console.log('db info:', updatedUserObject);
        

        if (user.name !== updatedUserObject.username) {
            updatedUserObject.username = user.name;
        }
        
        if (user.bio !== updatedUserObject.bio) {
            updatedUserObject.bio = user.bio;
        }

        if (user.location !== updatedUserObject.location) {
            updatedUserObject.location = user.location;
        }
        
        if (user.website !== updatedUserObject.website) {
            updatedUserObject.website = user.website;
        }
        
        if (user.avatar !== updatedUserObject.avatar) {
            updatedUserObject.avatar = user.avatar;
        }

        if (user.cover_image !== updatedUserObject.cover_image) {
            updatedUserObject.cover_image = user.cover_image;
        }
        
        await updateUserById(id, updatedUserObject)

        return res.status(200).json(updatedUserObject);
    } catch (error) {
        console.log(error);
        return res.status(404).json({ message: 'Something went wrong'})
    }
}
