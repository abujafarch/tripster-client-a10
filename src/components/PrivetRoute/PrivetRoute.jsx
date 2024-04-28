import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivetRoute = ({ children }) => {
    const location = useLocation()
    const { user } = useContext(AuthContext)
    return (
        <div>
            {
                user ? children : <Navigate state={location.pathname} to='/login'></Navigate>
            }
        </div>
    );
};

export default PrivetRoute;