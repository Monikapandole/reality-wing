import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import images from the assets folder (adjust path as necessary)
import icon1 from "../assets/asset1.jpg";
import icon2 from "../assets/asset2.jpg";
import icon3 from "../assets/asset3.jpg";
import icon4 from "../assets/asset5.jpg";
import icon5 from "../assets/asset6.jpg";
import icon6 from "../assets/asset7.jpg";

const categories = [
  { name: "Packers & Movers", img: icon1, tag: "Lowest Price" },
  { name: "Pay rent", img: icon2, tag: "New Offers" },
  { name: "Rental Agreement", img: icon3, tag: "Flat 30% off" },
  { name: "Click & Earn", img: icon4 ,tag: "Flat 30% off" },
  { name: "Painting & Cleaning", img: icon1, tag: "New" },
  { name: "NoBroker For NRIs", img: icon5 ,tag: "new deal" },
  { name: "Furnished home", img: icon6 ,tag: "new deal" },

];

const CategorySlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 4 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 2 },
      },
    ],
  };

  return (
    <div className="px-4 md:px-10 py-8">
      <h2 className="text-2xl font-bold mb-6">Explore Our Services</h2>
      <Slider {...settings}>
        {categories.map((cat, index) => (
          <div key={index} className="px-2">
            <div className="flex flex-col items-center text-center">
              {cat.tag && (
                <span className="bg-orange-100 text-sm font-semibold text-gray-700 px-3 py-1 rounded-full mb-2">
                  {cat.tag}
                </span>
              )}
             <div className="flex flex-col items-center">
              <div className=" flex items-center justify-center mx-auto">
                <img
                  src={cat.img}
                  alt={cat.name}
                  className="w-36 h-36 rounded-full "
                />
              </div>
              <p className="text-md font-medium mt-2 text-center">{cat.name}</p>
            </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CategorySlider;
