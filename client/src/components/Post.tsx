import { AiOutlineHeart } from 'react-icons/ai';

interface PostProps {
    author: string;
    content: string;
    likes: number;
}

const Post: React.FC<PostProps> = ({
    author,
    content,
    likes,
}) => {

  return (
    <div className="
        flex
        pl-3
        py-2
        border-b
        border-neutral-200/20
    ">
        <div className="mr-3">
            <img
                src="/placeholder.jpg" 
                alt="avatar"
                className="rounded-full w-12 h-12"
            />
        </div>
        <div className="flex flex-col gap-2">
            <div>
                <b>{author}</b>
            </div> 
            <div>
                <p className='text-[15px]'>
                    {content}
                </p>
            </div>
            <div className='flex gap-1'>
                <AiOutlineHeart />
                <p className="text-xs">{likes}</p>
            </div>
        </div>
    </div>
  )
}

export default Post