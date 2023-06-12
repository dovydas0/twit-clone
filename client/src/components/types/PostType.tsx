export default interface PostType {
    post_id: string;
    post_created_at: Date;
    user_id: string;
    content: string;
    likes: number;
    user_created_at: Date;
    username: string;
    user_avatar: string;
    cover_image: string;
}