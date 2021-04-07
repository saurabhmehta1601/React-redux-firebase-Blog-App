import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useFirebase } from 'react-redux-firebase'
import verifyEmail from "../redux/actions/user/verifyEmail"

const VerifyAccount = (props) => {
    const user = useSelector(state =>state.firebase.auth)
    const firebase = useFirebase()
    const dispatch =useDispatch() 
    
    const handleVerify  =(e)=>{
        e.preventDefault()    
        dispatch(verifyEmail(firebase))
    }

    useEffect(()=>{
        if( (user.isLoaded && user.isEmpty) || (user && user.emailVerified) ){
            props.history.push("/")
        }   
    },[user])

    return (
        <div className="container verify-text">
         <p className="flow-text">
         Hello blogger .<br/>
         Please <a href="" onClick={handleVerify}> click here</a> to verify your email <b>{user.email} </b> with a verification email .
         </p>
        </div>
    )
}

export default VerifyAccount
