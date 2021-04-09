export const FETCH_POSTS_REQUEST = "FETCH_POSTS_REQUEST"
export const FETCH_POSTS_FAIL = "FETCH_POSTS_FAIL"
export const FETCH_POSTS_SUCCESS = "FETCH_POSTS_SUCCESS"

const initialState={
    posts:[],
    lastPostCreatedOn:"",
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
            lastPostCreatedOn:action.payload.lastPostCreatedOn,
            loading:false 
        }
        default: return state
    }
}