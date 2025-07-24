import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { PiUserCircleDuotone } from 'react-icons/pi';
import { logoutUser } from '../redux/actions/authActions';
import { fetchCategories } from '../redux/actions/categoryActions';
import { FaPhoneAlt, } from "react-icons/fa";
import Logo from '../assets/applogo.jpeg'


const Dropdown = ({ title, items, isOpen, setOpen }) => {
    const dropdownRef = useRef(null);
    const handleOpen = (newTitle) => {
        setOpen((prev) => (prev === newTitle ? '' : newTitle));
    };
    let timeoutRef = useRef(null);


    const handleMouseEnter = () => {
        clearTimeout(timeoutRef.current);
        handleOpen(title);
    };

    const handleMouseLeave = () => {
        timeoutRef.current = setTimeout(() => {
            setOpen('');
        }, 200);
    };

    return (
        <div>
            <div className="relative bg-[#f5f5f5]"  >
                <Link
                    className={`xl:text-[15px] ipad-pro:text-base md:text-sm  text-sm ${isOpen ? 'text-[#D32F2F] border-b-2 border-[#D32F2F]' : ''}`}
                    onClick={() => handleOpen(title)}
                    ref={dropdownRef}
                    onMouseEnter={handleMouseEnter}
                >
                    {title}
                </Link>
            </div>
            <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={isOpen ? { opacity: 1, height: 'auto' } : { opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="absolute bg-[#f5f5f5] left-10 right-5 top-[120px] rounded-b-[20px] w-[95%] z-50 text-left overflow-hidden"
                style={{ boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.1)' }}
                onMouseLeave={handleMouseLeave}
            >

                <div className="grid grid-cols-1 md:grid-cols-7 gap-8 p-6 w-full">
                    {items.map((item, index) => (
                        <div key={index}>
                            <ul className="space-y-2">
                                <li key={item.category_name}>
                                    <Link
                                        to={{
                                            pathname: `/category/${item.id}`,
                                            state: { image: item.category_image }, // Add image to the state
                                        }}
                                        onClick={() => setOpen('')}
                                        className="text-black hover:text-[#D32F2F] block xl:text-[15px] ipad-pro:text-base md:text-sm  text-sm"
                                    >
                                        {item.category_name}
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    ))}
                </div>

            </motion.div>
        </div>
    );
};

const Header = () => {
    const auth = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const { user, token } = useSelector((state) => state.auth);
    const categories = useSelector((state) => state?.categories?.categories || []);
    useEffect(() => {
        dispatch(fetchCategories());

    }, [dispatch]);

    const handleLogout = () => {
        if (user && token) {
            dispatch(logoutUser(user.id, token)); // assuming `user.id` exists
        }
    };
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMobileDropdownOpen, setIsDropdownOpen] = useState(false);
    const menuRef = useRef(null);
    const buttonRef = useRef(null);
    const handleToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    const location = useLocation();
    const currentPath = location.pathname;

    const [openDropdown, setOpenDropdown] = useState('');
    const [hoverTimeout, setHoverTimeout] = useState(null);

    return (
        <header className="content w-full h-[120px] flex items-center justify-between z-50 bg-[#f5f5f5] shadow-lg fixed">
            <div className='flex flex-col w-full '>
                <div className="flex-grow hidden md:hidden ipad-pro:flex xl:flex items-center justify-between bg-[#f5f5f5] pt-8 border-b pr-[7%] sm:pr-[40px] md:pr-[20px] xl:pr-[20px] ipad-pro:pr-[20px]  pl-2 pb-3">
                    <div className="flex items-center space-x-2 w-[30%]">
                        <img
                            src={Logo}
                            alt="Kanthalya Herbals"
                            className="h-10 "
                        />
                        <div className="flex flex-col items-start pl-3 text-[13px]">
                            <p className="text-gray-600">Contact us 24/7</p>
                            <p className="font-bold text-black flex items-center gap-2 mt-1">
                                <FaPhoneAlt className=" text-black" /> (+91) 95220 57045
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center space-x-6">
                        {auth?.token ? (
                            <div
                                className="relative"
                                onMouseEnter={() => {
                                    if (hoverTimeout) clearTimeout(hoverTimeout);
                                    setOpenDropdown('Profile');
                                }}
                                onMouseLeave={() => {
                                    const timeout = setTimeout(() => setOpenDropdown(''), 150);
                                    setHoverTimeout(timeout);
                                }}
                            >
                                <button className="flex items-center gap-3">
                                    <PiUserCircleDuotone className="w-6 h-6 text-gray-700" />
                                    <span>Account</span>
                                </button>

                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={openDropdown === 'Profile' ? { opacity: 1, height: 'auto' } : { opacity: 0, height: 0 }}
                                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                                    className="absolute right-0 mt-2 w-40 top-[40px] bg-[#f5f5f5] text-left rounded-lg shadow-lg z-50 overflow-hidden"
                                >
                                    <div className="p-2">
                                        <Link
                                            to="/profile"
                                            className="block px-4 py-2 hover:bg-gray-100 text-sm text-gray-800 flex gap-4 "
                                        >
                                            <PiUserCircleDuotone className="w-6 h-6 text-gray-700" />
                                            <span>{user.name || user.email || user.id}</span>
                                        </Link>
                                        <Link
                                            to="/properties-list"
                                            className="block px-4 py-2 hover:bg-gray-100 text-sm text-gray-800 flex gap-4 "
                                        >
                                            View Properties
                                        </Link>

                                        <button
                                            onClick={() => {
                                                handleLogout()
                                            }}
                                            className="block w-full text-left px-4 py-2 hover:bg-red-50 text-sm text-red-600"
                                        >
                                            Logout
                                        </button>
                                    </div>
                                </motion.div>
                            </div>
                        ) : (
                            <div
                                className="relative"
                                onMouseEnter={() => {
                                    if (hoverTimeout) clearTimeout(hoverTimeout);
                                    setOpenDropdown('Login');
                                }}
                                onMouseLeave={() => {
                                    const timeout = setTimeout(() => setOpenDropdown(''), 150);
                                    setHoverTimeout(timeout);
                                }}
                            >
                                <button
                                    onClick={() => setOpenDropdown(openDropdown === 'Login' ? '' : 'Login')}
                                    className="flex items-center xl:text-[15px] ipad-pro:text-base md:text-sm text-sm hover:text-[#D32F2F]"
                                >
                                    Login
                                    <svg
                                        className={`w-4 h-4 ml-1 transform ${openDropdown === 'Login' ? 'rotate-180' : 'rotate-0'}`}
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>

                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={openDropdown === 'Login' ? { opacity: 1, height: 'auto' } : { opacity: 0, height: 0 }}
                                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                                    className="absolute right-0 mt-2 w-64  top-[40px]  bg-[#f5f5f5] text-left rounded-lg shadow-lg z-50 overflow-hidden"

                                >
                                    <div className="p-4">
                                        <h3 className="text-sm font-semibold text-gray-700 border-b pb-2 mb-2">My Activity</h3>
                                        <ul className="space-y-2 text-sm text-gray-800">
                                            <li className="flex justify-between items-center hover:underline cursor-pointer">
                                                Requested Properties <span className="text-xs bg-yellow-400 text-white px-2 py-0.5 rounded-full">NEW</span>
                                            </li>
                                            <li className="hover:underline cursor-pointer">View Response</li>
                                            <li className="hover:underline cursor-pointer">Manage Properties</li>
                                            <li className="hover:underline cursor-pointer">MagicDiary</li>
                                            <li className="hover:underline cursor-pointer">Manage Alerts</li>
                                            <li className="hover:underline cursor-pointer">iAdvantage</li>
                                        </ul>

                                        <Link
                                            to="/login"
                                            className="block w-full mt-6 bg-[#D32F2F] hover:bg-[#B71C1C] text-white py-3 rounded-full text-base font-semibold text-center shadow-md transition-all duration-200"
                                        >
                                            Login
                                        </Link>


                                        <Link
                                            to="/sign-up"
                                        >
                                            <p className="text-xs text-center mt-2">
                                                New to Magicbricks? <span className="text-red-600 font-semibold cursor-pointer hover:underline">Sign Up</span>
                                            </p>
                                        </Link>
                                    </div>
                                </motion.div>
                            </div>
                        )}
                    </div>
                </div>



                <div className="flex-grow hidden md:hidden ipad-pro:flex xl:flex gap-x-8 sm:gap-x-2 md:gap-x-3 lg:gap-x-8 xl:gap-x-8 2xl:gap-x-8 ipad-pro:gap-x-2  justify-start pr-0 pb-7 h-[80px] items-center pl-[7%] sm:pl-[40px] md:pl-[30px] xl:pl-[30px] ipad-pro:pl-[20px]  xl:text-[15px] ipad-pro:text-base md:text-sm  text-sm">
                    <Link
                        to="/Home"
                        className={`  ${currentPath === "/Home" && !openDropdown ? "text-[#D32F2F] border-b-2 border-[#D32F2F]" : ""} hover:text-[#D32F2F] hover:border-b-2 hover:border-[#D32F2F]`}
                        onMouseEnter={() => setOpenDropdown('')}
                    >
                        Home
                    </Link>
                    <Dropdown
                        title="Category"
                        items={categories}
                        isOpen={openDropdown === 'Category'}
                        setOpen={setOpenDropdown}
                    />

                    <Link
                        to="/about-us"
                        className={`  ${currentPath === "/about-us" && !openDropdown ? "text-[#D32F2F] border-b-2 border-[#D32F2F]" : ""} hover:text-[#D32F2F] hover:border-b-2 hover:border-[#D32F2F]`}
                        onMouseEnter={() => setOpenDropdown('')}
                    >
                        About US
                    </Link>
                    <Link
                        to="/blog"
                        className={`   ${currentPath === "/blog" && !openDropdown ? "text-[#D32F2F] border-b-2 border-[#D32F2F]" : ""} hover:text-[#D32F2F] hover:border-b-2 hover:border-[#D32F2F]`}
                        onMouseEnter={() => setOpenDropdown('')}
                    >
                        Blog
                    </Link>
                </div>
            </div>

            <button
                ref={buttonRef}
                className="block md:block ipad-pro:hidden xl:hidden flex items-center"
                onClick={handleToggle}
                aria-label="Toggle navigation"
            >
                <svg
                    className="w-6 h-6 text-[#D32F2F]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                    />
                </svg>
            </button>
            <div
                ref={menuRef}
                className={`ipad-pro:hidden xl:hidden absolute top-16 z-50 right-0 w-48 bg-[#f5f5f5]  border border-gray-300 shadow-lg ${isMenuOpen ? "block" : "hidden"
                    } max-h-96 overflow-y-auto`}
            >
                <Link to="/about-us" className="block px-4 py-2 text-lg hover:bg-gray-200">
                    Home
                </Link>

                {/* Mobile Services with dropdown */}
                <div className="relative">
                    <button
                        className="block px-4 py-2 text-lg hover:bg-gray-200 w-full text-left"
                        onClick={() => setIsDropdownOpen(!isMobileDropdownOpen)}
                    >
                        Category
                        <svg
                            className={`w-4 h-4 inline-block ml-2 transform ${isMobileDropdownOpen ? "rotate-180" : "rotate-0"
                                }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>

                    {/* Dropdown for Mobile */}
                    {isMobileDropdownOpen && (
                        <div className="bg-[#f5f5f5] border-t border-gray-300 max-h-60 overflow-y-auto z-50 ">
                            {categories.map((category) => (
                                <Link
                                    key={category.category_name}
                                    to={`/category/${category.id}`}
                                    className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
                                >
                                    {category.category_name}
                                </Link>
                            ))}
                        </div>
                    )}
                </div>

                <Link to="/case-study" className="block px-4 py-2 text-lg hover:bg-gray-200">
                    About Us
                </Link>
                <Link to="/join-us" className="block px-4 py-2 text-lg hover:bg-gray-200">
                    Blog
                </Link>
            </div>

        </header>
    );
};

export default Header;
