import React from 'react'

const CommentCard = (props) => {
    const {postId,name,email,body,id} = props;
  return (
    <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
        <div className="card text-center my-3">
            <div className="card-header">
                <h4>{name}</h4>
            </div>
            <div className="card-body">
                <h5 className="card-title">{email}</h5>
                <p className="card-text">{body}</p>
                <a href="#" class="btn btn-primary">{id}</a>
            </div>
            <div className="card-footer text-body-secondary">
                {postId}
            </div>
        </div>
    </div>
  )
}

export default CommentCard
