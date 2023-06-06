import { FormEvent } from "react";
import BlueButton from "../custom_elements/BlueButton";
import InputTextArea from "../custom_elements/InputTextArea";

interface PostInputProps {
    theme: string;
    handlePost: (e: FormEvent) => void;
}

const PostInput: React.FC<PostInputProps> = ({
    theme,
    handlePost
}) => {


  return (
    <div className="py-2 flex w-full border-white/20 border-y">
        <img src="/default_avatar.jpg" className="w-12 h-12 ml-3 rounded-full"></img>
        <div className="
            flex
            flex-col
            w-full
        ">
            <form action="submit" onSubmit={(e) => handlePost(e)}>
                <InputTextArea 
                    theme={theme}
                    placeholder="What is happening?!"
                    classes="border-white/20 border-b"
                />
                <div className='
                    mr-3
                    mt-2
                    flex
                    justify-end
                    '>
                    <BlueButton value="Tweet" />
                </div>
            </form>
        </div>
    </div>
  )
}

export default PostInput