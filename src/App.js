/* eslint-disable no-unreachable */
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
import LoadingPage from "./components/LoadPage/LoadPage"
import { useSelector } from 'react-redux';

function App() {

  // const user = useSelector(state => state.firebase.auth)
  // if(user.isLoaded===false) return <LoadingPage />

  return (
    <>
      <Navbar />
      <Switch>
      <Route path={Routes.profile} component={Profile} />
      <Route  path={Routes.signin}  component={SignIn} />
      <Route path={Routes.signup}  component={SignUp} />
      <Route path="/verify-account" component={VerifyAccount} />
      <ProtectedRoute path={Routes.dashboard}  component={Dashboard} />
      <Route  component={Error404} />
      </Switch>

    </>
  );
}

export default App;
