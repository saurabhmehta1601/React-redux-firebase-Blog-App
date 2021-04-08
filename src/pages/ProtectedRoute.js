import { isEmpty, isLoaded } from "react-redux-firebase";
import { Redirect, Route } from "react-router-dom";
import {useSelector} from 'react-redux'

const ProtectedRoute =(props) =>{
    const auth = useSelector(state => state.firebase.auth);

    if(isLoaded(auth) && !isEmpty(auth) ){
     return<Route {...props}></Route>
    }
    return <Redirect to="/sign-in" ></Redirect>
}

export default ProtectedRoute