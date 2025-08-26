import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import icon1 from "../assets/asset1.jpg";
import { useNavigate } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { getResidentialProjectList } from "../Api/services/propertyServices";

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
  const { data: projects, loading } = useFetch(getResidentialProjectList);

  let displayprojects = projects || [];

  // Dynamically adjust slidesToShow for slick
  const slidesToShow = displayprojects.length < 3 ? displayprojects.length : 3;

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow,
    slidesToScroll: 1,
    nextArrow:
      displayprojects.length > slidesToShow ? (
        <CustomArrow direction="right" />
      ) : null,
    prevArrow:
      displayprojects.length > slidesToShow ? (
        <CustomArrow direction="left" />
      ) : null,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: Math.min(displayprojects.length, 2),
          infinite: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: Math.min(displayprojects.length, 1),
          infinite: false,
        },
      },
    ],
  };

  const renderCard = (project, index) => (
    <div
      key={index}
      onClick={() =>
        navigate(`/project/${project.residential_id}`, {
          state: { property: project },
        })
      }
    >
      <div className="rounded-xl overflow-hidden shadow-md relative w-[300px] sm:w-[350px] md:w-[380px] lg:w-[400px] h-[280px] sm:h-[300px] md:h-[330px] lg:h-[350px] mx-auto">
        <img
          src={
            project.residential_images && project.residential_images.length > 0
              ? project.residential_images[0]
              : project.owner_image || icon1
          }
          alt={project.residential_name}
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
            <img
              src={project.owner_image || icon1}
              alt="logo"
              className="w-full h-full"
            />
          </div>
          <div className="pl-16 sm:pl-20 h-full flex flex-col justify-between">
            <div>
              <h3 className="text-base sm:text-lg font-semibold text-gray-800 line-clamp-1">
                {project.residential_name}
              </h3>
              <p className="text-xs sm:text-sm text-gray-500 mt-1 line-clamp-2">
                {project.residential_address}
              </p>
            </div>
            <p className="text-sm sm:text-base font-bold text-indigo-700 mt-2">
              {project.category_name}
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="px-4 bg-white md:px-10 text-left pb-10">
      <h2 className="text-3xl font-bold text-gray-800 mb-2 pt-10">
        Handpicked Residential Projects
      </h2>
      <p className="text-gray-500 mb-6 pb-10">
        Featured Residential projects across India
      </p>

      {loading ? (
        <div className="text-center py-10">Loading...</div>
      ) : displayprojects.length < 3 ? (
        // FLEX layout for 1–2 projects
        <div className="flex justify-center gap-4 flex-wrap">
          {displayprojects.map((project, index) => renderCard(project, index))}
        </div>
      ) : (
        // Slider layout for 3+ projects
        <Slider {...settings}>
          {displayprojects.map((project, index) => (
            <div key={index} className="px-2">
              {renderCard(project, index)}
            </div>
          ))}
        </Slider>
      )}
    </div>
  );
};

export default ResidentialSlider;
