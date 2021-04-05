import React from 'react'
import loginUser from "../redux/actions/user/loginUser"
 
const SignIn = () => {


    const handleSubmit =(e)=>{
        e.preventDefault()
        loginUser(e.target.email,e.target.password)
    }

    return (<div className="row  auth-form">
        <form className="col s8 offset-s2 " onSubmit={handleSubmit}>

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
