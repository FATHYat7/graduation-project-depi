import React from "react";
import "../CSS/NewArrival.css";

import img1 from "../assets/arrival (1).svg";
import img2  from "../assets/arrival (2).svg";
import img3 from "../assets/arrival (3).svg";
import img4 from "../assets/arrival (4).svg";

const products = [
  { id: 1, name: "PlayStation 5", desc: "Black and White version of the PS5 coming out on sale.", image: img1 },
  { id: 2, name: "Women's Collections", desc: "Featured woman collections that give you another vibe.", image: img2 },
  { id: 3, name: "Speakers", desc: "Amazon wireless speakers", image: img3 },
  { id: 4, name: "Perfume", desc: "GUCCI INTENSE OUD EDP", image: img4 },
];

const NewArrival = () => {
  return (
    <section className="new-arrival container my-4">
      <div className="section-header">
        <p className="featured-label">Featured</p>
        <h2>New Arrival</h2>
      </div>

      <div className="arrival-grid ">
        <div className="main-product bg-dark">
          <img src={products[0].image} alt={products[0].name} />
          <div className="product-info">
            <h3 className="text-light" >{products[0].name}</h3>
            <p>{products[0].desc}</p>
            <button className="shop-btn">Shop Now</button>
          </div>
        </div>

        <div className="side-products">
          {products.slice(1).map((product) => (
            <div key={product.id} className="side-product ">
              <img src={product.image} alt={product.name} />
              <div className="product-info">
                <h4>{product.name}</h4>
                <p>{product.desc}</p>
                <button className="shop-btn">Shop Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewArrival;
