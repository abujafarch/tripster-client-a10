import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { app } from "../firebase/firebase.config";
import { GoogleAuthProvider } from "firebase/auth";

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    const [themeChange, setThemeChange] = useState(true)
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(null)
    const [updateProfile, setUpdateProfile] = useState(false)
    const auth = getAuth(app)
    const googleProvider = new GoogleAuthProvider


    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleLogin = () =>{
        return signInWithPopup(auth, googleProvider)
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            if(updateProfile){
                setUser(currentUser)
                setUpdateProfile(false)
            }
            setUser(currentUser)
            setLoading(false)
            console.log('current user is: ', currentUser)
        })
        return () => {
            unSubscribe()
        }
    }, [auth, updateProfile])

    // useEffect(() => {
    //     const unsubscribe = onAuthStateChanged(auth, currentUser => {
    //         setUser(currentUser)
    //         setLoading(false)
    //         console.log('the current user is', currentUser)

    //     })

    //     return () => {
    //         unsubscribe()
    //     }
    // }, [])

    const authInfo = { themeChange, setThemeChange, createUser, loading, setLoading, user, loginUser, logOut, auth, setUpdateProfile, googleLogin }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;