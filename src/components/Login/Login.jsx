import { Link } from "react-router-dom";
import { BsEye } from "react-icons/bs";
import { TfiLock } from "react-icons/tfi";
import { TfiEmail } from "react-icons/tfi";
import { BiLogoGithub } from "react-icons/bi";
import { FcGoogle } from "react-icons/fc";
import { BsEyeSlash } from "react-icons/bs"
import { useState } from "react";
import LoginBanner from "./LoginBanner";

const Login = () => {
    const [showPassword, setShowPassword] = useState(true)
    return (
        <div className="md:px-5 sm:px-20 px-3 mb-10">
            <div className="md-lg:mt-[170px] mt-28 mx-auto shadow-my-shadow rounded-xl h-[500px] items-center flex gap-2 justify-center md-lg:w-fit w-full">
                {/* <Helmet>
                <title>Login | Utopia</title>
                </Helmet> */}

                <div className="max-w-[430px] w-1/2 hidden md:block">
                    <LoginBanner></LoginBanner>
                </div>
                <div className="rounded-xl h-fit md-lg:min-w-[430px] w-full md:w-1/2">
                    <h4 className="sm:text-5xl text-4xl mb-2 font-poppins text-light-blue font-semibold text-center">Welcome</h4>
                    <p className="rounded-t-lg mb-2 text-2xl font-mont text-center text-dark-blue font-semibold">Please Login</p>
                    <div className="md-lg:px-10 px-5">

                        <form className="w-full">
                            <div className="mt-7 flex items-center border-dark-blue border-b rounded-sm">
                                <span className=" p-2 text-2xl text-dark-blue"><TfiEmail></TfiEmail></span>
                                <input className=" outline-none w-full py-2 px-3" type="email" name="email" placeholder="Your Email" />
                            </div>

                            <div className="mt-7 flex items-center border-dark-blue border-b rounded-sm">
                                <span className=" p-2 text-2xl text-dark-blue"><TfiLock></TfiLock></span>
                                <input className=" outline-none w-full py-2 px-3" type={showPassword ? 'text' : 'password'} name="password" placeholder="Your Password" required />

                                <button onClick={(e) => {
                                    e.preventDefault()
                                    setShowPassword(!showPassword)
                                }} className="text-xl text-dark-blue pr-2">

                                    {
                                        showPassword ? <BsEye></BsEye> : <BsEyeSlash></BsEyeSlash>
                                    }

                                </button>
                            </div>

                            <button className="bg-dark-blue w-full py-2 rounded-sm mt-7 font-poppins text-lg font-medium text-white">Login</button>
                        </form>

                        <div>
                            <p className="my-4 text-center font-poppins font-medium">or Login with</p>

                            <div className="flex gap-2 sm:gap-4 items-center justify-center">
                                <button className="border-dark-blue px-1 border flex gap-2 items-center justify-center py-[6px] flex-1 rounded-sm font-poppins font-medium"><FcGoogle className="text-3xl"></FcGoogle> Google</button>

                                <button className="border-dark-blue px-1 border flex gap-2 items-center justify-center py-[6px] rounded-sm font-poppins flex-1 font-medium"><BiLogoGithub className="text-3xl text-[#1F2328]"></BiLogoGithub>GitHub</button>
                            </div>

                            <p className="py-5 text-center font-medium font-poppins">
                                Not a member? <Link to='/register' className="text-dark-blue">Register</Link>
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Login;