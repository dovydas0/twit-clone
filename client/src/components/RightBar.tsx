import { BsTwitter } from "react-icons/all";
import Button from "./custom_elements/Button";


function RightBar() {
  return (
    <div className="h-full">
      <div className=" w-1/4 h-2/4 sm:hidden flex justify-center items-center ">
        <div className="bg-black w-10 h-10 rounded-full mt-5"></div>
      </div>
      <div className="text-[24px] sm:hidden flex justify-center text-[#1D9BF0] mb-4 relative bottom-8">
        {/* <Button
          value="Log in with "
          icon={BsTwitter}
        /> */}
      </div>
    </div>
  );
}

export default RightBar;
