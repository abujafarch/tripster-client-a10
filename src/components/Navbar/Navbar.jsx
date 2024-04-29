import { Link, NavLink, useLocation } from "react-router-dom";
import { useContext, useState } from "react";
import { HiMenu } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
import ThemeControl from "../Home/ThemeControl";
import { AuthContext } from "../../provider/AuthProvider";
import toast from "react-hot-toast";

const Navbar = () => {
    const location = useLocation()
    const { loading, logOut, user } = useContext(AuthContext)

    const [showProfile, setShowProfile] = useState(false)
    const [showMenu, setShowMenu] = useState(false)
    const handleShowProfile = () => {
        setShowProfile(true)
    }
    const handleHideProfile = () => {
        setShowProfile(false)
    }

    const handleShowMenu = () => {
        setShowMenu(true)
    }
    const handleCloseMenu = () => {
        setShowMenu(false)
    }

    const handleLogOut = () => {
        handleHideProfile()
        logOut()
            .then(result => {
                toast.success('Logged out successfully')
                console.log(result)
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <div className='flex justify-between w-full  items-center z-20 absolute top-3 md-lg:top-8 left-1/2 -translate-x-1/2 bg-transparent max-w-[1440px] px-3'>
            <button onClick={handleShowMenu} className="text-2xl md-lg:hidden text-light-blue cursor-pointer p-1">
                <HiMenu></HiMenu>
            </button>
            <div>
                <NavLink to='/'><h1 className='text-light-blue font-extrabold font-kaushan text-4xl sm:text-5xl text-left'>Tripster</h1></NavLink>
            </div>

            {
                loading ?
                    <div className='flex gap-5 text-lg font-macondo text-[#264653] items-center'>
                        <div className="skeleton w-28 md-lg:block hidden rounded-md h-10"></div>
                        <div className="skeleton w-28 md-lg:block hidden rounded-md h-10"></div>
                        <div className="skeleton w-28 md-lg:block hidden rounded-md h-10"></div>
                        <div className="skeleton w-9 rounded-full h-9"></div>
                    </div>
                    : <div className='flex gap-5 text-lg font-macondo text-[#264653] items-center'>
                        <div className={`flex flex-col fixed -top-7 ${showMenu ? 'left-0' : '-left-80'} transition-all font-semibold duration-400 z-20 bg-white h-screen gap-4 text-lg shadow-2xl text-light-blue md-lg:gap-5 md-lg:bg-transparent md-lg:p-0 p-5 md-lg:h-fit md-lg:items-center md-lg:static md-lg:flex-row md-lg:transition-none md-lg:w-full w-60 md-lg:shadow-none`}>
                            <button onClick={handleCloseMenu} className="text-2xl md-lg:hidden flex justify-end">
                                <RxCross2></RxCross2>
                            </button>
                            <NavLink onClick={handleCloseMenu} to='/'><a>Home</a></NavLink>
                            <NavLink onClick={handleCloseMenu} to='/all-tourists-spots'><a>All Tourist Spot</a></NavLink>
                            {
                                user && <NavLink onClick={handleCloseMenu} to='/add-tourist-spot'>Add Tourist Spot</NavLink>
                            }
                            {
                                user && <NavLink onClick={handleCloseMenu} to={`/my-lists/${user.email}`}>My List</NavLink>
                            }
                            {
                                !user && <Link to='/register' onClick={handleCloseMenu} className='bg-light-blue text-center px-5 py-[6px] rounded-md text-white w-fit font-medium'>Register</Link>
                            }
                            {
                                !user && <Link to='/login' onClick={handleCloseMenu} className='bg-light-blue font-medium text-center px-5 py-[6px] rounded-md text-white w-fit'><a>Login</a></Link>
                            }
                        </div>
                        {
                            user && <button onMouseLeave={handleHideProfile} className="relative p-2">
                                <div onMouseEnter={handleShowProfile} className="w-[35px] h-[35px] flex items-center justify-center">
                                    <img src={user.photoURL} className="w-full h-full object-cover border-2 rounded-full border-[#F4A261]" />
                                </div>

                                <div onMouseEnter={handleShowProfile} onMouseLeave={handleHideProfile} title="" className={`p-2 absolute right-0 mt-2 rounded-md transition-all duration-300 ease-in-out bg-white border space-y-3 border-[#ececec] ${showProfile ? 'static' : 'hidden'}  shadow-lg`}>

                                    <button className="w-fit">{user.displayName}</button>
                                    <button onClick={handleLogOut} className='bg-orange text-center px-5 py-[6px] rounded-md text-white w-fit'><a>Logout</a></button>

                                </div>
                            </button>
                        }
                        <div className={`${location.pathname === '/' ? 'block' : 'hidden'} -ml-3`}>
                            <ThemeControl></ThemeControl>
                        </div>
                    </div>
            }

        </div>
    );
};

export default Navbar;