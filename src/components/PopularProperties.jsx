import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Slider from "react-slick";
import PropertyCard from "./PropertyCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { getPropertiesList } from "../Api/services/propertyServices";
import { fetchCategories } from "../redux/actions/categoryActions";
import { setProperties as setReduxProperties } from "../redux/Slice/propertySlice";

const sliderSettings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
    slidesToScroll: 1,
    
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 4 },
      },
       {
        breakpoint: 1350,
        settings: { slidesToShow: 4 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 },
      },
    ],
};

const PopularProperties = () => {
  const [properties, setProperties] = useState([]);
  const dispatch = useDispatch();
  const { categories, loading: categoriesLoading } = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  useEffect(() => {
    const fetchProperties = async () => {
      if (!categoriesLoading && categories.length > 0) {
        try {
          const propertiesData = await getPropertiesList();
          if (propertiesData) {
            dispatch(setReduxProperties(propertiesData));
            setProperties(propertiesData);
          }
        } catch (error) {
          console.error("Failed to fetch properties:", error);
        }
      }
    };

    fetchProperties();
  }, [categories, categoriesLoading, dispatch]);

  return (
    <section className="p-6 text-left mb-12">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold">Popular Owner Properties</h2>
        <a href={`/category/All-Property`} className="text-red-600 font-semibold hover:underline">
          See all Properties →
        </a>
      </div>

      <div >
        <Slider {...sliderSettings}>
          {properties.map((prop, index) => {
            const category = categories.find((c) => c.id === prop.category_id);
            const formattedProp = {
              id: prop.id,
              image: prop.property_images && prop.property_images.length > 0 ? prop.property_images[0] : "default-image-url.jpg",
              bhk: `${prop.number_of_rooms} BHK Flat`,
              price: prop.rent_amount,
              area: prop.area_sqft,
              location: prop.address,
              images: prop.property_images ? prop.property_images.length : 0,
              name: category ? category.category_name : "Uncategorized",
            };
            return (
              <div key={index} >
                <PropertyCard {...formattedProp} prop={prop} />
              </div>
            );
          })}
        </Slider>
      </div>
    </section>
  );
};

export default PopularProperties;
