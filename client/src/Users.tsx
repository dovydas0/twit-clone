import axios from 'axios'
import React, { useEffect } from 'react'


const Users = () => {
    useEffect(() => {
        const getUsers = async () => {
            const users = await axios.get(import.meta.env.VITE_API_SERVER_URL + '/users')
        
            console.log(users);
        }

        getUsers();
    })
  return (
    <div>users</div>
  )
}

export default Users