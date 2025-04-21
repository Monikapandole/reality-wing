import React, { useState } from "react";
import icon4 from "../assets/asset8.jpg";
import icon5 from "../assets/asset9.jpg";
import icon6 from "../assets/asset1.jpg";
import icon3 from "../assets/asset3.jpg";
import heroImage from "../assets/asset2.jpg";

const TABS = ["News", "Tax & Legal", "Help Guides", "Investment"];

const tabData = {
  News: [
    {
      title: "Emerald Court asks bachelor tenants to vacate",
      date: "Dec 07, 2022",
      image: icon4,
    },
    {
      title: "Rental units to get UID number in Ludhiana",
      date: "Oct 28, 2022",
      image: icon5,
    },
    {
      title: "New GST rule on housing explained",
      date: "Sep 21, 2022",
      image: icon6,
    },
    {
      title: "Noida: New e-rent system on the way",
      date: "Sep 19, 2022",
      image: icon3,
    },
  ],
  "Tax & Legal": [],
  "Help Guides": [],
  Investment: [],
};

const RentingAdviceTabs = () => {
  const [activeTab, setActiveTab] = useState("News");

  return (
    <div className="relative">
      {/* Top Section */}
      <div className="bg-white rounded-2xl p-6 mt-10 ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left image */}
          <img
            src={heroImage}
            alt="Hero"
            className="rounded-2xl w-full h-full object-cover"
          />

          {/* Right content */}
          <div className="flex flex-col justify-center text-left">
            <p className="text-sm font-semibold text-gray-500 uppercase mb-1">
              Rent a Home
            </p>
            <h2 className="text-2xl font-bold text-[#031B4E] mb-2">
              Rental Homes for Everyone
            </h2>
            <p className="text-gray-600 mb-4">
              Explore from Apartments, builder floors, villas and more
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-md w-fit">
              Explore Renting
            </button>
          </div>
        </div>
      </div>

      {/* Floating Advice Box */}
      <div className="absolute left-[65%] text-left transform -translate-x-1/2 -bottom-20 w-full max-w-6xl p-6 bg-white shadow-lg rounded-xl z-10 border border-gray-200">
      <div className="flex flex-col md:flex-row md:justify-between mb-4">
          <div>
            <h3 className="text-xl font-bold text-[#031B4E]">
              Best Renting Advice by Our Top Editors
            </h3>
            <p className="text-sm text-gray-500 mt-1">
              Read from Beginners check-list to Pro Tips
            </p>
          </div>

          {/* Tabs */}
          <div className="flex space-x-6 border-b border-gray-200 text-sm mt-4 md:mt-0">
            {TABS.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-2 ${
                  activeTab === tab
                    ? "text-[#031B4E] font-semibold border-b-2 border-blue-600"
                    : "text-gray-500 hover:text-[#031B4E]"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Articles */}
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          {tabData[activeTab]?.map((article, idx) => (
            <div key={idx} className="flex items-start space-x-4">
              <img
                src={article.image}
                alt={article.title}
                className="w-20 h-20 object-cover rounded-lg flex-shrink-0"
              />
              <div>
                <h4 className="text-sm font-semibold text-[#031B4E] leading-snug">
                  {article.title}
                </h4>
                <p className="text-xs text-gray-500 mt-1">{article.date}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Read More */}
        <div className="text-sm text-blue-600 mt-4 font-medium hover:underline cursor-pointer">
          Read realty news, guides & articles →
        </div>
      </div>

      {/* Push down content below the floating box */}
      <div className="h-44" />
    </div>
  );
};

export default RentingAdviceTabs;
