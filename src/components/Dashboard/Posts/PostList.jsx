import React from 'react'
import Post from './Post'

const PostList = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col m8">
                    <Post />
                </div>
                <div className="col m3 offest-m1 z-depth-1 notifications">
                    <h5>Notifications</h5>
                </div>
            </div>
        </div>
    )
}

export default PostList
