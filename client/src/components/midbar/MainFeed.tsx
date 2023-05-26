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
        <>
            {
                postData.map((post, index) => (
                    <Post 
                    key={index}
                    onClick={onClick}
                    postData={post}
                    />
                ))
            }
        </>
    )
}

export default MainFeed