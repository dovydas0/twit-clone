import { poolNew } from './dbImplementation';
import { dbUser } from '../types/userObject'


export const getUsers = () => poolNew.query('SELECT * FROM user_table');

export const getByEmail = (userEmail: string) => poolNew.query('SELECT * FROM user_table WHERE email = $1', [ userEmail ]);
export const getUserById = (userID: string) => poolNew.query('SELECT * FROM user_table WHERE id = $1', [ userID ]);
export const deleteUserById = (userID: string) => poolNew.query('DELETE FROM user_table WHERE id = $1', [ userID ]);

export const createUser = (
    username: string, 
    password: string, 
    email: string, 
    dob: Date
    ) => {
    
    return poolNew.query(`
        INSERT INTO user_table (username, password, email, dob, avatar) 
        VALUES ($1, $2, $3, $4, $5)`,
        [   username, 
            password,
            email,
            dob,
            'default_avatar.jpg' ]
        );
}

export const updateUserById = (userID: string, userObject: dbUser ) => {
    return poolNew.query(`
        UPDATE user_table
        SET username = $2,
            bio = $3,
            location = $4,
            website = $5,
            avatar = $6,
            cover_image = $7,
            tweet_count = $8
        WHERE id = $1;
        `,
        [
            userID,
            userObject.username,
            userObject.bio,
            userObject.location,
            userObject.website,
            userObject.avatar,
            userObject.cover_image,
            userObject.tweet_count
        ]);
}