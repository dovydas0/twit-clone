import Post from "../Post"
import { PostType } from "../../types/PostType";
import axios from "axios";
import { User } from "../../types/UserType";

interface MainFeedProps {
    loggedUser: User;
    onClick: (data: PostType) => void;
    postData: PostType[];
    setPosts: React.Dispatch<React.SetStateAction<PostType[]>>;
}

const MainFeed: React.FC<MainFeedProps> = ({
    loggedUser,
    onClick,
    postData,
    setPosts
}) => {

    const updateLikedPost = async (e: React.MouseEvent, post: PostType, isLiked: boolean) => {
        e.stopPropagation();

        const data = {
            userID: loggedUser.id,
            postID: post.post_id,
            isLiked: isLiked
        }
                
        await axios.post(import.meta.env.VITE_API_SERVER_URL + `/posts/like`, data);
    }
      
    return (
        <>
            {
                postData.length > 0 ? (
                    postData.map((post) => (
                        <Post 
                            key={post.post_id}
                            loggedUser={loggedUser}
                            onClick={onClick}
                            Post={post}
                            updateLikedPost={updateLikedPost}
                        />
                    ))
                ) : (
                    <div>
                        <h2 className="mt-6 text-xl text-neutral-500 flex justify-center">
                            No posts found
                        </h2>
                    </div>
                )
            }
        </>
    )
}

export default MainFeed