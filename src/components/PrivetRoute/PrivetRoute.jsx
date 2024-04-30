import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivetRoute = ({ children }) => {
    const { user } = useContext(AuthContext)
    const location = useLocation()
    const myListsPath = location.pathname.includes("my-lists")
    const userEmailPath = `/my-lists/${user?.email}`
    // console.log(location)
    // console.log(allProtectedPath)

    return (
        <div>
            {
                user ?
                    myListsPath ?
                        location.pathname === userEmailPath ?
                            children :
                            <Navigate to='/'></Navigate> :
                        children :
                    <Navigate state={location.pathname} to='/login'></Navigate>
            }
        </div>
    );
};

export default PrivetRoute;