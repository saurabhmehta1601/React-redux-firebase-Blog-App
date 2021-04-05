import React, { useEffect } from 'react'
import loginUser from "../redux/actions/user/loginUser"
import { useDispatch } from 'react-redux' 
import firebase from '../firebase/config'
import {useSelector} from 'react-redux'

firebase.auth().onAuthStateChanged


const SignIn = (props) => {

    const user = useSelector(state => state.user)
    useEffect(()=>{
        firebase.auth().onAuthStateChanged(user =>{
            if(user){
                props.history.push("/") 
            }
        })
    })
    
    const dispatch = useDispatch( ) 
    const handleSubmit =(e)=>{
        e.preventDefault()
        const email = e.target.email.value
        const password= e.target.password.value
        dispatch(loginUser(email,password))
        e.target.reset()
    }

    return (<div className="row  auth-form">

        <form className="col s8 offset-s2 " onSubmit={handleSubmit}>
            {user.loginError && <p className="red-text"> {user.loginError} </p>}
            <div className="input-field col s12">
            <input id="email" type="email" name="email" className="validate" />
            <label htmlFor="email">Email</label>
            </div>

            <div className="input-field col s12">
            <input id="password" type="password" name="password" className="validate" />
            <label htmlFor="password">Password</label>
            </div>
            <button type="submit" className="btn col s4 offset-s4 ">Login</button>
        </form>
        </div>
    )
}

export default SignIn
