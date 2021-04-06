const LOGIN_REQUEST="LOGIN_REQUEST"
const LOGIN_FAIL="LOGIN_FAIL"
const LOGIN_SUCCESS="LOGIN_SUCCESS"

const SIGNUP_REQUEST="SIGNUP_REQUEST"
const SIGNUP_FAIL="SIGNUP_FAIL"
const SIGNUP_SUCCESS="SIGNUP_SUCCESS"

const LOGOUT_REQUEST="LOGOUT_REQUEST"
const LOGOUT_FAIL="LOGOUT_FAIL"
const LOGOUT_SUCCESS="LOGOUT_SUCCESS"


export default function userReducer(state={},action){
    switch(action.type){

        case LOGIN_REQUEST :
            return {...state,loading:true } 
        
        case LOGIN_FAIL :
            return {...state,loading:false, loginError:action.payload} 
    
        case LOGIN_SUCCESS :
            return { ...state,loading:false,loginError:null,loginSuccess:action.payload } 
        
        case LOGOUT_REQUEST :
            return {...state,loading:true } 
        
        case LOGOUT_FAIL :
            return {...state,loading:false, logoutError:action.payload} 
    
        case LOGOUT_SUCCESS :
            return { ...state,loading:false } 

        case SIGNUP_REQUEST :
            return {...state,loading:true } 
        
        case SIGNUP_FAIL :
            return {...state,loading:false, signupError:action.payload} 
    
        case SIGNUP_SUCCESS :
            return { ...state,loading:false } 
        
        default: return state
    }
}