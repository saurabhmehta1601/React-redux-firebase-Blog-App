const SIGNUP_REQUEST = "SIGNUP_REQUEST";
const SIGNUP_FAIL = "SIGNUP_FAIL";
const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";

const signupUser = (user, history) => {
  return (dispatch, getState, getFirebase) => {
    const firebase = getFirebase();
    dispatch({
      type: SIGNUP_REQUEST,
    });
    firebase
      .auth()
      .createUserWithEmailAndPassword(user.email, user.password)
      .then((userCredentials) => {
        user = userCredentials.user;
        dispatch({
          type: SIGNUP_SUCCESS,
          payload: user,
        });

        history.push("/verify-account");
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
