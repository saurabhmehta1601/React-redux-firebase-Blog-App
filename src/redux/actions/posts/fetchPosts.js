export const FETCH_POSTS_REQUEST = "FETCH_POSTS_REQUEST"
export const FETCH_POSTS_FAIL = "FETCH_POSTS_FAIL"
export const FETCH_POSTS_SUCCESS = "FETCH_POSTS_SUCCESS"

const fetchPosts = () => {
   // eslint-disable-next-line no-unused-vars
   return (dispatch,getState,{getFirestore}) =>{
      dispatch({
            type: FETCH_POSTS_REQUEST
      })
      const lastPostCreatedOn = getState().post.lastPostCreatedOn 
      const db=getFirestore();

      if(lastPostCreatedOn==="")
      {
         db.collection("blogs").orderBy("createdOn","desc").limit(2).get()
         .then(docs =>{
         let posts = []
         let lastCreatedPostTime 
         docs.forEach(doc =>{
            lastCreatedPostTime =doc.data().createdOn
            posts.push(doc.data())
         } )
         dispatch({
           type:FETCH_POSTS_SUCCESS,
           payload: {posts,lastPostCreatedOn:lastCreatedPostTime}
          })
      })
      .catch(err=>{
         dispatch({
            type:FETCH_POSTS_FAIL,
            payload: err.message
         })
      })
   }else{
      // 
      db.collection("blogs").orderBy("createdOn","desc").startAfter(lastPostCreatedOn).limit(1).get()
      .then(docs =>{
         let posts = [] 
         let lastCreatedPostTime =""
         docs.forEach(doc =>{
            lastCreatedPostTime =doc.data().createdOn
            posts.push(doc.data())
         } )
         dispatch({
           type:FETCH_POSTS_SUCCESS,
           payload: {posts,lastPostCreatedOn:lastCreatedPostTime}
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
}
export default fetchPosts
