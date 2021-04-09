import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import signupUser from "../redux/actions/user/signupUser";
import {Redirect} from 'react-router-dom'

const SignUp = () => {
  const dispatch = useDispatch();
  const error = useSelector((state) => state.user.signupError);
  const auth = useSelector(state =>state.firebase.auth)
  
  
  const handleSubmit = (e) => {
      e.preventDefault();
      const user = {
      username: e.target.username.value,
      email: e.target.email.value,
      password: e.target.password.value,
    };
    dispatch(signupUser(user));
    
};

useEffect(() => {
    document.title = "Sign up | Blogger";
}, []);

if(auth.uid) return <Redirect to="/" />
  return (
    <div className="row  auth-form">
      <form
        className="col s8 offset-s2 "
        onSubmit={handleSubmit}
        autoComplete="on"
      >
        <p className="red-text">{error}</p>
        <div className="input-field col s12">
          <input
            id="username"
            type="text"
            className="validate"
            name="username"
          />
          <label htmlFor="username">Username</label>
        </div>

        <div className="input-field col s12">
          <input id="email" type="email" className="validate" name="email" />
          <label htmlFor="email">Email</label>
        </div>

        <div className="input-field col s12">
          <input
            id="password"
            type="password"
            className="validate"
            name="password"
            autoComplete="off"
          />
          <label htmlFor="password">Password</label>
        </div>
        <button type="submit" className="btn col s4 offset-s4 ">
          Sign up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
