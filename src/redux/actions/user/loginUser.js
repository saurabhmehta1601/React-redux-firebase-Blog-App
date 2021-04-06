const LOGIN_REQUEST="LOGIN_REQUEST"
const LOGIN_FAIL="LOGIN_FAIL"
const LOGIN_SUCCESS="LOGIN_SUCCESS"


import firebase from "../../../firebase/config"

export default function loginUser(email, password){
  return dispatch =>{

    dispatch({
        type: LOGIN_REQUEST,
    })

  firebase.auth().signInWithEmailAndPassword(email, password)
  .then(() => {
    dispatch({
      type:LOGIN_SUCCESS,
      payload:"logged in successfully"
    })
  }).catch(() =>{
      dispatch({
        type:LOGIN_FAIL,
          payload: "Invalid credentials"
      })
  })
    }
}