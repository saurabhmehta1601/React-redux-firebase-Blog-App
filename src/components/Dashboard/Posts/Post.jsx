import React from 'react'

const Post = ({title,content,createdOn}) => {
    return (
        <div className="container">
            Post
            <h4>{title}</h4>
            <p>{createdOn.toDate().toLocaleString()}</p>
            <p>{content}</p>
        </div>
    )
}

export default Post
