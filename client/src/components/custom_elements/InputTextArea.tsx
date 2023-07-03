import useAutosizeTextArea from '../useAutosizeTextArea';
import { useRef } from 'react';

interface InputTextAreaProps {
  inputValue: string;
  setInputValue: (value: string) => void;
  placeholder: string;
  classes?: string;
}

const InputTextArea: React.FC<InputTextAreaProps> = ({
  inputValue,
  setInputValue,
  placeholder, 
  classes = "",
}) => {
  // Use this state to send the content to db and to restore empty input
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  useAutosizeTextArea(textAreaRef.current, inputValue);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      const val = e.target?.value;

      setInputValue(val);
  };

  return (
    <textarea                     
      placeholder={placeholder}
      onChange={handleChange}
      ref={textAreaRef}
      rows={1}
      value={inputValue}
      className={`                    
          resize-none
          overflow-hidden
          w-[93%]
          text-xl
          ml-1
          p-2
          outline-none
          dark:bg-[#15202B]
          bg-white
          ${classes}
      `}
    >
    </textarea>
  )
}

export default InputTextArea