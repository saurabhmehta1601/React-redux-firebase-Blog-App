import LoggedInLinks from './LoggedInLinks'
import LoggedOutLinks from './LoggedOutLinks'
import {useHistory,Link} from 'react-router-dom'
import {useSelector} from "react-redux"
import M from 'materialize-css'

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    M.Sidenav.init(elems);
  });

const Navbar = (props) => {
  const auth = useSelector(state => state.firebase.auth)
  const history = useHistory()
    return (
        <>
    <nav className="teal">
        <div className="container transparent blue-text ">
    <div className="nav-wrapper">
      <Link to="/" className="brand-logo " >Blogger</Link>

      <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
      <ul className="right hide-on-med-and-down">
        {auth.isLoaded && auth.isEmpty ? <LoggedOutLinks />: <LoggedInLinks /> }
      </ul>
    </div>
    </div>
  </nav>

  <ul className="sidenav" id="mobile-demo">
        {auth.isLoaded && auth.isEmpty ? <LoggedOutLinks />: <LoggedInLinks /> }
  </ul>
  </>
    )
}

export default Navbar
