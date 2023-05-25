import DummyData from "./types/DummyDataType"

import { AiOutlineHeart } from "react-icons/ai";
import { BiArrowBack } from "react-icons/bi";
import InputTextArea from "./custom_elements/InputTextArea";
import BlueButton from "./custom_elements/BlueButton";

interface PostElementProps {
    theme: string;
    post: DummyData | null;
    onClose: (e: React.MouseEvent) => void;
}

const PostElement: React.FC<PostElementProps> = ({
    theme,
    post,
    onClose
}) => {

  return (
            <div className="h-screen">
                <div 
                    className="
                        flex
                        flex-col
                        px-3
                        py-2
                        border-b
                        border-neutral-200/20
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
                    <div className="flex">
                        <img
                            src="/placeholder.jpg" 
                            alt="avatar"
                            className="rounded-full w-12 h-12 mr-3"
                        />
                        <div className="mt-1 gap-2">
                            <b className=" text-[15px]">{post?.author}</b>
                        </div>
                    </div>
                    <div className="mb-4">
                        <p className='text-lg mt-4'>
                            {post?.content}
                        </p>
                    </div>
                    <div className="mb-4 border-b border-neutral-200/20">
                        <p>"time"</p>
                    </div>
                    <div className="mb-4 border-b border-neutral-200/20">
                        <p>"stats"</p>
                    </div>
                    <div className="mb-4 border-b border-neutral-200/20">
                        <p>"actions"</p>
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
                        <p className="text-xs">{post?.likes}</p>
                    </div>
                    <div className="
                        flex
                        pt-4
                        my-2
                        border-t
                        border-neutral-200/20
                    ">
                        <img
                            src="/placeholder.jpg" 
                            alt="avatar"
                            className="rounded-full w-12 h-12"
                        />
                        <InputTextArea 
                            theme={theme}
                            placeholder="Tweet your reply!"
                            classes="mr-2"
                        />
                        <BlueButton value="Reply" />
                    </div>
                </div>
                {
                    true ? 
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
                    :
                        <div 
                        onClick={() => {}}
                        className="
                            flex
                            flex-col
                            pl-3
                            py-2
                            border-b
                            border-neutral-200/20
                            hover:bg-neutral-100/5
                            cursor-pointer
                            transition
                        ">
                        </div>
                }
            </div>
  )
}

export default PostElement