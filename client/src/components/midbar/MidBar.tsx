import ContentType from "./ContentType";
import PostInput from "./PostInput";
import MainFeed from "./MainFeed";
import { FormEvent, useCallback, useEffect, useState } from 'react';
import PostElement from "../PostElement";
import PostType from "../types/PostType";
import axios from "axios";

enum CONTENT {
  MAINFEED = 0,
  POST = 1
}

function MidBar() {
  const [ feedType, setFeedType ] = useState("forYou");
  const [ showContent, setShowContent ] = useState(CONTENT.MAINFEED);
  const [ activePost, setActivePost ] = useState<PostType | null>(null);
  const [ posts, setPosts ] = useState<PostType[]>([]);
  const [ inputValue, setInputValue ] = useState("");
  const theme = 'dark';
  let content;
  
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const postString = import.meta.env.VITE_API_SERVER_URL + "/posts";
        const data = await axios.get(postString);        

        setPosts(data.data); 
      } catch (error) {
        console.log(error);
      }
    };

    fetchPosts();
  }, [])

  const handlePost = async (e: FormEvent) => {
    e.preventDefault()
    const url = import.meta.env.VITE_API_SERVER_URL + "/posts";

    if (inputValue === '') {
      return;
    }

    await axios.post(url, { userID: "8177fd72-cc06-4564-bbd7-1f2a75430d85", content: inputValue })

    // Fetching updated posts
    const updatedPosts = await axios.get(url);    
    
    setPosts(updatedPosts.data)
    setInputValue('');
  }

  const handleFeedType = useCallback((type: string) => {
    if (type === "forYou") {
      setFeedType("forYou");
    } else {
      setFeedType("following");
    }    

  }, [feedType])

  const handlePostOpen = useCallback((post: PostType) => {
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
          <PostInput theme={theme} handlePost={handlePost} inputValue={inputValue} setInputValue={setInputValue} />
          <MainFeed onClick={handlePostOpen} postData={posts} setPosts={setPosts} />
        </>
    )
  }

  if (showContent === CONTENT.POST) {
    content = (
      <PostElement 
        theme={theme}
        inputValue={inputValue}
        setInputValue={setInputValue}
        post={activePost}
        onClose={handlePostClose}
      />
    )
  }

  return (
    <>
      {content}
    </>
  )
}

export default MidBar;
