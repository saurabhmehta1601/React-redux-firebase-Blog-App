import React from 'react'

const Post = ({title,content,postedOn}) => {
    return (
        <div className="post z-depth-2 ">
            <h5 className="post-title">{title}</h5>
            <blockquote className="posted-date small">posted on {postedOn}</blockquote>
            <p className="post-content">{content}</p>
        </div>
    )
}

export default Post


