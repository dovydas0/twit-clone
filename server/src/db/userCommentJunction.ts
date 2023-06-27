import { poolNew } from './dbImplementation';

export const getPostCommentRow = (commentID: string, userID: string) => poolNew.query(`
    SELECT *
    FROM comments_table
    WHERE comment_id = $1
    AND user_id = $2`,
    [commentID, userID]
)

export const createStateEntry = (userID: string, postID: string, commentID: string, isLiked: boolean) => poolNew.query(`
    INSERT INTO comments_table (user_id, post_id, comment_id, is_Liked)
    VALUES ($1, $2, $3, $4)`,
    [userID, postID, commentID, isLiked]
)

export const changeCommentState = (commentID: string, isLiked: boolean) => poolNew.query(`
    UPDATE comments_table
    SET is_Liked = $2
    WHERE comment_id = $1`,
    [commentID, isLiked]
)