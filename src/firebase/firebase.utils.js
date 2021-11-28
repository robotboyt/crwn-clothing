import firebase from 'firebase/compat/app'
import "firebase/compat/firestore"
import "firebase/compat/auth"


const config = {

    apiKey: "AIzaSyCPFrZYkv2nZ0osvg5UPuwB4Sju8ZIfUSo",
  
    authDomain: "crwn-db-d6d88.firebaseapp.com",
  
    projectId: "crwn-db-d6d88",
  
    storageBucket: "crwn-db-d6d88.appspot.com",
  
    messagingSenderId: "16139687932",
  
    appId: "1:16139687932:web:2e279e763296cdd1db4479",
  
    measurementId: "G-L80EENBZMG"
  
  }

  firebase.initializeApp(config)
  
  export const auth = firebase.auth() 
  export const firestore = firebase.firestore()

  const provider = new firebase.auth.GoogleAuthProvider()
  provider.setCustomParameters({promt: 'select_account'})
  export const signInWithGoogle = ( ) => auth.signInWithPopup(provider)

  export default firebase