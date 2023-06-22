import { FcGoogle } from "react-icons/fc";
import { BsApple } from 'react-icons/bs';
import Button from "./custom_elements/Button";
import { Link } from "react-router-dom";
import { useAppSelector } from "../store/store";
import BlueButton from "./custom_elements/BlueButton";

function RightBar() {
  const loggedUser = useAppSelector(state => state.user);

  

  return (
    <div className="
      bg-[#15202B]
      lg:col-span-3
      xl:col-span-3
      lg:block
      sm:hidden
    ">
      {
        Object.keys(loggedUser).length > 0 ? (
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
                Get Verified
              </div>
              <div className="text-[13px] text-gray-400 mb-2">
                Subscribe to unlock new features
              </div>
              <div>
                <BlueButton
                  value="Get Verified"
                />
              </div>
            </div>
          </div>
        ) : (
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
              <Link to='/signup'>
                <Button
                  big
                  value="Create account"
                />
              </Link>
              <div className="text-[13px] text-gray-400">
                By signing up, you agree to the Terms of Service 
                and Privacy Policy, including Cookie Use.
              </div>

            </div>
          </div>
        )
      }
      
      <div className="mt-4 mx-3 text-xs text-gray-400 flex flex-col items-center whitespace-break-spaces">
          <div>
          Terms of Service   Privacy Policy   Cookie Policy
          </div> 
          <div>
          Accessibility   Ads info    more...   © 2023 X Corp.
          </div>
      </div>
    </div>
  );
}

export default RightBar;
