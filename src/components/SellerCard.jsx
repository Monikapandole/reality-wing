import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import icon1 from "../assets/asset1.jpg";
import icon2 from "../assets/asset1.jpg";
import icon3 from "../assets/asset3.jpg";
import icon4 from "../assets/asset5.jpg";
import icon5 from "../assets/asset6.jpg";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const sellers = [
  {
    name: "Yadav Homes Pvt Ltd",
    expert: "PRO",
    locations: ["Freedom Fighters Enclave", "Saket"],
    experience: "13 years",
    properties: 45,
    avatar: icon1,
  },
  {
    name: "SHIV ASSOCIATES",
    expert: "PRO",
    locations: ["Sarita Vihar", "Jasola"],
    experience: "14 years",
    properties: 50,
    avatar: icon2,
  },
  {
    name: "AMAN PROPERTIES ROHINI",
    expert: "PRO",
    locations: ["Sector 24 Rohini", "Sector 23 Rohini"],
    experience: "15 years",
    properties: 59,
    avatar: icon3,
  },
  {
    name: "Yadav Homes Pvt Ltd",
    expert: "PRO",
    locations: ["Freedom Fighters Enclave", "Saket"],
    experience: "13 years",
    properties: 45,
    avatar: icon4,
  },
  {
    name: "SHIV ASSOCIATES",
    expert: "PRO",
    locations: ["Sarita Vihar", "Jasola"],
    experience: "14 years",
    properties: 50,
    avatar: icon5,
  },
  {
    name: "AMAN PROPERTIES ROHINI",
    expert: "PRO",
    locations: ["Sector 24 Rohini", "Sector 23 Rohini"],
    experience: "15 years",
    properties: 59,
    avatar: icon3,
  },
];

const SellerCard = ({ seller }) => {
  return (
    <div className="min-w-[280px] max-w-xs bg-white border rounded-xl shadow-sm p-4 mx-2">
      <div className="flex items-center mb-2">
        <img src={seller.avatar} alt={seller.name} className="w-8 h-8 rounded-full mr-2" />
        <span className="font-semibold">{seller.name}</span>
      </div>
      <span className={`text-white text-xs font-bold px-2 py-1 rounded ${
        seller.expert === "PRO" ? "bg-orange-500" : "bg-yellow-400"
      }`}>
        HOUSING EXPERT {seller.expert}
      </span>
      <div className="flex flex-wrap gap-2 mt-3">
        {seller.locations.map((loc) => (
          <span key={loc} className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full">
            {loc}
          </span>
        ))}
      </div>
      <div className="text-sm mt-4">
        <span className="font-bold">{seller.experience}</span> Experience
        <br />
        <span className="font-bold">{seller.properties}</span> Properties
      </div>
    </div>
  );
};
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
const SellerCarousel = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <CustomArrow direction="right" />,
    prevArrow: <CustomArrow direction="left" />,
  };

  return (
    <div className="bg-gray-50 py-8 px-4 text-left">
      <h2 className="text-2xl font-bold">Recommended sellers</h2>
      <p className="text-gray-500 mb-4">Top brokers and agents</p>

      <div className="relative">
        <Slider {...settings}>
          {sellers.map((seller, idx) => (
            <SellerCard key={idx} seller={seller} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default SellerCarousel;
