import { poolNew } from './dbImplementation';


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

// export const updateUserById = (userID: string) => {
//     return poolNew.query('SELECT * FROM user_table WHERE id = $1', userID);
// }
