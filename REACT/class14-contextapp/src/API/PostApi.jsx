import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react'
import { toast } from 'react-toastify';

const UserAPI = () => {

    const url = 'https://jsonplaceholder.typicode.com';

        const [user,setUser] = useState([]);

        /* useCallback will return a memoized version of the callback that only changes if one of the inputs has changed */

        const getUsers = useCallback(() => {
            const readUsers = async () =>{
                axios.get(`${url}/users`).then((out)=>{
                    console.log(out)
                    setUser(out.data)
                }).catch(error => toast.error(error.message));
            }
            readUsers();
        },[]);

        useEffect(()=>{getUsers()},[]);

  return {
      users : [user,setUser]
    }
}

export default UserAPI
