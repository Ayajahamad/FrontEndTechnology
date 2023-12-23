import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react'
import { toast } from 'react-toastify';

const CommentApi = () => {

    const url = 'https://jsonplaceholder.typicode.com';

        const [comment,setComment] = useState([]);

        /* useCallback will return a memoized version of the callback that only changes if one of the inputs has changed */

        const getComments = useCallback(() => {
            const readComments = async () =>{
                axios.get(`${url}/comments`).then((out)=>{
                    console.log(out)
                    setComment(out.data)
                }).catch(error => toast.error(error.message));
            }
            readComments();
        },[]);

        useEffect(()=>{getComments()},[]);

  return {
      comments : [comment,setComment]
    }
}

export default CommentApi
