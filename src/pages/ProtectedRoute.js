import { isEmpty, isLoaded } from "react-redux-firebase";
import { Redirect, Route } from "react-router-dom";
import {useSelector} from 'react-redux'
import LoadingSkeleton from "../components/LoadPage/LoadPage"

const ProtectedRoute =(props) =>{
    const auth = useSelector(state => state.firebase.auth);

    if(!isLoaded(auth))
        return <LoadingSkeleton />
    
    if(isLoaded(auth) && isEmpty(auth) )
        return <Redirect to="/sign-in" ></Redirect>
    
    if(isLoaded(auth) && !isEmpty(auth) && !auth.emailVerified)
        return <Redirect to="/verify-account" ></Redirect>


    if(isLoaded(auth) && !isEmpty(auth) )
        return<Route {...props}></Route>

}

export default ProtectedRoute