
const LOGIN_REQUEST="LOGIN_REQUEST"
const LOGIN_FAIL="LOGIN_FAIL"
const LOGIN_SUCCESS="LOGIN_SUCCESS"

export default function userReducer(state={},action){
    switch(action.type){

        case LOGIN_REQUEST :
            return {...state,loading:true } 
        
        case LOGIN_FAIL :
            return {...state,loading:false, error:action.payload} 
    
        case LOGIN_SUCCESS :
            return { ...state,loading:false,loggedInUser:action.payload } 

        default: return state
    }
}