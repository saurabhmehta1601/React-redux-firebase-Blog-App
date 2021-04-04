import React from 'react'
import LoggedInLinks from './LoggedInLinks'
import LoggedOutLinks from './LoggedOutLinks'

import M from 'materialize-css'

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    M.Sidenav.init(elems);
  });

const Navbar = () => {

    return (
        <>
    <nav className="teal">
        <div className="container transparent blue-text ">
    <div className="nav-wrapper">
      <a href="#!" className="brand-logo ">Blogger</a>

      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
      <ul className="right hide-on-med-and-down">
        <LoggedInLinks />
        <LoggedOutLinks />
      </ul>
    </div>
    </div>
  </nav>

  <ul className="sidenav" id="mobile-demo">
        <LoggedInLinks />
        <LoggedOutLinks />
  </ul>
  </>
    )
}

export default Navbar
