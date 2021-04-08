import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Post from './Post'
import fetchPosts from "../../../redux/actions/posts/fetchPosts"
import { useSelector } from 'react-redux'

const PostList = () => {

    const dispatch = useDispatch() 
    
    const loadPostsOnClick = () => {
        dispatch(fetchPosts())
    }

    const posts = useSelector(state => state.post.posts)

    useEffect(()=>{
        dispatch(fetchPosts())
    },[])

    return (
            <div className="container section">
                {
                // eslint-disable-next-line react/jsx-key
                posts.map( (post,index) => <Post key={index} title={post.title} content={post.content} createdOn={post.createdOn} /> )
                }
                    <button className="btn" onClick={loadPostsOnClick}>load more</button>
            </div>
    )
}

export default PostList
