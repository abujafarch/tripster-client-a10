import { Link, useLocation, useNavigate } from "react-router-dom";
import { BsEye } from "react-icons/bs";
import { TfiLock } from "react-icons/tfi";
import { TfiEmail } from "react-icons/tfi";
import { CiUser } from "react-icons/ci";
import { HiOutlinePhoto } from "react-icons/hi2";
import { BsEyeSlash } from "react-icons/bs";
import { useContext, useState } from "react";
import LoginBanner from "../Login/LoginBanner";
import { AuthContext } from "../../provider/AuthProvider";
import toast from "react-hot-toast";
import { updateProfile } from "firebase/auth";
import { Helmet } from "react-helmet-async";


const Register = () => {
    const [showPassword, setShowPassword] = useState(false)
    const { createUser, setLoading, auth, setUpdateProfile } = useContext(AuthContext)
    const pattern = /^(?=.*[a-z])(?=.*[A-Z]).+$/;
    const location = useLocation()
    const navigate = useNavigate()

    const handleCreateUser = (e) => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const email = form.email.value
        const photo = form.photo.value
        const password = form.password.value
        console.log(name, email, photo, password);

        if (!pattern.test(password) || password.length < 6) {
            toast.error('You have to use minimum 6 letter with at least one uppercase and one lowercase letter')
            return
        }

        createUser(email, password)
            .then(() => {
                navigate(`${location?.state ? location.state : '/'}`)
                updateProfile(auth.currentUser, {
                    displayName: name,
                    photoURL: photo
                })
                    .then(() => { setUpdateProfile(true) })
                    .catch((error) => console.log(error))

                toast.success("Congratulation! Registration Successful")
            })
            .catch(error => {
                toast.error('Already exist this email or your network problem')
                setLoading(false)
                console.log(error.message);
            })
    }

    return (
        <div className="md:px-5 sm:px-20 px-3 mb-10">
            <Helmet>
                <title>Register | Tripster</title>
            </Helmet>
            <div className="md-lg:mt-[170px] mt-28 mx-auto shadow-my-shadow rounded-xl h-[500px] items-center flex gap-2 justify-center md-lg:w-fit w-full">
                <div className="max-w-[430px] w-1/2 hidden md:block">
                    <LoginBanner></LoginBanner>
                </div>

                <form onSubmit={handleCreateUser} className="rounded-xl h-fit md-lg:min-w-[430px] w-full md:w-1/2">
                    <h4 className="sm:text-5xl text-4xl pt-8 font-poppins text-light-blue font-semibold text-center">Welcome</h4>
                    <h1 className=" rounded-t-lg py-1 text-2xl text-dark-blue font-mont text-center font-semibold">Please Register</h1>

                    <div className="sm:px-10 px-5">
                        <div className="mt-4 flex items-center border-dark-blue border-b rounded-sm">
                            <span className=" p-2 text-2xl text-dark-blue"><CiUser></CiUser></span>
                            <input className=" outline-none w-full py-2 px-3" type="text" name="name" placeholder="Your Name" required />
                        </div>

                        <div className="mt-7 flex items-center border-dark-blue border-b rounded-sm">
                            <span className=" p-2 text-xl text-dark-blue"><TfiEmail></TfiEmail></span>
                            <input className=" outline-none w-full py-2 px-3" type="email" name="email" placeholder="Your Email" required />
                        </div>

                        <div className="mt-7 flex items-center border-dark-blue border-b rounded-sm">
                            <span className=" p-2 text-2xl text-dark-blue"><HiOutlinePhoto></HiOutlinePhoto></span>
                            <input className=" outline-none w-full py-2 px-3" type="text" name="photo" placeholder="Your Photo URL" required />
                        </div>

                        <div className="mt-7 flex items-center border-dark-blue border-b rounded-sm">
                            <span className=" p-2 text-2xl text-dark-blue"><TfiLock></TfiLock></span>
                            <input className=" outline-none w-full py-2 px-3" type={showPassword ? 'text' : 'password'} name="password" placeholder="Your Password" required />

                            <button onClick={(e) => {
                                e.preventDefault()
                                setShowPassword(!showPassword)
                            }} className="text-xl text-[#2A9D8F] pr-2">

                                {
                                    showPassword ? <BsEye></BsEye> : <BsEyeSlash></BsEyeSlash>
                                }

                            </button>
                        </div>

                        <button className="bg-dark-blue w-full py-2 rounded-sm mt-7 text-white font-poppins text-lg font-medium">Register</button>

                        <p className="pb-5 pt-3 text-center font-medium font-poppins">
                            Already a member? <Link to='/login' className="text-dark-blue">Login</Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;