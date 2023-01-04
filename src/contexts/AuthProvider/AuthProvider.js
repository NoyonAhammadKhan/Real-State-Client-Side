import React, { useEffect } from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import app, {} from '../../firebase/Firebase.config'
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'

export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(true);
    const createUser=(email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const signIn=(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }
    const updateUser=(userInfo)=>{
        return updateProfile(auth.currentUser,userInfo);
    }
    
    const logOut=()=>{
        setLoading(true);
        return signOut(auth);
    }

    const providerLogin=(providerName)=>{
        setLoading(true)
        return signInWithPopup(auth,providerName);
    }

    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,currentUser=>{
            console.log('user is observing');
            setUser(currentUser);
            setLoading(false);
        })
        return ()=>unsubscribe();

    },[])

    const authInfo={
        createUser,
        signIn,
        updateUser,
        logOut,
        loading,
        providerLogin
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
