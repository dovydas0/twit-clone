import { poolNew } from './dbImplementation';

export const getUserPostRow = (userID: string, postID: string) => poolNew.query(`
    SELECT *
    FROM user_post_table
    WHERE user_id = $1
    AND post_id = $2`,
    [userID, postID]
)

export const createStateEntry = (userID: string, postID: string, isLiked: boolean) => poolNew.query(`
    INSERT INTO user_post_table (user_id, post_id, is_Liked)
    VALUES ($1, $2, $3)`,
    [userID, postID, isLiked]
)

export const changeLikedState = (userID: string, postID: string, isLiked: boolean) => poolNew.query(`
    UPDATE user_post_table
    SET is_Liked = $3
    WHERE user_id = $1
    AND post_id = $2`,
    [userID, postID, isLiked]
)