import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import signupUser from "../redux/actions/user/signupUser"

const SignUp = () => {

    const dispatch = useDispatch() 
    const error = useSelector(state => state.user.signupError)
    const history  =useHistory()
    const handleSubmit = (e) =>{
    e.preventDefault();
    const user = {
        username:e.target.username.value,
        email:e.target.email.value,
        password:e.target.password.value,
    }

    dispatch(signupUser(user,history))
}

    return (<div className="row  auth-form">
        <form className="col s8 offset-s2 " onSubmit={handleSubmit} autoComplete="on">
        <p className="red-text">{error}</p>
            <div className="input-field col s12">
            <input id="username" type="text" className="validate" name="username" />
            <label htmlFor="username">Username</label>
            </div>

            <div className="input-field col s12">
            <input id="email" type="email" className="validate" name="email"/>
            <label htmlFor="email">Email</label>
            </div>

            <div className="input-field col s12">
            <input id="password" type="password" className="validate" name="password" autoComplete="off"/>
            <label htmlFor="password">Password</label>
            </div>
            <button type="submit" className="btn col s4 offset-s4 ">Sign up</button>
        </form>
        </div>
    )
}

export default SignUp
