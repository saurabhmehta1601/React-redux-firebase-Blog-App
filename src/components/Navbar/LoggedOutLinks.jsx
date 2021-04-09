import {Link} from 'react-router-dom'
const LoggedOutLinks = () => {
    return (
        <>
        <li><Link to="/sign-in">Sign in</Link></li>
        <li><Link to="/sign-up">Sign up </Link></li>
        </>
    )
}

export default LoggedOutLinks
