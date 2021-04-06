import { isEmpty, isLoaded } from "react-redux-firebase";
import { Redirect } from "react-router";
import {useSelector} from 'react-redux'

const ProtectedRoute =({children}) =>{
    const auth = useSelector(state => state.firebase.auth);
    if(isLoaded(auth) && !isEmpty(auth) ){
     return<>   {children} </>
    }
    return <Redirect to="/sign-in" ></Redirect>
}

export default ProtectedRoute