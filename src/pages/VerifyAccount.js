import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useFirebase } from 'react-redux-firebase'
import verifyEmail from "../redux/actions/user/verifyEmail"

const VerifyAccount = () => {
    const user = useSelector(state =>state.firebase.auth)
    const firebase = useFirebase()

    const dispatch =useDispatch() 
    
    const handleVerify  =(e)=>{
        e.preventDefault()    
        dispatch(verifyEmail(firebase))

        // user.sendEmailVerification().then(function() {
        // console.log("verification link sent");
        // }).catch(function(error) {
        // console.log("verification link couldn't be sent ");
        // });
    }



    return (
        <div className="container verify-text">
         <p className="flow-text">
         Hello blogger .<br/>
         Please <a href="" onClick={handleVerify}> click here</a> to verify your email <b>{user.email} </b> with a verification link .
         </p>
        </div>
    )
}

export default VerifyAccount
