const FETCH_POSTS_REQUEST = "FETCH_POSTS_REQUEST"
const FETCH_POSTS_FAIL = "FETCH_POSTS_FAIL"
const FETCH_POSTS_SUCCESS = "FETCH_POSTS_SUCCESS"

const END_FETCHING_POST ="END_FETCHING_POST" 

const fetchPosts = () => {
   // eslint-disable-next-line no-unused-vars
   return (dispatch,getState,{getFirestore}) =>{
      dispatch({
            type: FETCH_POSTS_REQUEST
      })
      const lastPostPostedOn = getState().post.lastPostPostedOn 
      const db=getFirestore();

      if(lastPostPostedOn==="")
      {
         db.collection("blogs").orderBy("postedOn","desc").limit(2).get()
         .then(docs =>{
         let posts = []
         let lastCreatedPostTime 
         docs.forEach(doc =>{
            lastCreatedPostTime =doc.data().postedOn
            posts.push(doc.data())
         } )
         dispatch({
           type:FETCH_POSTS_SUCCESS,
           payload: {posts,lastPostPostedOn:lastCreatedPostTime}
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
      db.collection("blogs").orderBy("postedOn","desc").startAfter(lastPostPostedOn).limit(1).get()
      .then(docs =>{
         let posts = [] 
         let lastCreatedPostTime = null 
         docs.forEach(doc =>{
            lastCreatedPostTime =doc.data().postedOn
            posts.push(doc.data())
         } )
         if(posts.length===0){
            dispatch({
               type:END_FETCHING_POST
            })
         }
         dispatch({
           type:FETCH_POSTS_SUCCESS,
           payload: {posts,lastPostPostedOn:lastCreatedPostTime}
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
