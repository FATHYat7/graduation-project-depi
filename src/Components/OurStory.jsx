import React from "react";
import "../CSS/OurStory.css";

import aboutImg from "../assets/about.svg"; // حطي هنا صورة السكشن

const OurStory = () => {
  return (
    <section className="our-story container">
      <div className="story-text">
        <h2
        className="animate__animated animate__bounce">Our Story</h2>

        <p className="animate__animated animate__backInUp">
          Launched in 2015, Exclusive is South Asia’s premier online shopping 
          marketplace with an active presence in Bangladesh. Supported by a wide 
          range of tailored marketing, data and service solutions, Exclusive has 
          10,500 sellers and 300 brands and serves 3 million customers across the region.
        </p>

        <p className="animate__animated animate__backInUp">
          Exclusive has more than 1 Million products to offer, growing at a very 
          fast rate. Exclusive offers a diverse assortment in categories ranging 
          from consumer.
        </p>
      </div>

      <div className="story-image">
        <img src={aboutImg}
        className=" animate__animated animate__backInRight "
        alt="Our Story" />
        
      </div>
    </section>
  );
};

export default OurStory;
