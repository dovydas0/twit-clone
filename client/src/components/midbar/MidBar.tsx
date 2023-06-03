import ContentType from "./ContentType";
import PostInput from "./PostInput";
import MainFeed from "./MainFeed";
import { useCallback, useEffect, useState } from 'react';
import PostElement from "../PostElement";
import DummyData from "../types/DummyDataType";
import axios from "axios";

enum CONTENT {
  MAINFEED = 0,
  POST = 1
}

let posts = []


function MidBar() {
  const [ feedType, setFeedType ] = useState("forYou");
  const [ showContent, setShowContent ] = useState(CONTENT.MAINFEED);
  const [ activePost, setActivePost ] = useState<DummyData | null>(null);
  const theme = 'dark';
  let content;
  
  useEffect(() => {

    const fetchData = async () => {
      const postString = import.meta.env.VITE_API_SERVER_URL + "/posts";
      const data = await axios.get(postString);

      return data;
    };

    const posts = fetchData();
    
    console.log(posts);
    

  }, [])

  const handleFeedType = useCallback((type: string) => {
    if (type === "forYou") {
      setFeedType("forYou");
    } else {
      setFeedType("following");
    }    

  }, [feedType])

  const handlePostOpen = useCallback((post: DummyData) => {
    setActivePost(post)
    setShowContent(CONTENT.POST)
  }, [showContent, activePost])
  
  const handlePostClose = useCallback(() => {
    setActivePost(null);
    setShowContent(CONTENT.MAINFEED)
  }, [showContent, activePost])

  if (showContent === CONTENT.MAINFEED) {
    content = (
        <>
          <ContentType feedType={feedType} onClick={handleFeedType} />
          <PostInput theme={theme} />
          <MainFeed onClick={handlePostOpen} postData={posts} />
        </>
    )
  }

  if (showContent === CONTENT.POST) {
    content = (
      <PostElement theme={theme} post={activePost} onClose={handlePostClose} />
    )
  }

  return (
    <>
      {content}
    </>
  )
}

export default MidBar;
