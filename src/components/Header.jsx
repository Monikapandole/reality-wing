import React, { useState, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import icon1 from "../assets/asset1.jpg";
import icon2 from "../assets/asset2.jpg";
import icon3 from "../assets/asset3.jpg";
import icon4 from "../assets/asset5.jpg";
import icon5 from "../assets/asset6.jpg";
import icon6 from "../assets/asset7.jpg";

const category = [
    { name: "Apartments", slug: "apartments", img: icon1, tag: "Lowest Price" },
    { name: "Villas", slug: "villas", img: icon2, tag: "New Offers" },
    { name: "Studios", slug: "studios", img: icon3, tag: "Flat 30% off" },
    { name: "Shared Rooms", slug: "shared-rooms", img: icon4, tag: "Flat 30% off" },
    { name: "PG (Paying Guest)", slug: "pg-paying-guest", img: icon1, tag: "New" },
    { name: "Hostels", slug: "hostels", img: icon5, tag: "new deal" },
    { name: "Co-living Spaces", slug: "co-living-spaces", img: icon6, tag: "new deal" },
    { name: "Luxury Homes", slug: "luxury-homes", img: icon1, tag: "Exclusive" },
    { name: "Budget Rentals", slug: "budget-rentals", img: icon2, tag: "Budget Friendly" },
    { name: "Short-Term Rentals", slug: "short-term-rentals", img: icon3, tag: "Flexible Stay" },
    { name: "Long-Term Leases", slug: "long-term-leases", img: icon4, tag: "Best Deals" },
    { name: "Pet-Friendly", slug: "pet-friendly", img: icon5, tag: "Pets Allowed" },
    { name: "Furnished Rentals", slug: "furnished-rentals", img: icon6, tag: "Fully Furnished" },
    { name: "Unfurnished Rentals", slug: "unfurnished-rentals", img: icon1, tag: "Customizable" },
    { name: "Near Public Transport", slug: "near-public-transport", img: icon2, tag: "Great Connectivity" },
    { name: "Parking Included", slug: "parking-included", img: icon3, tag: "Free Parking" },
  ];





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
            <div className="relative"  >
                <Link
                    className={`xl:text-lg ipad-pro:text-base md:text-sm  text-sm ${isOpen ? 'text-[#D32F2F] border-b-2 border-[#D32F2F]' : ''}`}
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
                className="absolute bg-white left-10 right-5 top-[80px] rounded-b-[20px] w-[95%] z-50 text-left overflow-hidden"
                style={{ boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.1)' }}
                onMouseLeave={handleMouseLeave}
            >

                <div className="grid grid-cols-1 md:grid-cols-6 gap-8 p-6 w-full">
                    {items.map((item, index) => (
                        <div key={index}>
                            <ul className="space-y-2">
                                {/* {group.items.map((item) => ( */}
                                <li key={item.name}>
                                    <Link
                                       to={{
                                        pathname: `/category/${item.slug}`,
                                        state: { image: item.img }, // Add image to the state
                                      }}
                                        onClick={() => setOpen('')}
                                        className="text-black hover:text-[#D32F2F] block text-[20px]"
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                                {/* ))} */}
                            </ul>
                        </div>
                    ))}
                </div>

            </motion.div>
        </div>
    );
};

const Header = () => {
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
        <header className="content w-full h-[80px] pr-[7%] sm:pr-[40px] md:pr-[20px] xl:pr-[20px] ipad-pro:pr-[20px]  pl-0  flex items-center justify-between z-50 bg-white shadow-lg fixed top-0 left-0 font-inter ">

            <div className="flex items-center  " style={{ padding: 'max(16px, 1vw)' }}      >
                <Link to="/">
                    APP LOGO
                </Link>
            </div>

            {/* Center: Navigation Links */}
            <div className="flex-grow hidden md:hidden ipad-pro:flex xl:flex gap-x-8 sm:gap-x-2 md:gap-x-3 lg:gap-x-4 xl:gap-x-[1rem] 2xl:gap-x-8 ipad-pro:gap-x-2 mr-[1.4rem] justify-end h-[80px] items-center">
                <Link
                    to="/Home"
                    className={`xl:text-lg ipad-pro:text-base md:text-sm  text-sm  ${currentPath === "/Home" && !openDropdown ? "text-[#D32F2F] border-b-2 border-[#D32F2F]" : ""} hover:text-[#D32F2F] hover:border-b-2 hover:border-[#D32F2F]`}
                    onMouseEnter={() => setOpenDropdown('')}
                >
                    Home
                </Link>
                <Dropdown
                    title="Category"
                    items={category}
                    isOpen={openDropdown === 'Category'}
                    setOpen={setOpenDropdown}
                />

                <Link
                    to="/about-us"
                    className={`xl:text-lg ipad-pro:text-base md:text-sm  text-sm   ${currentPath === "/about-us" && !openDropdown ? "text-[#D32F2F] border-b-2 border-[#D32F2F]" : ""} hover:text-[#D32F2F] hover:border-b-2 hover:border-[#D32F2F]`}
                    onMouseEnter={() => setOpenDropdown('')}
                >
                    About US
                </Link>
                <Link
                    to="/blog"
                    className={`xl:text-lg ipad-pro:text-base md:text-sm  text-sm   ${currentPath === "/blog" && !openDropdown ? "text-[#D32F2F] border-b-2 border-[#D32F2F]" : ""} hover:text-[#D32F2F] hover:border-b-2 hover:border-[#D32F2F]`}
                    onMouseEnter={() => setOpenDropdown('')}
                >
                    Blog
                </Link>
                {/* Login Dropdown */}
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
                        className="flex items-center xl:text-lg ipad-pro:text-base md:text-sm text-sm hover:text-[#D32F2F]"
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
                        className="absolute right-0 mt-2 w-64  top-[40px]  bg-white text-left rounded-lg shadow-lg z-50 overflow-hidden"

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

            </div>
            {/* Toggle Button for Mobile View */}
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

            {/* Mobile Navigation Menu */}
            <div
                ref={menuRef}
                className={`ipad-pro:hidden xl:hidden absolute top-16 z-50 right-0 w-48 bg-white border border-gray-300 shadow-lg ${isMenuOpen ? "block" : "hidden"
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
                        <div className="bg-white border-t border-gray-300 max-h-60 overflow-y-auto z-50 ">
                            {category.map((category) => (
                                <Link
                                    key={category.name}
                                    to={category.path}
                                    className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
                                >
                                    {category.name}
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
