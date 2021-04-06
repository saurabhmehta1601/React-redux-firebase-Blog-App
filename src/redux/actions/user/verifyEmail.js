
const VERIFICATION_EMAIL_SEND_REQUEST="VERIFICATION_EMAIL_REQUEST"
const VERIFICATION_EMAIL_SEND_FAIL="VERIFICATION_EMAIL_FAIL"
const VERIFICATION_EMAIL_SEND_SUCCESS="VERIFICATION_EMAIL_SUCCESS"


export default function verifyEmail(firebase){
    return dispatch =>{
        dispatch({ type:VERIFICATION_EMAIL_SEND_REQUEST   })
        const user =firebase.auth().currentUser
        user.sendEmailVerification()
        .then(()=>{
            console.log("verification link sent");
            dispatch({  
                type:VERIFICATION_EMAIL_SEND_SUCCESS,
                payload: "verification link sent"
                })
        })
        .catch(()=>{
            console.log("verification link couldn't be sent ");
            dispatch({
                type: VERIFICATION_EMAIL_SEND_FAIL,
                payload : "verification link couldn't be sent "
            })
        })
      
    }
}

