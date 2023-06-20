import { FormEvent, useState } from "react";
import BlueButton from "../custom_elements/BlueButton";
import InputTextArea from "../custom_elements/InputTextArea";

interface PostInputProps {
    theme: string;
    inputValue: string;
    setInputValue: (value: string) => void;
    handlePost: (e: FormEvent) => void;
}

const PostInput: React.FC<PostInputProps> = ({
    theme,
    inputValue,
    setInputValue,
    handlePost
}) => {

  return (
    <div className="py-2 flex w-full border-white/20 border-y">
        <img src="/default_avatar.jpg" className="w-10 h-10 ml-3 rounded-full"></img>
        <div className="
            flex
            flex-col
            w-full
        ">
            <form action="submit" onSubmit={handlePost}>
                <InputTextArea 
                    theme={theme}
                    inputValue={inputValue}
                    setInputValue={setInputValue}
                    placeholder="What is happening?!"
                    classes="border-white/20 border-b"
                />
                <div className='
                    mr-3
                    mt-2
                    flex
                    justify-end
                    '>
                    <BlueButton 
                        disabled={inputValue === ''}
                        value="Tweet"
                    />
                </div>
            </form>
        </div>
    </div>
  )
}

export default PostInput