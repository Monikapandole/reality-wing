import React from "react";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight, FaPhone } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import icon4 from "../assets/asset5.jpg";
import icon5 from "../assets/asset6.jpg";
import icon6 from "../assets/asset7.jpg";
const projects = [
    {
        title: "Prestige Park Grove",
        location: "Whitefield, Bangalore",
        type: "2, 3, 4 BHK Apartment",
        price: "₹ 1.29 - 2.8 Cr",
        developer: "Prestige Group",
        image: icon6,
    },
    {
        title: "Godrej Astra",
        location: "Sector 54, Gurgaon",
        type: "3, 4 BHK Apartment",
        price: "₹ 10.34 - 14.24 Cr",
        developer: "Godrej Properties",
        image: icon4,
    },
    {
        title: "Prestige Park Grove",
        location: "Whitefield, Bangalore",
        type: "2, 3, 4 BHK Apartment",
        price: "₹ 1.29 - 2.8 Cr",
        developer: "Prestige Group",
        image: icon5,
    },

];

const Arrow = ({ onClick, direction }) => (
    <div
        className={`absolute top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-md p-2 rounded-full cursor-pointer ${direction === "left" ? "left-2" : "right-2"
            }`}
        onClick={onClick}
    >
        {direction === "left" ? <FaChevronLeft /> : <FaChevronRight />}
    </div>
);

const UpcomingProjectsSlider = () => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        arrows: true,
        speed: 500,
        nextArrow: <Arrow direction="right" />,
        prevArrow: <Arrow direction="left" />,
    };

    return (
        <div className="py-12 px-4 max-w-screen-xl mx-auto text-left">
            <h2 className="text-3xl font-bold text-gray-800 mb-1">Upcoming Projects</h2>
            <p className="text-gray-500 mb-6">Visit these projects and get early bird benefits</p>

            <Slider {...settings}>
                {projects.map((item, idx) => (
                    <div key={idx} className="px-2">
                        <div className="relative rounded-xl overflow-hidden shadow-lg">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-[400px] object-cover"
                            />
                            <div className="absolute top-4 left-4 text-gray-700  text-xl font-semibold drop-shadow">
                                {item.title}
                            </div>
                            <div className="absolute top-12 left-4 text-gray-700 text-sm drop-shadow">
                                {item.location}
                            </div>
                            <div className="absolute top-4 right-4 text-gray-700 text-right text-sm font-semibold drop-shadow">
                                {item.type}
                                <div className="text-base font-bold">{item.price}</div>
                            </div>

                            <div className="bg-[#031B4E] text-white flex items-center justify-between px-6 py-4">
                                <div>
                                    <div className="text-sm text-gray-300">Interested in this project by</div>
                                    <div className="font-bold text-white flex items-center gap-1">
                                        {item.developer} <span>→</span>
                                    </div>
                                </div>
                                <button className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-semibold px-4 py-2 rounded-md flex items-center gap-2">
                                    <FaPhone />
                                    View Number
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default UpcomingProjectsSlider;
