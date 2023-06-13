import ContentType from "./ContentType";
import PostInput from "./PostInput";
import MainFeed from "./MainFeed";
import { FormEvent, useCallback, useEffect, useState } from 'react';
import PostElement from "../PostElement";
import PostType from "../types/PostType";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useAppSelector } from "../../store/store"
import ExploreHeader from "./ExploreHeader";

enum CONTENT {
  MAINFEED,
  POST
}

function MidBar() {
  const [ feedType, setFeedType ] = useState("forYou");
  const [ showContent, setShowContent ] = useState(CONTENT.MAINFEED);
  const [ activePost, setActivePost ] = useState<PostType | null>(null);
  const [ posts, setPosts ] = useState<PostType[]>([]);
  const [ inputValue, setInputValue ] = useState("");
  const theme = 'dark';
  let content;

  const loggedUser = useAppSelector(state => state.user);
  
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

    if (inputValue.trim() === '') {
      toast.error("Post cannot be empty");
      return;
    }

    await axios.post(url, { userID: "9d0095f1-ef68-4c4c-8f98-05e598bec8e6", content: inputValue.trim() })

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

  if (Object.keys(loggedUser).length === 0) {
    content = (
        <>
          <ExploreHeader />
          <MainFeed isUserLogged={false} onClick={handlePostOpen} postData={posts} setPosts={setPosts} />
        </>
    )
  }

  else if (showContent === CONTENT.MAINFEED) {
    content = (
        <>
          <ContentType feedType={feedType} onClick={handleFeedType} />
          <PostInput theme={theme} handlePost={handlePost} inputValue={inputValue} setInputValue={setInputValue} />
          <MainFeed isUserLogged={true} onClick={handlePostOpen} postData={posts} setPosts={setPosts} />
        </>
    )
  }

  if (showContent === CONTENT.POST) {
    content = (
      <PostElement
        isUserLogged={Object.keys(loggedUser).length === 0 ? false : true}
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
