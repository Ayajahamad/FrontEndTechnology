import React from 'react'

const PostCard = (props) => {
    const {id,userId,title,body} = props;
  return (
    <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
        <div class="card my-3">
            <div class="card-header text-center">
                <h4>{id}</h4>
            </div>
            <div class="card-body">
                <blockquote class="blockquote mb-0">
                <p>{body}</p>
                <hr />
                <footer class="blockquote-footer"><cite title="Source Title">{title}</cite></footer>
                </blockquote>
            </div>
        </div>
    </div>
  )
}

export default PostCard
