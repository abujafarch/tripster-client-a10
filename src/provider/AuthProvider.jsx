import { createContext, useState } from "react";

export const AuthContext = createContext()

const AuthProvider = ({children}) => {
    const [themeChange, setThemeChange] = useState(true)


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

    const authInfo = {themeChange, setThemeChange}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;