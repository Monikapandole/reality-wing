import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaStar } from "react-icons/fa";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import icon1 from "../assets/asset1.jpg";
import icon2 from "../assets/asset1.jpg";
import icon3 from "../assets/asset3.jpg";
import icon5 from "../assets/asset6.jpg";
import icon6 from "../assets/asset7.jpg";
const properties = [
  {
    title: "Lumbini Elysee",
    subtitle: "3,4 BHK Apartment, Financial District, Hyderabad",
    price: "₹ 2.26 - 4.54 Cr",
    img: icon1,
    logo:icon1,
  },
  {
    title: "Rishi Coral Wood Bungalows",
    subtitle: "4,5 BHK Independent House/Villa, Bhopal",
    price: "₹ 1.8 Cr",
    img: icon2,
    logo:icon6,
  },
  {
    title: "Ashiana",
    subtitle: "1,2,3 BHK",
    price: "₹ 84.6 Lakh",
    img: icon3,
    logo:icon5,
  },
];

const CustomArrow = ({ onClick, direction }) => (
  <div
    className={`absolute top-1/2 transform -translate-y-1/2 z-10 bg-white shadow p-2 rounded-full cursor-pointer ${
      direction === "left" ? "left-0" : "right-0"
    }`}
    onClick={onClick}
  >
    {direction === "left" ? <FaChevronLeft /> : <FaChevronRight />}
  </div>
);

const ResidentialSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3.3,
    slidesToScroll: 1,
    nextArrow: <CustomArrow direction="right" />,
    prevArrow: <CustomArrow direction="left" />,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="py-10 px-4 bg-white px-4 md:px-10 py-8 text-left font-rubik">
      <h2 className="text-3xl font-bold text-gray-800 mb-2 pt-10">
        Handpicked Residential Projects
      </h2>
      <p className="text-gray-500 mb-6 pb-10">Featured Residential projects across India</p>
      <Slider {...settings}>
        {properties.map((item, index) => (
          <div key={index} className="px-2">
            <div className="rounded-xl overflow-hidden shadow-md relative">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-64 object-cover"
              />
              <div className="absolute top-2 left-2 bg-purple-700 text-white text-xs font-semibold px-2 py-1 rounded">
                Featured
              </div>
              <div className="absolute top-2 right-2 text-white text-xl">
                <FaStar />
              </div>
              <div className="bg-white rounded-xl p-4 mt-[-2rem] mx-4 relative z-10 shadow-md ipad-pro:min-h-[170px] xl:min-h-[80px]">
                <div className="w-16 h-16 rounded-full overflow-hidden shadow-md absolute -top-10 left-4 border-4 border-white bg-white">
                  <img src={item.logo} alt="logo" className="w-full h-full " />
                </div>
                <div className="pl-20">
                  <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
                  <p className="text-sm text-gray-500 mt-1">{item.subtitle}</p>
                  <p className="text-base font-bold text-indigo-700 mt-2">{item.price}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ResidentialSlider;
