import useAutosizeTextArea from '../useAutosizeTextArea';
import {useState, useRef } from 'react';

interface InputTextAreaProps {
  theme: string;
  placeholder: string;
  classes?: string;
}

const InputTextArea: React.FC<InputTextAreaProps> = ({
  theme,
  placeholder, 
  classes = "",
}) => {
  // Use this state to send the content to db and to restore empty input
  const [inputValue, setInputValue] = useState("");
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
          ml-2
          p-2
          outline-none
          ${classes}
          ${theme === 'dark' ? 'bg-[#15202B]' : ''}
      `}
  >
  
  </textarea>
  )
}

export default InputTextArea