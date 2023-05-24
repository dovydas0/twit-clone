import Post from "../Post"
import DummyData from "../types/DummyDataType";

interface MainFeedProps {
    onClick: (data: DummyData) => void;
    postData: DummyData[];
}

const MainFeed: React.FC<MainFeedProps> = ({
    onClick,
    postData
}) => {
  
    return (
        <div>
            {
                postData.map((post) => (
                    <Post 
                    key={post.content}
                    onClick={onClick}
                    postData={post}
                    />
                ))
            }
        </div>
    )
}

export default MainFeed