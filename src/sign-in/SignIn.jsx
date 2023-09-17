import React from 'react'
import { signInWithGooglePopup, createUserDocumentFromAuth } from '../ultils/firebase'

const SignIn = () => {
    const logginUser = async () => {
        const { user } = await signInWithGooglePopup();
        await createUserDocumentFromAuth(user)
    }
    return <button onClick={logginUser}>Sign In firebase</button>
}
export default SignIn;

