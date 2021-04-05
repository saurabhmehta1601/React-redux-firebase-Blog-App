import React from 'react'
import LoggedInLinks from './LoggedInLinks'
import LoggedOutLinks from './LoggedOutLinks'
import {useHistory} from 'react-router-dom'
import {useSelector} from "react-redux"
import M from 'materialize-css'

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    M.Sidenav.init(elems);
  });

const Navbar = (props) => {
  const user= useSelector(state => state.user )
  const history = useHistory()
    return (
        <>
    <nav className="teal">
        <div className="container transparent blue-text ">
    <div className="nav-wrapper">
      <a href="" className="brand-logo " onClick={()=>history.push("/")}>Blogger</a>

      <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
      <ul className="right hide-on-med-and-down">
        {user.uid ?<LoggedInLinks /> : <LoggedOutLinks /> }
      </ul>
    </div>
    </div>
  </nav>

  <ul className="sidenav" id="mobile-demo">
    {user.loggedInUser ?<LoggedInLinks /> : <LoggedOutLinks /> }
  </ul>
  </>
    )
}

export default Navbar
