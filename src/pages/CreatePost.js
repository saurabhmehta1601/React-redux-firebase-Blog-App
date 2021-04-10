import React from 'react'
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import  createPost  from '../redux/actions/posts/createPost';

const CreatePost = () => {

    const dispatch = useDispatch()
    const history = useHistory() 
    const handleSubmit = (e) => {
        e.preventDefault();
        const postedOn =new Date().toLocaleString();
        const post ={
            title: e.target.title.value,
            content: e.target.content.value,
            postedOn
        }
        dispatch(createPost(post))
        history.push("/")
    }

    return (
        <form  onSubmit={handleSubmit} className="container create-post-form" >
            
            <div >
                <label htmlFor="title" name="title" >title</label>
                <input id="title"  type="text"/>
            </div>
            <div >
                <label htmlFor="content">content</label>
                <textarea id="content" className="materialize-textarea" type="text"/>
            </div>

            <button type="submit" className="btn" style={{margin:'15vh 20% 25vh 20%'}}>Post</button>
        </form>
    )
}

export default CreatePost
