import React, { useContext } from 'react'
import { DataContext } from '../context/Context'
import CommentCard from './CommentCard';

const Comments = () => {
  const context = useContext(DataContext);
  const[comments] = context.commentApi.comments;
  return (
    <div className="bg-primary">
      <div className="container">
      <div className="row">
        <div className="col">
          <h1 className="text-center text-white">Comments</h1>
        </div>
      </div>
      <div className="row">
        {comments && comments.map((item,index)=>{
          return(
            <CommentCard key={index} {...item}/>
          )
        })}
      </div>
    </div>
    </div>
  )
}

export default Comments
