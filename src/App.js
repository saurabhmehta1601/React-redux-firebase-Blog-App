import React from 'react'
import * as Routes from "./constants/Routes"
import {Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import SignIn from "./pages/SignIn"
import Dashboard from "./pages/Dashboard";
import SignUp from "./pages/SignUp";
import Error404 from "./pages/Error404";
import Profile from "./pages/Profile";
import ProtectedRoute from "./pages/ProtectedRoute";
import VerifyAccount from './pages/VerifyAccount';
import CreatePost from "./pages/CreatePost"

function App() {

  return (
    <>
      <Navbar />
      <Switch>
      <ProtectedRoute exact path={Routes.createPost}  component={CreatePost} />
      <Route  path={Routes.signin}  component={SignIn} />
      <Route path={Routes.signup}  component={SignUp} />
      <Route path={Routes.verifyAccount} component={VerifyAccount} />
      <ProtectedRoute path={Routes.profile} component={Profile} />
      <ProtectedRoute exact path={Routes.dashboard}  component={Dashboard} />
      <Route  component={Error404} />
      </Switch>

    </>
  );
}

export default App;


