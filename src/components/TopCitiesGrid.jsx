import React, { useEffect, useMemo, useState } from "react";
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
const chunkArray = (arr, size) => {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
};

const CityCard = ({ city }) => (
  <div className="flex items-center justify-center gap-4">
    <img
      src={city.image}
      alt={city.name}
      className="rounded-lg w-24 h-24 object-cover"
    />
    <div>
      <h4 className="font-bold text-lg text-[#0A1431]">{city.name}</h4>
      <p className="text-gray-500 font-medium text-base">{city.properties}</p>
    </div>
  </div>
);

const TopCities = () => {
  const indoreAreas = useMemo(() => [
    { name: "Vijay Nagar", properties: "5,200+ Properties", image: icon1 },
    { name: "Palasia", properties: "3,800+ Properties", image: icon2 },
    { name: "Bhawarkua", properties: "2,900+ Properties", image: icon3 },
    { name: "Rau", properties: "1,800+ Properties", image: icon4 },
    { name: "Scheme No. 78", properties: "2,500+ Properties", image: icon5 },
    { name: "Bengali Square", properties: "2,000+ Properties", image: icon1 },
    { name: "MR 10 / MR 11", properties: "1,600+ Properties", image: icon2 },
    { name: "Khajrana", properties: "1,900+ Properties", image: icon3 },
    { name: "Tilak Nagar", properties: "1,700+ Properties", image: icon4 },
    { name: "Kanadia Road", properties: "2,200+ Properties", image: icon5 },
    { name: "LIG Colony", properties: "1,400+ Properties", image: icon1 },
    { name: "South Tukoganj", properties: "1,600+ Properties", image: icon2 },
    { name: "Rajendra Nagar", properties: "1,300+ Properties", image: icon3 },
    { name: "Navlakha", properties: "1,500+ Properties", image: icon4 },
    { name: "Musakhedi", properties: "1,100+ Properties", image: icon5 },
    { name: "Pipliyahana", properties: "1,750+ Properties", image: icon1 },
  ], []);
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    const width = window.innerWidth;
    let itemsPerSlide = 8;

    if (width < 768) {
      itemsPerSlide = 2;
    } else if (width < 1024) {
      itemsPerSlide = 2;
    }

    const chunks = chunkArray(indoreAreas, itemsPerSlide);
   
    setSlides(chunks);
  }, [indoreAreas]);


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
    infinite: true, // Infinite scroll
    speed: 500,
    slidesToShow: 1, // Only 1 slide at a time
    slidesToScroll: 1,
    nextArrow: <CustomArrow direction="right" />,
    prevArrow: <CustomArrow direction="left" />,
   
  };

  return (
    <section className="py-10 px-4 bg-white px-4 md:px-10 py-8 pt-[4rem] text-left">
      <h3 className="text-gray-500 font-semibold text-sm uppercase mb-2">
        Top Cities
      </h3>
      <h2 className="xl:text-4xl md:text-4xl text-2xl font-extrabold text-[#0A1431] mb-8">
        Explore Real Estate in Popular Indian Cities
      </h2>
      <div className="relative">
      <Slider {...settings}>
      {slides.map((group, idx) => (
        <div key={idx} className="px-2">
          <div className={`grid gap-4
            ${group.length === 8 ? 'md:grid-cols-4 grid-cols-1 ipad-pro:grid-cols-4' : 'grid-cols-1 ipad-pro:grid-cols-2'}
          `}>
            {group.map((city, index) => (
              <CityCard key={index} city={city} />
            ))}
          </div>
        </div>
      ))}
    </Slider>
      </div>
    </section>
  );
};

export default TopCities;
