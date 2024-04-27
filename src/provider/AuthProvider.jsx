import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { createContext, useState } from "react";
import { app } from "../firebase/firebase.config";

export const AuthContext = createContext()

const AuthProvider = ({children}) => {
    const [themeChange, setThemeChange] = useState(true)
    const auth = getAuth(app)

    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }


    // useEffect(() => {
    //     const unsubscribe = onAuthStateChanged(auth, currentUser => {
    //         if(upProfile){
    //             setUser(currentUser)
    //             setUpProfile(false)
    //             // setLoading(false)
    //             // return
    //         }
    //         setUser(currentUser)
    //         setLoading(false)
    //         console.log('the current user is', currentUser)

    //     })

    //     return () => {
    //         unsubscribe()
    //     }
    // }, [upProfile])

    const authInfo = {themeChange, setThemeChange, createUser}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;