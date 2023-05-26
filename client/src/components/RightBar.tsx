import { FcGoogle } from "react-icons/fc";
import { BsApple } from 'react-icons/bs';
import Button from "./custom_elements/Button";

function RightBar() {

  return (
    <div className="sm:hidden lg:block">
      <div className="
        w-[90%]
        mx-auto
        mt-4
        border-white/20
        border
        rounded-xl
      ">
        <div className="flex flex-col gap-3 m-4">
          <div className="font-black text-lg">
            New to Twitter?
          </div>
          <div className="text-[13px] text-gray-400 mb-2">
            Sign up now to get your own personalized timeline!
          </div>
          <Button 
            value="Sign up with Google"
            icon={FcGoogle}
          />
          <Button
            value="Sign up with Google"
            icon={BsApple}
          />
          <Button 
            value="Create account"
          />
          <div className="text-[13px] text-gray-400">
            By signing up, you agree to the Terms of Service 
            and Privacy Policy, including Cookie Use.
          </div>

        </div>
      </div>
      <div className="mt-4 text-[13px] text-gray-400 flex flex-col items-center whitespace-break-spaces">
          <div>
          Terms of Service    Privacy Policy    Cookie Policy
          </div> 
          <div>
          Accessibility    Ads info    more...    © 2023 X Corp.
          </div>
      </div>
    </div>
  );
}

export default RightBar;
