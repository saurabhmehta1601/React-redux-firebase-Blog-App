import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Post from './Post'
import fetchPosts from "../../../redux/actions/posts/fetchPosts"
import { useSelector } from 'react-redux'

const PostList = () => {

    const posts = useSelector(state => state.post.posts)
    const endFetchingPosts = useSelector(state => state.post.endFetchingPosts)
    const dispatch = useDispatch() 
    
    const loadPostsOnClick = () => {
        dispatch(fetchPosts())
    }

    useEffect(()=>{
        dispatch(fetchPosts())
    },[])

    return (
            <div className="container section">
                {
                // eslint-disable-next-line react/jsx-key
                posts.map( (post,index) => <Post key={index} title={post.title} content={post.content} createdOn={post.createdOn} /> )
                }
                {   !endFetchingPosts && <button className="btn load-btn" onClick={loadPostsOnClick}>load more</button>}
                { 
                endFetchingPosts &&
                <p className="center-align ">
                    <b>No more posts available .</b>
                </p>
                }
            </div>
    )
}

export default PostList
