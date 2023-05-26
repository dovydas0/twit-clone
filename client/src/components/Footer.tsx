import { Link } from "react-router-dom";

import Button from "./custom_elements/Button"

const Footer = () => {
  return (
    <div className="
            fixed
            bottom-0
            w-screen
            bg-sky-500
            flex
            justify-center
        ">
            <div className="
                h-[72px]
                grid
                sm:grid-cols-3
                justify-items-center
                items-center
                w-[1440px]
            ">
                <div className="w-[220%] hiddenSignFooter col-start-2 md:w-[200%] xl:w-[150%]">
                    <div className="text-2xl font-semibold -mb-1">
                        Don't miss what's happening
                    </div>
                    <div>
                        People on Twitter are the first to know.
                    </div>
                </div>
                <div className="hidden sm:block col-start-3 ml-auto">
                    <div className="mr-14 flex gap-3">
                        <Link to="/login">
                            <Button
                                value="Log in"
                                outline
                                small
                            />
                        </Link>
                        <Link to="/signup">
                            <Button
                                value="Sign up"
                                small
                            />
                        </Link>
                    </div>
                </div>
                <div className="sm:hidden w-full overflow-hidden">
                    <div className="flex w-full gap-3 mx-4">
                        <Link to="/login" className="w-full">
                                <Button
                                    value="Log in"
                                    outline
                                />
                        </Link>
                        <Link to="/signup" className="w-full mr-12">
                                <Button
                                    value="Sign up"
                                />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Footer