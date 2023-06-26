import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { PostType } from '../types/PostType';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { User } from '../types/UserType';
import axios from 'axios';

interface PostProps {
    loggedUser: User;
    onClick: (data: PostType) => void;
    Post: PostType;
    updateLikedPost: (e: React.MouseEvent, post: PostType, isLiked: boolean) => void;
}

const Post: React.FC<PostProps> = ({
    loggedUser,
    onClick,
    Post,
    updateLikedPost
}) => {
    const [ isLiked, setIsLiked ] = useState(false)
    const [ likes, setLikes ] = useState(Post.likes || 0)
    const navigate = useNavigate();

    useEffect(() => {
        const getPostStatus = async () => {
            const postStatusString = import.meta.env.VITE_API_SERVER_URL + "/posts/status";
            const postStatusData = await axios.post(postStatusString, { userID: loggedUser.id, postID: Post.post_id });
            
            if (postStatusData.data) {
                setIsLiked(postStatusData.data.is_liked)                
            }
        }
        getPostStatus()
    }, [])    

    const handlePostLike = (e: React.MouseEvent, post: PostType) => {
        // If user is not logged in navigate to login page
        if (Object.keys(loggedUser).length < 1) {
            navigate('/login')
            return;
        }

        if (!isLiked) {
            setLikes(prev => prev + 1);
        } else {
            setLikes(prev => prev - 1);
        }
        updateLikedPost(e, post, !isLiked);
        setIsLiked(prev => !prev);
    }
    
  return (
    <div 
        onClick={() => onClick(Post)}
        className="
            flex
            px-3
            py-2
            border-b
            border-white/20
            hover:bg-neutral-100/5
            cursor-pointer
            transition
        "
    >
        <img
            src={Post.user_avatar} 
            alt="avatar"
            className="rounded-full w-10 h-10 mr-3"
        />
        <div className="flex flex-col gap-2">
            <div>
                <b>{Post.username}</b>
            </div> 
            <div className=''>
                <p className='text-[15px] break-words'>
                    {Post.content}
                </p>
            </div>
            <div
                onClick={(e) => {handlePostLike(e, Post)}}
                className={`
                    flex
                    gap-1
                    w-fit
                    pr-2
                    items-center
                    hover:text-pink-600
                    transition
                    cursor-pointer
                    ${ isLiked ? 'text-pink-600' : 'text-neutral-500'}
                `}
            >
            {
                isLiked ? (
                    <AiFillHeart size={18} />
                    ) : (
                    <AiOutlineHeart size={18} 
                        className='
    
                        '
                        />
                )
            }
            <p className="text-xs">{likes}</p>
            </div>
        </div>
    </div>
  )
}

export default Post