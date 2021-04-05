const LOGOUT_REQUEST="LOGOUT_REQUEST"
const LOGOUT_FAIL="LOGOUT_FAIL"
const LOGOUT_SUCCESS="LOGOUT_SUCCESS"

import firebase from "../../../firebase/config" 
const logoutUser = () => {
    return dispatch =>{
        dispatch({
            type:LOGOUT_REQUEST,
        })

        firebase.auth().signOut().then(()=>{
            const response={
                message:"logged out successfully"
            }
            dispatch({
                type:LOGOUT_SUCCESS,
                payload: response
            })
        }).catch(err =>{
            dispatch({
                type:LOGOUT_FAIL,
                payload : err.message
            })
        })
    }    
}

export default logoutUser
