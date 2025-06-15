import React from 'react'
import CategorySlider from '../components/CategorySlider'
// import FlashDeals from '../components/FlashDeals'
import asset1 from '../assets/asset1.jpg'
import asset3 from '../assets/asset3.jpg'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ResidentialSlider from '../components/ResidentialSlider'
import UpcomingProjectsSlider from '../components/UpcomingProjectsSlider'
// import RentingAdviceTabs from '../components/RentingAdviceTabs'
import TopCities from '../components/TopCitiesGrid'
// import SellerCarousel from '../components/SellerCard';
import PopularProperties from '../components/PopularProperties';
import Footer from '../components/Footer';
function Home() {
  const slides = [
    {
      bgColor: "#D6AD92",
      offer: "Up to 30% off",
      title: "Luxury Apartment",
      subtitle: "2 Bedrooms, 1 Bath",
      tag: "Fully Furnished",
      buttonText: "BOOK NOW",
      image: asset3, 
    },
    {
      bgColor: "#A1C1D1",
      offer: "New Listing",
      title: "Cozy Studio",
      subtitle: "Perfect for Singles",
      tag: "Available Now",
      buttonText: "EXPLORE",
      image: asset3, 
    },
    {
      bgColor: "#F9C5D1",
      offer: "Limited Time",
      title: "Beachfront Villa",
      subtitle: "Private Pool & Ocean View",
      tag: "Weekend Getaway",
      buttonText: "BOOK NOW",
      image: asset3, 
    },
  ];

  const settings = {
    infinite: true,
    autoplay: false,
    autoplaySpeed: 2000,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false
  };
  return (
    <div className="w-full bg-white overflow-hidden font-inter">
      <div className="grid grid-cols-1 ipad-pro:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3">
        <Slider {...settings} className="w-full col-span-1 lg:col-span-2 ">
          {slides.map((slide, index) => (
            <div key={index}>
              <div
                className="p-6 flex flex-col xl:justify-center text-left  md:justify-center justify-start relative h-[32.6rem]"
                style={{ backgroundColor: slide.bgColor }}
              >
                <div className="max-w-md space-y-2 z-10">
                  <p className="text-white text-lg">{slide.offer}</p>
                  <h1 className="text-white xl:text-[40px] md:text-[40px] text-[25px] font-bold">
                    {slide.title}<br />
                    {slide.subtitle}<br />
                    <span className="text-[20px] tracking-widest">{slide.tag}</span>
                  </h1>
                  <button className="bg-white text-black px-5 py-2 mt-4 text-[18px] font-semibold rounded">
                    {slide.buttonText}
                  </button>
                </div>
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="absolute xl:right-4 md:right-4 right-0 bottom-0 max-h-[350px] object-contain"
                />
              </div>
            </div>
          ))}
        </Slider>

        {/* RIGHT: Smaller stacked banners */}
        <div className="flex flex-col">
          {/* Top Banner */}
          <div className="bg-gray-100 p-[3.8rem]  flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold text-gray-500">LIMITED TIME OFFER</p>
              <h2 className="text-xl font-bold mb-1">Luxury Apartments<br />Up to 30% off</h2>
              <p className="text-sm text-gray-600">Book your dream home today</p>
              <button className="border border-black px-4 py-1 mt-3 text-sm">BOOK NOW</button>
            </div>
            <img
              src={asset1} // Replace with apartment image
              alt="Luxury Apartment"
              className="w-28 h-28 object-cover"
            />
          </div>

          {/* Bottom Banner */}
          <div className="bg-[#F6F6F6] p-[3.8rem] relative flex items-center justify-between border-t-2 border-gray-300">
            <div>
              <p className="text-xs font-semibold text-gray-500">NEW LISTING</p>
              <h2 className="text-xl font-bold mb-1">Cozy Studio<br />Available Now</h2>
              <p className="text-sm text-gray-600">Perfect for singles or couples</p>
              <button className="border border-black px-4 py-1 mt-3 text-sm">EXPLORE</button>
            </div>
            <img
              src={asset3} // Replace with studio image
              alt="Cozy Studio"
              className="w-32 h-32 object-cover"
            />
            <span className="absolute top-2 right-2 bg-red-600 text-white text-sm font-bold px-2 py-1 rounded-full">$799/mo</span>
          </div>
        </div>

      </div>
      <CategorySlider />
      <TopCities />
      <ResidentialSlider />
      <UpcomingProjectsSlider />
      <PopularProperties/>
      {/* <RentingAdviceTabs /> */}
      {/* <SellerCarousel/> */}
      <Footer/>

    </div>
  )
}

export default Home
