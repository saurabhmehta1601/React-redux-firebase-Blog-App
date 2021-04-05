const LOGOUT_REQUEST="LOGOUT_REQUEST"
const LOGOUT_FAIL="LOGOUT_FAIL"
const LOGOUT_SUCCESS="LOGOUT_SUCCESS"

const LOGIN_REQUEST="LOGIN_REQUEST"
const LOGIN_FAIL="LOGIN_FAIL"
const LOGIN_SUCCESS="LOGIN_SUCCESS"

const SIGNUP_REQUEST="SIGNUP_REQUEST"
const SIGNUP_FAIL="SIGNUP_FAIL"
const SIGNUP_SUCCESS="SIGNUP_SUCCESS"

const initialState={
    user:null,
    loading:null
}


export default function userReducer(state=initialState,action){
    switch(action.type){

        case LOGIN_REQUEST :
            return {loading:true,user:null} 
        
        case LOGIN_FAIL :
        return {loading:false,user:null} 
    
        case LOGIN_SUCCESS :
        return { loading:false,user:action.payload } 
        
        default: return state
    }
}