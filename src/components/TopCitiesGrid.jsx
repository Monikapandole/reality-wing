import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronRight } from "react-icons/fa";
import icon1 from "../assets/delhi.jpeg";
import icon2 from "../assets/agra.jpeg";
import icon3 from "../assets/ahemdabaad.jpg";
import icon4 from "../assets/jaipur-india.jpg";
import icon5 from "../assets/mumbai.jpg";
import { FaChevronLeft } from "react-icons/fa";

const TopCities = () => {
  const cities = [
    { name: "Delhi / NCR", properties: "202,000+ Properties", image: icon1 },
    { name: "Mumbai", properties: "58,000+ Properties", image: icon2 },
    { name: "Bangalore", properties: "56,000+ Properties", image: icon3 },
    { name: "Hyderabad", properties: "29,000+ Properties", image: icon4 },
    { name: "Pune", properties: "57,000+ Properties", image: icon5 },
    { name: "Kolkata", properties: "35,000+ Properties", image: icon1 },
    { name: "Chennai", properties: "38,000+ Properties", image: icon2 },
    { name: "Ahmedabad", properties: "30,000+ Properties", image: icon3 },
    { name: "Surat", properties: "40,000+ Properties", image: icon4 },
    { name: "Vadodara", properties: "25,000+ Properties", image: icon5 },
    { name: "Nagpur", properties: "15,000+ Properties", image: icon1 },
    { name: "Indore", properties: "20,000+ Properties", image: icon2 },
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
  const settings = {
    dots: false,
    infinite: true, // Infinite scroll
    speed: 500,
    slidesToShow: 1, // Only 1 slide at a time
    slidesToScroll: 1,
    nextArrow: <CustomArrow direction="right" />,
    prevArrow: <CustomArrow direction="left" />,
   
  };

  return (
    <section className="py-10 px-4 bg-white px-4 md:px-10 py-8 pt-[9rem] text-left">
      <h3 className="text-gray-500 font-semibold text-sm uppercase mb-2">
        Top Cities
      </h3>
      <h2 className="text-4xl font-extrabold text-[#0A1431] mb-8">
        Explore Real Estate in Popular Indian Cities
      </h2>
      <div className="relative">
        <Slider {...settings}>
          {/* Single slide with two rows of 4 cities each */}
          <div className="px-2">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {/* Row 1 */}
              {cities.slice(0, 4).map((city, idx) => (
                <div key={idx} className="flex items-center gap-4">
                  <img
                    src={city.image}
                    alt={city.name}
                    className="rounded-lg w-24 h-24 object-cover"
                  />
                  <div>
                    <h4 className="font-bold text-lg text-[#0A1431]">{city.name}</h4>
                    <p className="text-gray-500 font-medium text-base">
                      {city.properties}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
              {cities.slice(4, 8).map((city, idx) => (
                <div key={idx} className="flex items-center gap-4">
                  <img
                    src={city.image}
                    alt={city.name}
                    className="rounded-lg w-24 h-24 object-cover"
                  />
                  <div>
                    <h4 className="font-bold text-lg text-[#0A1431]">{city.name}</h4>
                    <p className="text-gray-500 font-medium text-base">
                      {city.properties}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Another slide with next 8 cities */}
          <div className="px-2">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {/* Row 1 */}
              {cities.slice(8, 12).map((city, idx) => (
                <div key={idx} className="flex items-center gap-4">
                  <img
                    src={city.image}
                    alt={city.name}
                    className="rounded-lg w-24 h-24 object-cover"
                  />
                  <div>
                    <h4 className="font-bold text-lg text-[#0A1431]">{city.name}</h4>
                    <p className="text-gray-500 font-medium text-base">
                      {city.properties}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
            {cities.slice(4, 8).map((city, idx) => (
                <div key={idx} className="flex items-center gap-4">
                  <img
                    src={city.image}
                    alt={city.name}
                    className="rounded-lg w-24 h-24 object-cover"
                  />
                  <div>
                    <h4 className="font-bold text-lg text-[#0A1431]">{city.name}</h4>
                    <p className="text-gray-500 font-medium text-base">
                      {city.properties}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Slider>
       
      </div>
    </section>
  );
};

export default TopCities;
