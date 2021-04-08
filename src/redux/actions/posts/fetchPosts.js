export const FETCH_POSTS_REQUEST = "FETCH_POSTS_REQUEST"
export const FETCH_POSTS_FAIL = "FETCH_POSTS_FAIL"
export const FETCH_POSTS_SUCCESS = "FETCH_POSTS_SUCCESS"

const fetchPosts = () => {
   // eslint-disable-next-line no-unused-vars
   return (dispatch,getState,{getFirestore}) =>{
      dispatch({
            type: FETCH_POSTS_REQUEST
      })
      const db=getFirestore();
      db.collection("blogs").orderBy("createdOn").limit(2).get()
      .then(docs =>{
         let posts = [] 
         docs.forEach(doc =>posts.push(doc.data()) )
         dispatch({
           type:FETCH_POSTS_SUCCESS,
           payload: posts
          })
      })
      .catch(err=>{
         dispatch({
            type:FETCH_POSTS_FAIL,
            payload: err.message
         })
      })
   }
}

export default fetchPosts
