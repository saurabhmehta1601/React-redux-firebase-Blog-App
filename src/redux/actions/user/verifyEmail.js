
const VERIFICATION_EMAIL_SEND_REQUEST="VERIFICATION_EMAIL_REQUEST"
const VERIFICATION_EMAIL_SEND_FAIL="VERIFICATION_EMAIL_FAIL"
const VERIFICATION_EMAIL_SEND_SUCCESS="VERIFICATION_EMAIL_SUCCESS"


export default function verifyEmail(){
    return (dispatch,getState,{getFirebase}) =>{
        const firebase = getFirebase()
        dispatch({ type:VERIFICATION_EMAIL_SEND_REQUEST   })
        const user =firebase.auth().currentUser
        user.sendEmailVerification()
        .then(()=>{

            const message= "An account verification link has been sent to your email . Please refresh the page after verifying your email account .  "
            dispatch({  
                type:VERIFICATION_EMAIL_SEND_SUCCESS,
                payload: message
                })
        })
        .catch(()=>{
            dispatch({
                type: VERIFICATION_EMAIL_SEND_FAIL,
                payload : "Sorry could'n send verification link. "
            })
        })
      
    }
}

