import { NavLink } from "react-router-dom";
import { useState } from "react";
import { HiMenu } from "react-icons/hi";

const Navbar = () => {
    const [showProfile, setShowProfile] = useState(false)

    const handleShowProfile = () => {
        setShowProfile(true)
    }

    const handleHideProfile = () => {
        setShowProfile(false)
    }

    return (
        <div className='flex justify-between w-full  items-center z-20 absolute top-8 left-1/2  -translate-x-1/2 bg-transparent max-w-[1440px]'>
            <button className="text-2xl sm:hidden cursor-pointer p-1">
                <HiMenu></HiMenu>
            </button>
            <div>
                <NavLink to='/'><h1 className='text-light-blue font-extrabold font-kaushan text-5xl text-left'>Tripster</h1></NavLink>
            </div>
            <div className='flex gap-5 text-lg font-medium text-[#264653] items-center'>
            {/* flex flex-col fixed top-0 transition-all duration-400 z-20 bg-white  h-screen gap-4 text-lg shadow-2xl font-medium */}
                <div className={` text-light-blue sm:gap-5 sm:bg-transparent sm:p-0 p-5 sm:h-fit sm:items-center sm:static sm:flex-row sm:transition-none sm:w-full w-60 sm:shadow-none`}>

                    <button className="text-2xl sm:hidden flex justify-end">
                        {/* <RxCross2></RxCross2> */}
                    </button>
                    <NavLink to='/'><a>Home</a></NavLink>
                    <NavLink to='/update-profile'><a>All Tourist Spot</a></NavLink>
                    <NavLink to='/add-tourist-spot'>Add Tourist Spot</NavLink>
                    <NavLink to='/my-list'>My List</NavLink>
                    <NavLink to='/register' className='bg-light-blue text-center px-5 py-[6px] rounded-md text-white w-fit'>Register</NavLink>
                    <NavLink to='/login' className='bg-light-blue text-center px-5 py-[6px] rounded-md text-white w-fit'><a>Login</a></NavLink>
                </div>

                <button onMouseLeave={handleHideProfile} className="relative p-2">
                    <div onMouseEnter={handleShowProfile}  className="w-[35px] h-[35px] flex items-center justify-center">
                        <img src={''} className="w-full h-full object-cover border-2 rounded-full border-[#F4A261]" />
                    </div>

                    <div onMouseEnter={handleShowProfile} onMouseLeave={handleHideProfile} title="" className={`p-2 absolute right-0 mt-2 rounded-md transition-all duration-300 ease-in-out bg-white border space-y-3 border-[#ececec] ${showProfile ? 'static' : 'hidden'}  shadow-lg`}>

                        <button className="w-fit">Abujafar</button>
                        <button className='bg-[#F4A261] text-center px-5 py-[6px] rounded-md text-white w-fit'><a>Logout</a></button>

                    </div>
                </button>
            </div>
        </div>
    );
};

export default Navbar;