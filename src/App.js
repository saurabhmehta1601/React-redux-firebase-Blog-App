import * as Routes from "./constants/Routes"
import {  Switch } from "react-router-dom";
import {Route} from 'react-router'
import Navbar from "./components/Navbar/Navbar";
import SignIn from "./pages/SignIn"
import Dashboard from "./pages/Dashboard";
import SignUp from "./pages/SignUp";
import Error404 from "./pages/Error404";
import Profile from "./pages/Profile";


function App() {
  return (
    <>
      <Navbar />
      <Switch>
      <Route exact path={Routes.dashboard}  component={Dashboard} />
      <Route path={Routes.profile} component={Profile} />
      <Route  path={Routes.signin}  component={SignIn} />
      <Route path={Routes.signup}  component={SignUp} />
      <Route  component={Error404} />
      </Switch>

    </>
  );
}

export default App;
