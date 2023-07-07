import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { User } from "../types/UserType";
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import axios from "axios";
import { CommentType } from "../types/CommentType";

interface CommentProps {
    owner_avatar: string;
    comment_id: string;
    post_id: string | undefined;
    username: string;
    content: string;
    likes: number;
    loggedUser: User;
    handleCommentsUpdate: (data: CommentType[]) => void;
}

const Comment: React.FC<CommentProps> = ({
    owner_avatar,
    comment_id,
    post_id,
    username,
    content,
    likes,
    loggedUser,
    handleCommentsUpdate
}) => {
    // States
    const [ isLiked, setIsLiked ] = useState(false)

    // Navigation
    const navigate = useNavigate();    

    // Setting comment liked states
    useEffect(() => {
        const getCommentStatus = async () => {
            const commentStatusData = await axios.post(import.meta.env.VITE_API_SERVER_URL + "/comment/status", { commentID: comment_id, userID: loggedUser.id }, {withCredentials: true});
            
            if (commentStatusData.data) {
                setIsLiked(commentStatusData.data.is_liked)                
            }
        }        
        getCommentStatus()
    }, [])

    const handleCommentLike = async (e: React.MouseEvent) => {
        e.stopPropagation();
        
        // If user is not logged in navigate to login page
        if (Object.keys(loggedUser).length < 1) {
            navigate('/login')
            return;
        }

        const data = {
            userID: loggedUser.id,
            commentID: comment_id,
            postID: post_id,
            isLiked: !isLiked
        }
        
        // Storing updated comment data in db
        await axios.post(import.meta.env.VITE_API_SERVER_URL + `/comment/like`, data, {withCredentials: true});
        
        setIsLiked(prev => !prev);

        // Fetching updated comments from db
        const updatedComments = await axios.get(import.meta.env.VITE_API_SERVER_URL + `/comments/${post_id}`)

        handleCommentsUpdate(updatedComments.data);
    }

  return (
    <div
        className='
            flex
            gap-3
            px-4
            pt-3
            pb-1
            w-full
            border-b
            border-neutral-500/50
            hover:bg-neutral-100/5
            cursor-pointer
            transition
        '
    >
        <img 
            src={owner_avatar} 
            alt="comment owner image"
            className="w-10 h-10 object-cover rounded-full"
        />
        <div className="mr-8">
            <div>
                <div className="font-semibold capitalize">
                    {username}
                </div>
            </div>
            <div className="">
                {content}
            </div>
            <div className="
                flex
                items-center
                mt-1
                ">
                <div
                    onClick={handleCommentLike}
                    className={`
                        w-fit
                        p-2
                        rounded-full
                        transition
                        cursor-pointer
                        hover:text-pink-600
                        hover:bg-pink-600/10
                        ${ isLiked ? 'text-pink-600' : 'text-neutral-500'}
                    `}
                >
                {
                    isLiked ? (
                        <AiFillHeart size={18} />
                        ) : (
                        <AiOutlineHeart size={18} 
                            className=''
                        />
                    )
                }
                </div>
                <p className="text-xs text-neutral-400">{likes}</p>
            </div>
        </div>
    </div>
  )
}

export default Comment