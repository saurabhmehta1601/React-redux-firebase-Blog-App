export const FETCH_POSTS_REQUEST = "FETCH_POSTS_REQUEST"
export const FETCH_POSTS_FAIL = "FETCH_POSTS_FAIL"
export const FETCH_POSTS_SUCCESS = "FETCH_POSTS_SUCCESS"
export const END_FETCHING_POST="END_FETCHING_POST" 

export const CREATE_POSTS_REQUEST = "CREATE_POSTS_REQUEST"
export const CREATE_POSTS_FAIL = "CREATE_POSTS_FAIL"
export const CREATE_POSTS_SUCCESS = "CREATE_POSTS_SUCCESS"




const initialState={
    posts:[],
    lastPostPostedOn:"",
    endFetchingPosts:false
}

export default function userReducer(state = initialState,action){
    switch(action.type){

        case FETCH_POSTS_REQUEST :
            return {
                ...state,loading:true 
            }
        case FETCH_POSTS_FAIL:
            return {
                ...state,
                loading:false
            }
        
        case FETCH_POSTS_SUCCESS : 
        return {
            ...state,
            posts : [...state.posts,...action.payload.posts],
            lastPostPostedOn:action.payload.lastPostPostedOn,
            loading:false 
        }

        case END_FETCHING_POST :
            return{
                ...state,endFetchingPosts:true 
            }
        
        case CREATE_POSTS_REQUEST :
            return {
                ...state,loading:true 
            }
        case CREATE_POSTS_FAIL:
            return {
                ...state,
                loading:false
            }
        
        case CREATE_POSTS_SUCCESS : 
        return {
            ...state,
            posts : [action.payload,...state.posts],
            loading:false 
        }
        
        
            default: return state
    }
}