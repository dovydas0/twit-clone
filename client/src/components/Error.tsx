import { Link } from "react-router-dom"
import BlueButton from "./custom_elements/BlueButton"

const Error = () => {
  return (
    <div className="
      col-span-9
      xl:ml-[223px]
      sm:ml-[76px]
      border-l
      border-neutral-500/50
      text-center
      h-full
      px-6
      flex
      flex-col
      items-center
      pt-28
      gap-10
    ">
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