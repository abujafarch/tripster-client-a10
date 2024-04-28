import { Outlet } from "react-router-dom";
import { Toaster } from 'react-hot-toast';
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import '../../../src/App.css'
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Loader from "../Loader/Loader";

const Root = () => {
    const { loading } = useContext(AuthContext)
    return (
        <div className="overflow-x-hidden">
            <Navbar></Navbar>
            {
                loading ? <Loader /> : <div>
                    <Outlet></Outlet>
                    <Footer></Footer>
                </div>
            }
            <Toaster />
        </div>
    );
};

export default Root;