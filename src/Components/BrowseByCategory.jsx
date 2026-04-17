import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import axios from "axios";
import "../CSS/categories.css";

import img1 from "../assets/category (1).svg";
import img2 from "../assets/category (2).svg";
import img3 from "../assets/category (3).svg";
import img4 from "../assets/category (4).svg";
import img5 from "../assets/category (5).svg";
import img6 from "../assets/category (6).svg";

const BrowseByCategory = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const API_URL = "http://localhost:3000/api/categories"; 
  const fetchCategories = async () => {
    try {
      const response = await axios.get(API_URL);
      setCategories(response.data.data);

    } catch (error) {
      console.log("Error loading categories", error);
      // fallback data
      setCategories([
        { name: "Phones", image: img1 },
        { name: "Computers", image: img2 },
        { name: "SmartWatch", image: img3 },
        { name: "Camera", image: img4 },
        { name: "HeadPhones", image: img5 },
        { name: "SmartWatch", image: img3 },
        { name: "Gaming", image: img6 },
      ]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div className="browse-category container text-start">
     <div className="d-flex justify-content-between align-items-center mb-3 w-100">
             <div className="d-flex flex-column">
               <p className="cat-label mb-1">categories</p>
               <h2 className="fw-bold mb-0">Browse By Category</h2>
             </div>
     
             <div className="d-flex gap-2">
               <button ref={prevRef} className="arrow-btn"><FaArrowLeft /></button>
              <button ref={nextRef} className="arrow-btn"><FaArrowRight /></button>
             </div>
           </div>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <Swiper
          slidesPerView={5}
          breakpoints={{
            320: { slidesPerView: 1.5, spaceBetween: 10 },
            540: { slidesPerView:2.5 , spaceBetween: 15 },
            768: { slidesPerView: 3, spaceBetween: 20 },
            992: { slidesPerView: 5, spaceBetween: 20 },
            1200: { slidesPerView: 6, spaceBetween: 20 },
          }}
          modules={[Navigation]}
          onInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
          className="category-slider"
        >
          {categories.map((cat) => (
            <SwiperSlide key={cat.name} className="slide">
              <div className="category-card">
                <img src={cat.image} alt={cat.name} className="icon-img" />
                <span className="name">{cat.name}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
};

export default BrowseByCategory;
