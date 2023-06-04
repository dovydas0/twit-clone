export default interface PostType {
    id: string;
    created_at: Date;
    user_id: string;
    content: string;
    liked: number;
}