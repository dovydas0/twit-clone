import { poolNew } from './dbImplementation';

// Getting posts together with post owner information
export const getPosts = () => poolNew.query(`
    SELECT 
        pt.id as post_id,
        pt.created_at as post_created_at,
        pt.user_id, 
        pt.content, 
        pt.likes,
        ut.created_at as user_created_at,
        ut.username,
        ut.avatar as user_avatar,
        ut.cover_image as user_cover_image
    FROM post_table pt JOIN user_table ut 
    ON ut.id = pt.user_id
    ORDER BY pt.created_at DESC;
`);

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

export const updatePostById = (postID: string, content: string, liked: number) => {
    return poolNew.query(`
        UPDATE post_table SET 
        content=$2, 
        liked=$3 
        WHERE id = $1;`,
        [postID, content, liked])
};


