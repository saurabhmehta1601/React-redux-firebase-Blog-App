import { combineReducers, createStore,applyMiddleware } from "redux";
import postReducer from '../reducers/postReducer'
import userReducer from '../reducers/userReducer'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';


const rootReducer = combineReducers({
    post:postReducer,
    user:userReducer
})

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
    );

export default store



