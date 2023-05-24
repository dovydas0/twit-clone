import { AiOutlineHeart } from 'react-icons/ai';
import DummyData from './types/DummyDataType';

interface PostProps {
    onClick: (data: DummyData) => void
    postData?: DummyData;
}

const Post: React.FC<PostProps> = ({
    onClick,
    postData
}) => {

  return (
    <div 
        onClick={() => onClick(postData)}
        className="
            flex
            pl-3
            py-2
            border-b
            border-neutral-200/20
            hover:bg-neutral-100/5
            cursor-pointer
            transition
        "
    >
        <div className="mr-3">
            <img
                src="/placeholder.jpg" 
                alt="avatar"
                className="rounded-full w-12 h-12"
            />
        </div>
        <div className="flex flex-col gap-2">
            <div>
                <b>{postData.author}</b>
            </div> 
            <div>
                <p className='text-[15px]'>
                    {postData.content}
                </p>
            </div>
            <div className='
                flex
                gap-1
                w-fit
                pr-2
                items-center
                hover:text-pink-600
                transition
                cursor-pointer
            '>
                <AiOutlineHeart size={18} />
                <p className="text-xs">{postData.likes}</p>
            </div>
        </div>
    </div>
  )
}

export default Post