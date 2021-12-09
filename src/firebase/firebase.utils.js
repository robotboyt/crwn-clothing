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

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`)

    const snapShot = await userRef.get()

    if(!snapShot.exists) {
        const {displayName, email} = userAuth
        const cretedAt = new Date()

        try {
            await userRef.set({
                displayName,
                email,
                cretedAt,
                ...additionalData
            })
        } catch (error) {
            console.log("error creating user", error.message);
        }
    } 
    return userRef
  }
  

  export const addCollectionAndDocuments = async (
    collectionKey,
    objectsToAdd
  ) => {
    const collectionRef = firestore.collection(collectionKey);
  
    const batch = firestore.batch();
    objectsToAdd.forEach((obj) => {
      const newDocRef = collectionRef.doc();
      batch.set(newDocRef, obj);
    });
  
    return await batch.commit();
  };
  
  export const convertCollectionsSnapshotToMap = (collections) => {
    const transformedCollection = collections.docs.map((doc) => {
      const { title, items } = doc.data();
  
      return {
        routeName: encodeURI(title.toLowerCase()),
        id: doc.id,
        title,
        items,
      };
    });
  
    return transformedCollection.reduce((accumulator, collection) => {
      accumulator[collection.title.toLowerCase()] = collection;
      return accumulator;
    }, {});
  };

  export const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
      const unsubscribe = auth.onAuthStateChanged(userAuth => {
        unsubscribe()
        resolve(userAuth)
      }, reject)
    })
  }
  
  export const auth = firebase.auth() 
  export const firestore = firebase.firestore()

  export const googleProvider = new firebase.auth.GoogleAuthProvider()
  googleProvider.setCustomParameters({promt: 'select_account'})
  export const signInWithGoogle = ( ) => auth.signInWithPopup(googleProvider)

  export default firebase