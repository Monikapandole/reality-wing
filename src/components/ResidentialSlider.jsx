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
import { useNavigate } from "react-router-dom";
import useFetch from '../hooks/useFetch';
import { getPropertiesList } from '../Api/services/propertyServices';

const CustomArrow = ({ onClick, direction }) => (
  <div
    className={`absolute top-1/2 transform -translate-y-1/2 z-10 bg-white shadow p-2 rounded-full cursor-pointer ${direction === "left" ? "left-0" : "right-0"
      }`}
    onClick={onClick}
  >
    {direction === "left" ? <FaChevronLeft /> : <FaChevronRight />}
  </div>
);

const ResidentialSlider = () => {
    const navigate = useNavigate();
    const { data: properties, loading } = useFetch(getPropertiesList);

    const slidesToShow = 3; // or your default
    let displayProperties = properties || [];

    if (displayProperties.length > 0 && displayProperties.length < slidesToShow) {
      // Repeat the array to fill at least slidesToShow items
      const repeatCount = Math.ceil(slidesToShow / displayProperties.length);
      displayProperties = Array(repeatCount).fill(displayProperties).flat().slice(0, slidesToShow);
    }

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
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
    <div className=" px-4 bg-white px-4 md:px-10 text-left ">
      <h2 className="text-3xl font-bold text-gray-800 mb-2 pt-10">
        Handpicked Residential Projects
      </h2>
      <p className="text-gray-500 mb-6 pb-10">Featured Residential projects across India</p>
      {loading ? (
        <div className="text-center py-10">Loading...</div>
      ) : (
        <Slider {...settings}>
          {displayProperties.map((props, index) => (
            <div key={index} className="px-2" onClick={() => navigate(`/property/${props.id}`, { state: { property: props } })}>
              <div className="rounded-xl overflow-hidden shadow-md relative h-[280px] sm:h-[300px] md:h-[330px] lg:h-[350px]">
                <img
                  src={props.property_images && props.property_images.length > 0 ? props.property_images[0] : icon1}
                  alt={props.address || props.location || 'Property'}
                  className="w-full h-48 sm:h-52 md:h-56 lg:h-64 object-cover"
                />
                <div className="absolute top-2 left-2 bg-purple-700 text-white text-xs font-semibold px-2 py-1 rounded">
                  Featured
                </div>
                <div className="absolute top-2 right-2 text-white text-xl">
                  <FaStar />
                </div>
                <div className="bg-white rounded-xl p-3 sm:p-4 mt-[-1.5rem] sm:mt-[-2rem] mx-3 sm:mx-4 relative z-10 shadow-md h-[140px] sm:h-[150px] md:h-[160px] lg:h-[180px]">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden shadow-md absolute -top-8 sm:-top-10 left-3 sm:left-4 border-4 border-white bg-white">
                    <img src={props.property_images && props.property_images.length > 0 ? props.property_images[0] : icon1} alt="logo" className="w-full h-full" />
                  </div>
                  <div className="pl-16 sm:pl-20 h-full flex flex-col justify-between">
                    <div>
                      <h3 className="text-base sm:text-lg font-semibold text-gray-800 line-clamp-1">{props.address || props.location}</h3>
                      <p className="text-xs sm:text-sm text-gray-500 mt-1 line-clamp-2">{props.additional_detail || ''}</p>
                    </div>
                    <p className="text-sm sm:text-base font-bold text-indigo-700 mt-2">₹ {props.price}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      )}
    </div>
  );
};

export default ResidentialSlider;
