import axios from 'axios'
import { useEffect, useState } from 'react'


const Users = () => {
  const [ users, setUsers ] = useState([])

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
      ))}
    </div>
  )
}

export default Users