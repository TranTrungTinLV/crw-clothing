import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup,  GoogleAuthProvider } from 'firebase/auth'
import { getFirestore, doc, setDoc, getDoc, Firestore } from 'firebase/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyBjIe82fwojKSgs4B2A8gSjJI8eXk2hlyw",
    authDomain: "crwn-clothing-db-f4a58.firebaseapp.com",
    projectId: "crwn-clothing-db-f4a58",
    storageBucket: "crwn-clothing-db-f4a58.appspot.com",
    messagingSenderId: "216808608032",
    appId: "1:216808608032:web:f71480787e10df98a94745"
};
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
})

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid) //doc(databse,collection,indetifier)
    console.log(userDocRef);
    const userSnapShot = await getDoc(userDocRef);
    console.log(userSnapShot);
    console.log(userSnapShot.exists());
    if (!userSnapShot.exists()) {
        const { displayName, email } = userAuth;
        const createDate = new Date();
        try {
            await setDoc(
                userDocRef, {
                displayName,
                email,
                createDate
            }
            )
        } catch (err) {
            console.log(err)
        }
    }
}