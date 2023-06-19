import { Link } from "react-router-dom"
import BlueButton from "./custom_elements/BlueButton"

const Error = () => {
  return (
    <div className="col-span-7 flex h-full flex-col pt-28 items-center gap-10">
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