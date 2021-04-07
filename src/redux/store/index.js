import { combineReducers, createStore,applyMiddleware } from "redux";
import postReducer from '../reducers/postReducer'
import userReducer from '../reducers/userReducer'
import {firebaseReducer, getFirebase} from "react-redux-firebase"
import {firestoreReducer, reduxFirestore} from "redux-firestore"
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';
import {firebaseConfig} from '../../firebase/config'



const rootReducer = combineReducers({
    post:postReducer,
    user:userReducer,
    firebase:firebaseReducer,
    firestore:firestoreReducer
})

const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(getFirebase)),
        reduxFirestore(firebaseConfig)
        )
    );

export default store



