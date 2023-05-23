import ContentType from "./ContentType";
import PostInput from "./PostInput";
import MainFeed from "../MainFeed";
import { useCallback, useState } from 'react';

function MidBar() {
  const [ feedType, setFeedType ] = useState("forYou");
  const theme = 'dark';
  
  const handleFeedType = useCallback((type: string) => {
    if (type === "forYou") {
      setFeedType("forYou");
    } else {
      setFeedType("following");
    }    

  }, [feedType])

  return (
    <div className="h-full">
        <ContentType feedType={feedType} onClick={handleFeedType} />
        <PostInput theme={theme} />
        <MainFeed />
    </div>
  )
}

export default MidBar;
