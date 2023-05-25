import ContentType from "./ContentType";
import PostInput from "./PostInput";
import MainFeed from "./MainFeed";
import { useCallback, useState } from 'react';
import PostElement from "../PostElement";
import DummyData from "../types/DummyDataType";

enum CONTENT {
  MAINFEED = 0,
  POST = 1
}

const dummy_posts = [
  {
      author: "dummy user",
      content: "Hello this is my first post",
      likes: 3,
  },
  {
      author: "dummy user 2",
      content: "Hello this is my third post",
      likes: 26,
  },
  {
      author: "dummy user",
      content: "Hello this is my first post",
      likes: 3,
  },
  {
      author: "dummy user 2",
      content: "Hello this is my third post",
      likes: 26,
  },
  {
      author: "dummy user",
      content: "Hello this is my first post",
      likes: 3,
  },
  {
      author: "dummy user 2",
      content: "Hello this is my third post",
      likes: 26,
  },
  {
      author: "dummy user",
      content: "Hello this is my first post",
      likes: 3,
  },
  {
      author: "dummy user 2",
      content: "Hello this is my third post",
      likes: 26,
  },
  {
      author: "dummy user",
      content: "Hello this is my first post",
      likes: 3,
  },
  {
      author: "dummy user 2",
      content: "Hello this is my third post",
      likes: 26,
  },
]

function MidBar() {
  const [ feedType, setFeedType ] = useState("forYou");
  const [ showContent, setShowContent ] = useState(CONTENT.MAINFEED);
  const [ activePost, setActivePost ] = useState<DummyData | null>(null);
  const theme = 'dark';
  let content;
  
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
          <MainFeed onClick={handlePostOpen} postData={dummy_posts} />
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
