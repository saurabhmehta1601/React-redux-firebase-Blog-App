import firebase from "../../../firebase/config"

export default function loginUser(email, password){
    return dispatch =>{

  firebase.auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    console.log(user);

    // ...
  }).catch((error) =>{

      console.log(error);
      const err = {
        
      }
      dispatch({
          payload: err
      })
  })
    }
}