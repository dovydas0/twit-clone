
import { useRef, useState } from 'react';
import useAutosizeTextArea from '../useAutosizeTextArea';

interface PostInputProps {
    theme: string;
}

const PostInput: React.FC<PostInputProps> = ({
    theme
}) => {

    const [value, setValue] = useState("");
    const textAreaRef = useRef<HTMLTextAreaElement>(null);

    useAutosizeTextArea(textAreaRef.current, value);

    const handleChange = (evt: React.ChangeEvent<HTMLTextAreaElement>) => {
    const val = evt.target?.value;

    setValue(val);
    };


  return (
    <div className="py-2 flex w-full border-neutral-200/20 border-y">
        <img src="/placeholder.jpg" className="w-12 h-12 ml-3 rounded-full"></img>
        <div className="
            flex
            flex-col
            w-full
        ">
            <form action="submit">
                <textarea                     
                    placeholder="What is happening?!"
                    onChange={handleChange}
                    ref={textAreaRef}
                    rows={1}
                    value={value}
                    className={`                    
                        resize-none
                        overflow-hidden
                        w-[93%]
                        text-xl
                        ml-2
                        p-2
                        outline-none
                        border-b
                        border-neutral-200/20
                        ${theme === 'dark' ? 'bg-[#15202B]' : ''}
                    `}
                >
                
                </textarea>
            </form>
            <div className='
                mr-3
                mt-2
                flex
                justify-end
            '>
                <button className='
                    bg-sky-500
                    p-2
                    px-5
                    font-semibold
                    rounded-full
                '>
                    Tweet
                </button>
            </div>
        </div>
    </div>
  )
}

export default PostInput