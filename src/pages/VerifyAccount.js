import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useFirebase } from 'react-redux-firebase'
import { Redirect } from 'react-router-dom'
import verifyEmail from "../redux/actions/user/verifyEmail"


const VerifyAccount = () => {
    const user = useSelector(state =>state.firebase.auth)
    const firebase = useFirebase()
    const dispatch =useDispatch() 
    
    const showVerifyEmailMessage = useSelector(state => state.user.showVerifyEmailMessage)
    const showVerifyEmailError = useSelector(state => state.user.showVerifyEmailError)

    const handleVerify  =(e)=>{
        e.preventDefault()    
        dispatch(verifyEmail(firebase))
    }

    if( (user.isLoaded && user.isEmpty) || ( user && user.emailVerified) ){
        return <Redirect to="/"/>

    }   
    
    return (
        <div className="container verify-text">
         <p className="flow-text">
         Hello {user.username ? user.username : "blogger"} .<br/>
         Please <a href="" onClick={handleVerify}> click here</a> to verify your email <b>{user.email} </b> with a verification email .
         </p>

        <div className="section">
         {showVerifyEmailMessage && 
         <p className=""> An email has been sent to your account .Please check your inbox and reload the page after account verification.</p>
         } 
         {showVerifyEmailError &&
         <p className="">Sorry the verification email couldn&#39;t be sent to your account .Please try again later .</p>
         } 
        </div>
        </div>
    )
}

export default VerifyAccount
