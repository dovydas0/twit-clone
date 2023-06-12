import { poolNew } from './dbImplementation';

export const getComments = () => poolNew.query('SELECT * FROM comment_table');

export const createComment = (userID: string, content: string) => {
    return poolNew.query(`
        INSERT INTO comment_table (user_id, content) 
        VALUES ($1, $2)`,
        [userID, content]
        );
}

export const deleteCommentById = (CommentID: string) => { 
    return poolNew.query('DELETE FROM comment_table WHERE id = $1', [CommentID])
};

export const getCommentById = (CommentID: string) => { 
    return poolNew.query('SELECT * FROM comment_table WHERE id = $1', [CommentID])
};

// export const updateCommentById = (CommentID: string) => {
//     return poolNew.query('SELECT * FROM comment_table WHERE id = $1', [CommentID])
// };


