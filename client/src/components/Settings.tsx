import { useAppSelector } from '../store/store'

const Settings = () => {
    const loggedUser = useAppSelector(state => state.user);
    let content;

    if (Object.keys(loggedUser).length > 0) {
        content = (
            <div className=''>
                Settings
            </div>
        )
    }

    else {
        content = (
            <div className=''>
                Settings
            </div>
        )
    }

  return (
    <>
        {content}
    </>
  )
}

export default Settings