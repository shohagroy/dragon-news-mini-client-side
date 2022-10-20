import React, { createContext } from 'react';
import app from '../FireBase/firebaseConfig';
import { getAuth, createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
 


export const AuthProvaider = createContext();



const AuthContext = ({children}) => {

    const auth = getAuth (app)

    const createUserWithEmail = (email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const googleSignIn = (provider) =>{
        return signInWithPopup(auth, provider)
    }


    const user = {displayName: 'shohag roy'}

    const authInfo = {user, googleSignIn }

    return (
        <AuthProvaider.Provider value={authInfo}>
            {children}
        </AuthProvaider.Provider>
    );
};

export default AuthContext;