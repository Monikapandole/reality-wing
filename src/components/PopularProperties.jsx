import React from "react";
import Slider from "react-slick";
import PropertyCard from "./PropertyCard";
import icon1 from "../assets/asset1.jpg";
import icon2 from "../assets/asset1.jpg";
import icon3 from "../assets/asset3.jpg";
import icon4 from "../assets/asset5.jpg";
import icon5 from "../assets/asset6.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const properties = [
  {
    image: icon1,
    bhk: "1 BHK Flat",
    price: "7,000",
    area: "1000",
    location: "Indrapuri Colony, Indore",
    images: 4,
  },
  {
    image: icon2,
    bhk: "5 BHK Flat",
    price: "1.3 Lac",
    area: "4850",
    location: "Nipania, Indore",
    images: 24,
  },
  {
    image: icon3,
    bhk: "1 BHK Flat",
    price: "16,500",
    area: "600",
    location: "Bengali Square, Indore",
    images: 8,
  },
  {
    image: icon4,
    bhk: "2 BHK Flat",
    price: "15,000",
    area: "1000",
    location: "Indore",
    images: 13,
  },
  {
    image: icon5,
    bhk: "2 BHK Flat",
    price: "15,000",
    area: "1000",
    location: "Indore",
    images: 13,
  },
];

const sliderSettings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const PopularProperties = () => {
  return (
    <section className="p-6 text-left">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold">Popular Owner Properties</h2>
        <a href="/" className="text-red-600 font-semibold hover:underline">
          See all Properties →
        </a>
      </div>

      {/* Mobile & Tablet - Slider */}
      <div className="lg:hidden">
        <Slider {...sliderSettings}>
          {properties.map((prop, index) => (
            <div key={index} >
              <PropertyCard {...prop} />
            </div>
          ))}
        </Slider>
      </div>

      {/* Desktop - Grid */}
      <div className="hidden lg:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        {properties.map((prop, index) => (
          <PropertyCard key={index} {...prop} />
        ))}
      </div>
    </section>
  );
};

export default PopularProperties;
