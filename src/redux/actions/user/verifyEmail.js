
const VERIFICATION_EMAIL_SEND_REQUEST="VERIFICATION_EMAIL_REQUEST"
const VERIFICATION_EMAIL_SEND_FAIL="VERIFICATION_EMAIL_FAIL"
const VERIFICATION_EMAIL_SEND_SUCCESS="VERIFICATION_EMAIL_SUCCESS"


export default function verifyEmail(firebase){
    return dispatch =>{
        dispatch({ type:VERIFICATION_EMAIL_SEND_REQUEST   })
        const user =firebase.auth().currentUser
        user.sendEmailVerification()
        .then(()=>{
            dispatch({  
                type:VERIFICATION_EMAIL_SEND_SUCCESS,
                payload: "An account verification link has been sent to your email."
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

