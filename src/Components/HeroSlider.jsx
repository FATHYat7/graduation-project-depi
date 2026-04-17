import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import '../CSS/Hero.css'

import img4 from "../assets/couch.png"
import img7 from "../assets/couch1.png"
import img1 from "../assets/hero1.svg"; 
import img2 from "../assets/hero2.svg"; 
import img3 from "../assets/image 2.png"; 
import img5 from "../assets/hero3.svg"; 
import img6 from "../assets/hero4.svg"; 

const HeroSlider = () => {
  return (
    <div >
      <Swiper
        modules={[Pagination, Autoplay]}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        className="mySwiper mb-5 mt-5"
      >

   {/* Slide 1 */}
<SwiperSlide>
  <div
    className="p-4 d-flex align-items-center"
    style={{
      backgroundColor: "black",
      borderRadius: "10px",
      color: "white",
      height: "350px",
    }}
  >
    <div className="col-6">
      <p className="mb-2">
        <img src={img2} width="40" alt="" />
        <span className="ms-2">iPhone 14 Series</span>
      </p>

      <h2 className="fw-bold" style={{ fontSize: "40px" }}>
        Up to 10% <br /> off Voucher
      </h2>

      <button className="btn btn-link text-white mt-3">
        Shop Now →
      </button>
    </div>

    <div className="col-6 text-end">
      <img
        src={img1}
        alt="iPhone"
     style={{   
            width: "100%",
           maxHeight: "300px",
           objectFit: "contain", }}
      />
    </div>
  </div>
</SwiperSlide>

{/* Slide 2 */}
<SwiperSlide>
  <div
    className="p-4 d-flex align-items-center"
    style={{
      backgroundColor: "black",
      borderRadius: "10px",
      color: "white",
      height: "350px",
    }}
  >
    <div className="col-7">
      <p className="mb-2">
        <span className="ms-2">New Device</span>
      </p>

      <h2 className="fw-bold" style={{ fontSize: "40px" }}>
        Save Big <br /> on Accessories
      </h2>

      <button className="btn btn-link text-white mt-3">
        Shop Now →
      </button>
    </div>

    <div className="col-5 text-end">
      <img
        src={img3}
        alt="Device"
        style={{   
            width: "100%",
    
           maxHeight: "300px",
           objectFit: "contain", }}
      />
    </div>
  </div>
</SwiperSlide>

{/* Slide 3 */}
<SwiperSlide>
  <div
    className="p-4 d-flex align-items-center"
    style={{
      backgroundColor: "black",
      borderRadius: "10px",
      color: "white",
      height: "350px",
    }}
  >
    <div className="col-7">
      <p className="mb-2">
        <span className="ms-2">Special Edition</span>
      </p>

      <h2 className="fw-bold" style={{ fontSize: "40px" }}>
        15% Off <br /> Limited Time
      </h2>

      <button className="btn btn-link text-white mt-3">
        Shop Now →
      </button>
    </div>

    <div className="col-5 text-end">
      <img
        src={img5}
        alt="Product"
         style={{
    width: "100%",
    maxHeight: "350px",
    objectFit: "contain",
  }}
      />
    </div>
  </div>
</SwiperSlide>

{/* Slide 4 */}
<SwiperSlide>
  <div
    className="p-4 d-flex align-items-center"
    style={{
      backgroundColor: "black",
      borderRadius: "10px",
      color: "white",
      height: "350px",
    }}
  >
    <div className="col-7">
      <p className="mb-2">
        <span className="ms-2">Smart Home</span>
      </p>

      <h2 className="fw-bold" style={{ fontSize: "40px" }}>
        Upgrade Your <br /> Living Space
      </h2>

      <button className="btn btn-link text-white mt-3">
        Shop Now →
      </button>
    </div>

    <div className="col-5 text-end">
      <img
  src={img4}
  alt="Smart Home"
  style={{
    width: "100%",
    maxHeight: "350px",
    objectFit: "contain",
  }}
/>

    </div>
  </div>
</SwiperSlide>

{/* Slide 5 */}
<SwiperSlide>
  <div
    className="p-4 d-flex align-items-center"
    style={{
      backgroundColor: "black",
      borderRadius: "10px",
      color: "white",
      height: "350px",
    }}
  >
    <div className="col-7">
      <p className="mb-2">
        <span className="ms-2">Fashion Deals</span>
      </p>

      <h2 className="fw-bold" style={{ fontSize: "40px" }}>
        Fresh Styles <br /> Up to 30% Off
      </h2>

      <button className="btn btn-link text-white mt-3">
        Shop Now →
      </button>
    </div>

    <div className="col-5 text-end">
     <img
  src={img6}
  alt="Fashion"
  style={{
    width: "100%",
    maxHeight: "350px",
    objectFit: "contain",
  }}
/>

    </div>
  </div>
</SwiperSlide>


      </Swiper>
    </div>
  );
};

export default HeroSlider;
