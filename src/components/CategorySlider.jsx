import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";
import { fetchCategories } from "../redux/actions/categoryActions";
import { useDispatch, useSelector } from 'react-redux';




const CategorySlider = () => {
  const navigate = useNavigate();
  const categories = useSelector((state) => state?.categories?.categories || []);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());

  }, [dispatch]);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
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

  const handleClick = (slug, image, id) => {
    navigate(`/category/${id}`, { state: { image } });
  }
  return (
    <div className="px-4 md:px-10 py-8">
      <h2 className="text-2xl font-bold mb-6">Explore Our Category</h2>
      <Slider {...settings}>
        {[...categories, ...categories, ...categories].map((cat, index) => (
          <div key={index} className="px-2 mt-[30px]" onClick={() => handleClick(cat.category_name, cat.category_image, cat.id)}>
            <div className="flex flex-col items-center text-center">
              {cat.slug && (
                <span className="bg-orange-100 text-sm font-semibold text-gray-700 px-3 py-1 rounded-full mb-2">
                  {cat.slug.split("").length > 15
                    ? cat.slug.split("").slice(0, 15).join("") + "..."
                    : cat.slug}
                </span>
              )}
              <div className="flex flex-col items-center">
                <div className=" flex items-center justify-center mx-auto">
                  <img
                    src={cat.category_image}
                    alt={cat.category_name}
                    className="w-36 h-36 rounded-full "
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CategorySlider;
