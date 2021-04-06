 const LOAD_USER = "LOAD_USER"

const LOGIN_REQUEST="LOGIN_REQUEST"
const LOGIN_FAIL="LOGIN_FAIL"
const LOGIN_SUCCESS="LOGIN_SUCCESS"

const LOGOUT_REQUEST="LOGOUT_REQUEST"
const LOGOUT_FAIL="LOGOUT_FAIL"
const LOGOUT_SUCCESS="LOGOUT_SUCCESS"

export default function userReducer(state={},action){
    switch(action.type){

        case LOAD_USER:
            return {...state}
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
        
        default: return state
    }
}