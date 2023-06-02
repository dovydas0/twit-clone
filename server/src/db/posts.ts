import { poolNew } from './dbImplementation';

export const getPosts = () => poolNew.query('SELECT * FROM post_table');

export const createPost = (userID: string, content: string) => {
    return poolNew.query(`
        INSERT INTO post_table (user_id, content) 
        VALUES ($1, $2)`,
        [userID, content]
        );
}

export const deletePostById = (postID: string) => { 
    return poolNew.query('DELETE FROM post_table WHERE id = $1', [postID])
};

export const getPostById = (postID: string) => { 
    return poolNew.query('SELECT * FROM post_table WHERE id = $1', [postID])
};

// export const updatePostById = (postID: string) => {
//     return poolNew.query('SELECT * FROM post_table WHERE id = $1', [postID])
// };


