export type CommentType = {
    comment_id: string;
    comment_created_at: Date;
    user_id: string;
    content: string;
    likes: number;
    post_id: string;
    user_created_at: Date;
    username: string;
    user_avatar: string;
    user_cover_image: string;
}