import { poolNew } from './dbImplementation';

export const getComments = (postID: string) => poolNew.query(`
    SELECT 
        ct.id as comment_id,
        ct.created_at as comment_created_at,
        ct.user_id, 
        ct.content, 
        ct.likes,
        ct.post_id,
        ut.created_at as user_created_at,
        ut.username,
        ut.avatar as user_avatar,
        ut.cover_image as user_cover_image
    FROM comment_table ct
    JOIN user_table ut
    ON ct.user_id = ut.id
    WHERE post_id = $1
    ORDER BY ct.created_at DESC`, 
    [postID]
);

export const createComment = (userID: string, postID: string, content: string) => {
    return poolNew.query(`
        INSERT INTO comment_table (user_id, post_id, content) 
        VALUES ($1, $2, $3)`,
        [userID, postID, content]
        );
}

export const deleteCommentById = (CommentID: string) => { 
    return poolNew.query('DELETE FROM comment_table WHERE id = $1', [CommentID])
};

export const getCommentById = (CommentID: string) => { 
    return poolNew.query('SELECT * FROM comment_table WHERE id = $1', [CommentID])
};

export const updateCommentById = (CommentID: string, content: string, likes: number) => poolNew.query(`
    UPDATE comment_table
    SET content = $2,
        likes = $3
    WHERE id = $1`
    , [CommentID, content, likes])
;


