import { poolNew } from './dbImplementation';


export const getUsers = () => poolNew.query('SELECT * FROM user_table');

export const getUserById = (userID: string) => poolNew.query('SELECT * FROM user_table WHERE id = $1', [ userID ]);
export const deleteUserById = (userID: string) => poolNew.query('DELETE FROM user_table WHERE id = $1', [ userID ]);
// export const updateUserById = (userID: string) => {
//     return poolNew.query('SELECT * FROM user_table WHERE id = $1', userID);
// }


// COMMENTS
export const getComments = () => {
    return poolNew.query('SELECT * FROM comment_table');
}
