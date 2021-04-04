import React from 'react'

const SignIn = () => {
    return (<div className="row  auth-form">
        <form className="col s8 offset-s2 ">

            <div className="input-field col s12">
            <input id="last_name" type="text" className="validate" />
            <label htmlFor="last_name">Email</label>
            </div>

            <div className="input-field col s12">
            <input id="last_name" type="text" className="validate" />
            <label htmlFor="last_name">Password</label>
            </div>
            <button type="submit" className="btn col s4 offset-s4 ">Login</button>
        </form>
        </div>
    )
}

export default SignIn
