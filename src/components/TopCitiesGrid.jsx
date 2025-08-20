import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchAreas } from "../redux/actions/areaAction";

const chunkArray = (arr, size) => {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
};

const CityCard = ({ city, navigate }) => (
  <div
    className="flex items-center gap-4 p-4 cursor-pointer hover:bg-gray-100 rounded-lg transition-colors h-[120px]"
    onClick={() => navigate(`/area/${city.id}`)}
  >
    <img
      src={city.image}
      alt={city.name}
      className="rounded-lg w-24 h-24 object-cover flex-shrink-0"
    />
    <div className="flex flex-col justify-center flex-1 min-h-[80px]">
      <h4 className="font-bold text-lg text-[#0A1431] line-clamp-1">{city.name}</h4>
      <p className="text-gray-500 font-medium text-base line-clamp-1">{city.properties}</p>
    </div>
  </div>
);

const TopCities = () => {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0); // 👈 track current slide
  const areas = useSelector((state) => state.area.areas || []);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAreas());
  }, [dispatch]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const CustomArrow = ({ style, onClick, currentSlide, slideCount, direction }) => {
    const isLeft = direction === "left";
    const isDisabled = isLeft ? currentSlide === 0 : currentSlide === slideCount - 1;

    if (isDisabled) return null;

    return (
      <div
        className={`absolute top-1/2 transform -translate-y-1/2 z-10 bg-white shadow p-2 rounded-full cursor-pointer ${isLeft ? "left-0" : "right-0"
          }`}
        onClick={onClick}
        style={{ ...style }}
      >
        {isLeft ? <FaChevronLeft /> : <FaChevronRight />}
      </div>
    );
  };

  const mobileChunks = chunkArray(areas, 2); // 2 per slide
  const desktopChunks = chunkArray(areas, 8); // 8 per slide (4×2 grid)
  const slides = isMobile ? mobileChunks : desktopChunks;

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <CustomArrow direction="right" />,
    prevArrow: <CustomArrow direction="left" />,
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex), // 👈 update index
  };

  const showSlider = areas.length > 8;
  const isLastSlide = currentSlide === slides.length - 1; // 👈 check last slide

  return (
    <section className="py-10 px-4 bg-white md:px-10 pt-[4rem] text-left relative">
      <h3 className="text-gray-500 font-semibold text-sm uppercase mb-2">Top Cities</h3>
      <h2 className="xl:text-4xl md:text-4xl text-2xl font-extrabold text-[#0A1431] mb-8">
        Explore Real Estate in Popular Areas
      </h2>

      {showSlider ? (
        <div className="relative">
          <Slider {...settings}>
            {isMobile
              ? mobileChunks.map((group, idx) => (
                <div key={idx} className="px-2">
                  <div className="grid grid-cols-1 gap-4">
                    {group.map((city, index) => (
                      <CityCard key={index} city={city} navigate={navigate} />
                    ))}
                  </div>
                </div>
              ))
              : desktopChunks.map((group, idx) => (
                <div key={idx} className="px-2">
                  <div className="grid grid-cols-4 gap-4">
                    {group.map((city, index) => (
                      <CityCard key={index} city={city} navigate={navigate} />
                    ))}
                  </div>
                </div>
              ))}
          </Slider>

          {/* Swipe hint 👇 only show if not last slide */}
          {!isLastSlide && (
            <div className="absolute right-0 top-0 h-full flex items-center pr-4 pointer-events-none">
              <div className="flex items-center gap-2 text-gray-500 text-sm bg-white/80 px-5 py-1 rounded-full shadow">
                <span>Swipe for more</span>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {areas.map((city, index) => (
            <CityCard key={index} city={city} navigate={navigate} />
          ))}
        </div>
      )}
    </section>
  );
};

export default TopCities;
