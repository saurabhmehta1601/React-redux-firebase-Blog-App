export const CREATE_POSTS_REQUEST = "CREATE_POSTS_REQUEST"
export const CREATE_POSTS_FAIL = "CREATE_POSTS_FAIL"
export const CREATE_POSTS_SUCCESS = "CREATE_POSTS_SUCCESS"

export default function createPost(post){
    return (dispatch,getState,{getFirestore}) =>{

        dispatch({type:CREATE_POSTS_REQUEST})

        const db = getFirestore()
        db.collection("blogs").add(post)
        .then(() =>{
            dispatch({
                type:CREATE_POSTS_SUCCESS,
                payload:post
            })

        })
        .catch(err =>{
            dispatch({
                type:CREATE_POSTS_FAIL,
                payload:err.message
            })

        })        
    }
}