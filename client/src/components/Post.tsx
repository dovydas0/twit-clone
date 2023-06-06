import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import PostType from './types/PostType';
import { useState } from 'react';

interface PostProps {
    onClick: (data: PostType) => void;
    Post: PostType;
    updateLikedPost: (e: React.MouseEvent, post: PostType, isLiked: boolean) => void;
}

const Post: React.FC<PostProps> = ({
    onClick,
    Post,
    updateLikedPost
}) => {
    const [ isLiked, setIsLiked ] = useState(false)
    const [ likes, setLikes ] = useState(Post.likes || 0)

    const handlePostLike = (e: React.MouseEvent, post: PostType) => {
        if (!isLiked) {
            setLikes(prev => prev + 1);
        } else {
            setLikes(prev => prev - 1);
        }
        updateLikedPost(e, post, isLiked);
        setIsLiked(!isLiked);
    }
    
  return (
    <div 
        onClick={() => onClick(Post)}
        className="
            flex
            pl-3
            py-2
            border-b
            border-white/20
            hover:bg-neutral-100/5
            cursor-pointer
            transition
        "
    >
        <div className="mr-3">
            <img
                src={Post.user_avatar} 
                alt="avatar"
                className="rounded-full w-12 h-12"
            />
        </div>
        <div className="flex flex-col gap-2">
            <div>
                <b>{Post.username}</b>
            </div> 
            <div className=' break-all'>
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