import { PostType } from "../types/PostType"
import { CommentType } from "../types/CommentType"
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { BiArrowBack } from "react-icons/bi";
import { User } from "../types/UserType";
import InputTextArea from "./custom_elements/InputTextArea";
import BlueButton from "./custom_elements/BlueButton";
import Button from "./custom_elements/Button";
import Comment from "./Comment";

import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface PostElementProps {
    loggedUser: User;
    theme: string;
    post: PostType | null;
    onClose: (e: React.MouseEvent) => void;
    handleActivePostUpdate: (data: PostType[]) => void;
}

const PostElement: React.FC<PostElementProps> = ({
    loggedUser,
    theme,
    post,
    onClose,
    handleActivePostUpdate
}) => {
    const [ isLiked, setIsLiked ] = useState(false)
    const [ commentValue, setCommentValue ] = useState('');
    const [ postComments, setPostComments ] = useState<CommentType[]>([]);

    const navigate = useNavigate();

    const postDate = new Date(post?.post_created_at as Date);    

    const CreatedDate = postDate.getDate() + ' ' + postDate.toLocaleString('default', { month: 'short'}) + ' ' + postDate.getFullYear();
    
    if (Object.keys(loggedUser).length < 1) {
        // don't allow any buttons to be interactive
    }

    useEffect(() => {
        const getPostStatus = async () => {
            const postStatusString = import.meta.env.VITE_API_SERVER_URL + "/posts/status";
            const postStatusData = await axios.post(postStatusString, { userID: loggedUser.id, postID: post?.post_id }, {withCredentials: true});

            if (postStatusData.data) {
                setIsLiked(postStatusData.data.is_liked)                
            }
        }

        if (Object.keys(loggedUser).length > 0) {
            getPostStatus()
        }
    }, [])    

    useEffect(() => {
        const getComments = async () => {
            const comments = await axios.get(import.meta.env.VITE_API_SERVER_URL + `/comments/${post?.post_id}`)
            
            setPostComments(comments.data)
        }        

        getComments();
    }, [])

    const handlePostComment = async () => {
        const commentData = {
            userID: loggedUser.id,
            postID: post?.post_id,
            content: commentValue
        }

        await axios.post(import.meta.env.VITE_API_SERVER_URL + '/comments', commentData, {withCredentials: true})

        const allComments = await axios.get(import.meta.env.VITE_API_SERVER_URL + `/comments/${post?.post_id}`)

        setPostComments(allComments.data)
        setCommentValue('');
    }    

    const handlePostLike = async (e: React.MouseEvent, post: PostType) => {
        e.stopPropagation();
        
        // If user is not logged in navigate to login page
        if (Object.keys(loggedUser).length < 1) {
            navigate('/login')
            return;
        }

        const data = {
            userID: loggedUser.id,
            postID: post.post_id,
            isLiked: !isLiked
        }
        
        // Storing updated post data in db
        await axios.post(import.meta.env.VITE_API_SERVER_URL + `/posts/like`, data, {withCredentials: true});
        
        setIsLiked(prev => !prev);

        // Fetching updated posts from db
        const updatedPosts = await axios.get(import.meta.env.VITE_API_SERVER_URL + '/posts')

        handleActivePostUpdate(updatedPosts.data);
    }    

    const handleCommentsUpdate = async (data: CommentType[]) => {            
        setPostComments(data)
    }

  return (
    <div className="h-full">
        <div 
            className="
                flex
                flex-col
                px-4
                py-2
                border-b
                border-neutral-500/50
            "
        >
            <div className="flex items-center gap-6 pb-4">
                <BiArrowBack 
                    size={34}
                    onClick={onClose}
                    className="
                        cursor-pointer
                        hover:bg-slate-100/10
                        rounded-full
                        p-1.5
                        transition
                    "/>
                <p className="text-xl font-bold">Tweet</p>
            </div>
            <div className="flex justify-between">
                <div className="flex">
                    <img
                        src={post?.user_avatar} 
                        alt="avatar"
                        className="rounded-full w-10 h-10 mr-3"
                    />
                    <div className="mt-1 gap-2">
                        <b className="capitalize text-[15px]">{post?.username}</b>
                    </div>
                </div>
                {
                    Object.keys(loggedUser).length > 0 && (
                        <div>
                            <Button
                                medium
                                value="Follow"
                            />
                        </div>
                    )
                }
            </div>
            <div className="mb-4 break-all">
                <p className='text-lg mt-4'>
                    {post?.content}
                </p>
            </div>
            <div className="pb-2 text-neutral-400 font-normal text-xs border-b  border-neutral-500/50">
                <p>{CreatedDate}</p>
            </div>
            <div className="py-2 border-b border-neutral-500/50">
                <p className="text-sm font-semibold">
                    {post?.likes} <span className="text-neutral-400 font-normal text-xs">
                                    Likes
                                    </span>
                </p>
            </div>
            <div
                onClick={(e) => {handlePostLike(e, post as PostType)}}
                className={`
                    flex
                    gap-1
                    w-fit
                    p-2
                    mt-1
                    items-center
                    hover:text-pink-600
                    hover:bg-pink-600/10
                    rounded-full
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
                        className=''
                    />
                )
            }
            </div>
            {
                Object.keys(loggedUser).length > 0 ? (
                    <div className="
                        flex
                        pt-4
                        my-2
                        border-t
                        border-neutral-500/50
                    ">
                        <div className="min-w-[2.7rem]">
                            <img
                                src={loggedUser.avatar} 
                                alt="avatar"
                                className="rounded-full object-cover w-10 h-10"
                            />
                        </div>
                        <InputTextArea 
                            theme={theme}
                            inputValue={commentValue}
                            setInputValue={setCommentValue}
                            placeholder="Tweet your reply!"
                            classes="mr-2 "
                        />
                        <BlueButton 
                            value="Reply"
                            onClick={handlePostComment}
                        />
                    </div>
                ) : (
                    ""
                )
            }
        </div>
        {
            postComments.length !== 0 ? 
                <div 
                onClick={() => {}}
                className="">
                    {
                        postComments.map(comment => (
                            <Comment
                                key={comment.comment_id}
                                comment_id={comment.comment_id}
                                post_id={post?.post_id}
                                owner_avatar={comment.user_avatar}
                                username={comment.username}
                                content={comment.content}
                                likes={comment.likes}
                                loggedUser={loggedUser}
                                handleCommentsUpdate={handleCommentsUpdate}
                            />
                        ))
                    }
                </div>
            :
                <div 
                onClick={() => {}}
                className="
                    flex
                    justify-center
                    py-6
                    text-neutral-400
                    text-sm
                ">
                    No Comments
                </div>
        }
    </div>
  )
}

export default PostElement