import React from "react";
import PropertyCard from "./PropertyCard";
import icon1 from "../assets/asset1.jpg";
import icon2 from "../assets/asset2.jpg";
import icon3 from "../assets/asset3.jpg";
import icon4 from "../assets/asset5.jpg";
import icon5 from "../assets/asset6.jpg";

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
    image:icon4,
    bhk: "2 BHK Flat",
    price: "15,000",
    area: "1000",
    location: "Indore",
    images: 13,
  },
  {
    image:icon5,
    bhk: "2 BHK Flat",
    price: "15,000",
    area: "1000",
    location: "Indore",
    images: 13,
  },
 
];

const PopularProperties = () => {
  return (
    <section className="p-6 text-left">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold">Popular Owner Properties</h2>
        <a href="/" className="text-red-600 font-semibold hover:underline">
          See all Properties →
        </a>
      </div>
      <div className="flex space-x-8 overflow-x-auto p-4">
        {properties.map((prop, index) => (
          <PropertyCard key={index} {...prop} />
        ))}
      </div>
    </section>
  );
};

export default PopularProperties;
