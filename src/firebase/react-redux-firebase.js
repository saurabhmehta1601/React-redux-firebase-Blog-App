import React from 'react'
import store from "../redux/store"
import firebase from './config';
import {createFirestoreInstance,ReactReduxFirebaseProvider} from 'react-redux-firebase'

const reactReduxFirebaseConfig = { 
    userProfile: "users",
    useFirestoreForProfile: true,
  };
  
  const reactReduxFirebaseProps={
  firebase,
  config: reactReduxFirebaseConfig,
  dispatch: store.dispatch,
  createFirestoreInstance,
  }

  const RRFProvider =({children}) =>  {
    return <ReactReduxFirebaseProvider {...reactReduxFirebaseProps} >
        {children}
      </ReactReduxFirebaseProvider>
      }

  export default  RRFProvider