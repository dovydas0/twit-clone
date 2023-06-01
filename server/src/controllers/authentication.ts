import { v4 as uuid } from 'uuid';
import { poolNew } from '../db/dbImplementation';

export const addUser = (
    username: string,
    password: string,
    email: string,
    date: Date
) => {
    poolNew.query(`
        INSERT INTO user_table (
            username,
            password,
            email,
            dob
        ) VALUES (
            $1, $2, $3, $4, $5
        )`, 
        [
            username,
            password,
            email,
            date
        ]
    )
}


