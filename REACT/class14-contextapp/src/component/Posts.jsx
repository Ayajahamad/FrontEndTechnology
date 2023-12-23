import React, { useContext } from 'react'
import { DataContext } from '../context/Context'
import PostCard from './PostCard';

const Posts = () => {
  const context = useContext(DataContext);
  const[posts] = context.postApi.posts;

  return (
    <div className="bg-primary">
      <div className="container">
      <div className="row">
        <div className="col">
          <h1 className="text-center text-white">Posts</h1>
        </div>
      </div>
      <div className="row">
        {posts && posts.map((item,index)=>{
          return(
            <PostCard key={index} {...item}/>
          )
        })}
      </div>
    </div>
    </div>
  )
}

export default Posts
