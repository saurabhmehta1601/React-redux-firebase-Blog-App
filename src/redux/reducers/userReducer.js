
const LOGIN_REQUEST="LOGIN_REQUEST"
const LOGIN_FAIL="LOGIN_FAIL"
const LOGIN_SUCCESS="LOGIN_SUCCESS"

const LOGOUT_REQUEST="LOGOUT_REQUEST"
const LOGOUT_FAIL="LOGOUT_FAIL"
const LOGOUT_SUCCESS="LOGOUT_SUCCESS"

import firebase from "../../firebase/config"

const initialState ={loggedInUser:null}

firebase.auth().onAuthStateChanged(user=>{
    if(user){
        initialState.loggedInUser = user
    }
})


export default function userReducer(state=initialState,action){
    switch(action.type){

        case LOGIN_REQUEST :
            return {...state,loading:true } 
        
        case LOGIN_FAIL :
            return {...state,loading:false, error:action.payload} 
    
        case LOGIN_SUCCESS :
            return { ...state,loading:false,loggedInUser:action.payload } 
        
        case LOGOUT_REQUEST :
            return {...state,loading:true } 
        
        case LOGOUT_FAIL :
            return {...state,loading:false, error:action.payload} 
    
        case LOGOUT_SUCCESS :
            return { ...state,loading:false,loggedInUser:null } 
        
        default: return state
    }
}