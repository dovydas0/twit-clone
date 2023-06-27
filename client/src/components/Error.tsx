import { Link } from "react-router-dom"
import BlueButton from "./custom_elements/BlueButton"

const Error = () => {
  return (
    <div className="col-span-9 xl:ml-[234px] ml-[112px] text-center h-full flex flex-col items-center pt-28 gap-10">
      <div className="text-xl text-slate-400/80 ">
        Hmm...this page doesn't exist. Try searching for something else.
      </div>
      <Link to='/'>
        <BlueButton
          value='Search'
        />
      </Link>
    </div>
  )
}

export default Error