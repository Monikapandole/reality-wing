import React, { useEffect, useMemo, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";
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
    onClick={() => navigate(`/area/${city.id}`)}  >
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
  const areas = useSelector((state) => state.area.areas || []);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAreas());

  }, [dispatch]);
  useEffect(() => {
    console.log(areas, "areas on use")
  }, [areas])
  // const indoreAreas = useMemo(() => [
  //   { name: "Vijay Nagar", properties: "5,200+ Properties", image: icon1 },
  //   { name: "Palasia", properties: "3,800+ Properties", image: icon2 },
  //   { name: "Bhawarkua", properties: "2,900+ Properties", image: icon2 },
  //   { name: "Rau", properties: "1,800+ Properties", image: icon4 },
  //   { name: "Scheme No. 78", properties: "2,500+ Properties", image: icon5 },
  //   { name: "Bengali Square", properties: "2,000+ Properties", image: icon1 },
  //   { name: "MR 10 / MR 11", properties: "1,600+ Properties", image: icon2 },
  //   { name: "Khajrana", properties: "1,900+ Properties", image: icon2 },
  // ], []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Tailwind 'md' breakpoint
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize); // Listen for resize
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const CustomArrow = ({ onClick, direction }) => (
    <div
      className={`absolute top-1/2 transform -translate-y-1/2 z-10 bg-white shadow p-2 rounded-full cursor-pointer ${direction === "left" ? "left-0" : "right-0"
        }`}
      onClick={onClick}
    >
      {direction === "left" ? <FaChevronLeft /> : <FaChevronRight />}
    </div>
  );

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <CustomArrow direction="right" />,
    prevArrow: <CustomArrow direction="left" />,
  };

  const mobileChunks = chunkArray(areas, 2); // 4 cities per slide (2 rows of 2)

  return (
    <section className="py-10 px-4 bg-white md:px-10 pt-[4rem] text-left">
      <h3 className="text-gray-500 font-semibold text-sm uppercase mb-2">Top Cities</h3>
      <h2 className="xl:text-4xl md:text-4xl text-2xl font-extrabold text-[#0A1431] mb-8">
        Explore Real Estate in Popular Areas
      </h2>

      {isMobile ? (
        <div className="relative">
          <Slider {...settings}>
            {mobileChunks.map((group, idx) => (
              <div key={idx} className="px-2">
                <div className="grid grid-cols-1 gap-4">
                  {group.map((city, index) => (
                    <CityCard key={index} city={city} navigate={navigate} />
                  ))}
                </div>
              </div>
            ))}
          </Slider>
        </div>
      ) : (
        <div className="grid grid-cols-4 gap-4">
          {areas.map((city, index) => (
            <CityCard key={index} city={city} navigate={navigate} />
          ))}
        </div>
      )}
    </section>
  );
};


export default TopCities;
