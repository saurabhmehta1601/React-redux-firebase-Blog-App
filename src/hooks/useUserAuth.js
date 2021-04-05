import {useEffect,useState} from 'react'
import firebase from '../firebase/config'

export const useUserAuth = () =>{
    
  const [activeUser,setActiveUser] = useState() ; 

  useEffect(()=>{
    const setUser=  ()=>{

      firebase.auth().onAuthStateChanged(user =>{
        if(user){
          setActiveUser(user)
        }else{
          setActiveUser(null)
        }
      })
    }
    setUser()
  },[activeUser])

  return activeUser
}