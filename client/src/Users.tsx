import axios from 'axios'
import { useEffect, useState } from 'react'
import { useAppSelector } from './store/store'

const Users = () => {
  const [ users, setUsers ] = useState([])
  const selector = useAppSelector(state => state.state);

  if (Object.keys(selector).length > 0) {
    console.log(selector);
  }

  useEffect(() => {
      const getUsers = async () => {
          const users = await axios.get(import.meta.env.VITE_API_SERVER_URL + '/users', { withCredentials: true })
          setUsers(users.data);
      }

      getUsers();
      
  }, [])


  return (
    <div>
      {users.map((user, index) => (
        <div key={index}>{user.username}</div>
      ))}</div>
  )
}

export default Users