import { AiOutlineHeart } from "react-icons/ai";
import Button from "./custom_elements/Button";

interface CommentProps {
    owner_avatar: string;
    username: string;
    content: string;
    likes: number;
}

const Comment: React.FC<CommentProps> = ({
    owner_avatar,
    username,
    content,
    likes
}) => {    

  return (
    <div
        className='
            flex
            gap-3
            p-2
            w-full
            border-b
            border-white/20
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
                <div className='
                    w-fit
                    p-2
                    rounded-full
                    transition
                    cursor-pointer
                    text-neutral-400
                    hover:text-pink-600
                    hover:bg-pink-600/10
                '>
                    <AiOutlineHeart size={18} />
                </div>
                <p className="text-xs text-neutral-400">{likes}</p>
            </div>
        </div>
    </div>
  )
}

export default Comment