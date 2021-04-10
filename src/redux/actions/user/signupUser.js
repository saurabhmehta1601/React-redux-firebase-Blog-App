const SIGNUP_REQUEST = "SIGNUP_REQUEST";
const SIGNUP_FAIL = "SIGNUP_FAIL";
const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";

const signupUser = (user) => {
  return (dispatch,getState, {getFirebase}) => {
    const firebase = getFirebase();
    dispatch({
      type: SIGNUP_REQUEST,
    });
    firebase
      .auth()
      .createUserWithEmailAndPassword(user.email, user.password)
      .then((userCredentials) => {
        const authUser = userCredentials.user;
        dispatch({
          type: SIGNUP_SUCCESS,
          payload: authUser,
        });
      })
      .catch((err) => {
        dispatch({
          type: SIGNUP_FAIL,
          payload: err.message,
        });
      });
  };
};

export default signupUser;
