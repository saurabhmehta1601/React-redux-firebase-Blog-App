import React from 'react'
import { getFirestore } from 'redux-firestore'
import Post from './Post'

const PostList = () => {
    const firestore = getFirestore()


    
    return (
        <div className="container">
            <div className="row">
                <div className="col m8">
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                </div>
                <div className="col m3 offest-m1 blue z-depth-1 notifications">
                    <h5 className="">Notifications</h5>

                </div>
            </div>
        </div>
    )
}

export default PostList
