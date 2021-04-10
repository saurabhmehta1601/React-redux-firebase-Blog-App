import React from 'react'
import logoutUser from "../../redux/actions/user/logoutUser"
import {useHistory} from 'react-router-dom'
import {useDispatch} from 'react-redux'

const LoggedInLinks = () => {
    
    const history = useHistory()
    const dispatch = useDispatch()
    
    const handleLogout = () => {
        dispatch(logoutUser())
        history.push("/sign-in")
    }

    return (
        <>
        <li><a href="#" onClick={handleLogout}>Logout</a></li>
        </>
    )
}

export default LoggedInLinks
