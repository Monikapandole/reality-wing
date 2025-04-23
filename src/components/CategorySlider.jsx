import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import icon1 from "../assets/asset1.jpg";
import icon2 from "../assets/asset1.jpg";
import icon3 from "../assets/asset3.jpg";
import icon4 from "../assets/asset5.jpg";
import icon5 from "../assets/asset6.jpg";
import icon6 from "../assets/asset7.jpg";
import { useNavigate } from "react-router-dom";

const categories = [
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


const CategorySlider = () => {
  const navigate = useNavigate();

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

const handleClick=(slug,image)=>{
  navigate(`/category/${slug}`, { state: { image } });
}
  return (
    <div className="px-4 md:px-10 py-8 font-rubik">
      <h2 className="text-2xl font-bold mb-6">Explore Our Category</h2>
      <Slider {...settings}>
        {categories.map((cat, index) => (
          <div key={index} className="px-2 mt-[30px]" onClick={()=>handleClick(cat.slug,cat.img)}>
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
