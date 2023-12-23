import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react'
import { toast } from 'react-toastify';

const PostAPI = () => {

    const url = 'https://jsonplaceholder.typicode.com';

        const [post,setPost] = useState([]);

        /* useCallback will return a memoized version of the callback that only changes if one of the inputs has changed */

        const getPosts = useCallback(() => {
            const readPosts = async () =>{
                axios.get(`${url}/posts`).then((out)=>{
                    // console.log(out)
                    setPost(out.data)
                }).catch(error => toast.error(error.message));
            }
            readPosts();
        },[]);

        useEffect(()=>{getPosts()},[]);

  return {
      posts : [post,setPost]
    }
}

export default PostAPI;
