import Post from "../Post"
import PostType from "../types/PostType";
import { AxiosResponse } from "axios";

interface MainFeedProps {
    onClick: (data: PostType) => void;
    postData: PostType[];
}

const MainFeed: React.FC<MainFeedProps> = ({
    onClick,
    postData
}) => {
  

    console.log(postData);
    
    return (
        <>
            {
                postData?.length > 0 ? (
                    postData.map((post, index) => (
                        <Post 
                            key={index}
                            onClick={onClick}
                            postData={post}
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