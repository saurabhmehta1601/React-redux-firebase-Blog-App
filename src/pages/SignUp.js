import React from 'react'
import { useDispatch } from 'react-redux';
import { useFirebase } from "react-redux-firebase";
import {useHistory} from "react-router-dom"
import signupUser from "../redux/actions/user/signupUser"

const SignUp = () => {

    const history = useHistory()
    const dispatch = useDispatch() 
    const firebase = useFirebase();
  
    const handleSubmit = (e) =>{
    e.preventDefault();
    
    const user = {
        username:e.target.username.value,
        email:e.target.email.value,
        password:e.target.password.value,
    }
    signupUser(user,firebase,history,dispatch)
}

    return (<div className="row  auth-form">
        <form className="col s8 offset-s2 " onSubmit={handleSubmit}>

            <div className="input-field col s12">
            <input id="username" type="text" className="validate" name="username" />
            <label htmlFor="username">Username</label>
            </div>

            <div className="input-field col s12">
            <input id="email" type="email" className="validate" name="email"/>
            <label htmlFor="email">Email</label>
            </div>

            <div className="input-field col s12">
            <input id="password" type="password" className="validate" name="password" />
            <label htmlFor="password">Password</label>
            </div>
            <button type="submit" className="btn col s4 offset-s4 ">Sign up</button>
        </form>
        </div>
    )
}

export default SignUp
