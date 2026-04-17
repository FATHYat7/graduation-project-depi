import React, { useState, useContext } from "react";
import { ShopContext } from "../Components/ShopContext";
import {
  FaStar,
  FaStarHalfAlt,
  FaRegStar,
  FaRegHeart,
  FaHeart,
  FaEye,
} from "react-icons/fa";

const ProductCard = ({ product }) => {
const { addToWishlist, wishlist } = useContext(ShopContext);

const isLiked = wishlist.some((item) => item.id === product.id);

const rating = Math.random() * (5 - 3) + 3;

const renderStars = () => {
const stars = [];
const full = Math.floor(rating);
const half = rating % 1 >= 0.5 ? 1 : 0;
const empty = 5 - full - half;

    for (let i = 0; i < full; i++)
      stars.push(<FaStar key={"f" + i} className="text-warning" />);

    if (half)
      stars.push(<FaStarHalfAlt key="half" className="text-warning" />);

    for (let i = 0; i < empty; i++)
      stars.push(<FaRegStar key={"e" + i} className="text-warning" />);

    return stars;
  };

  return (
    <div className="product-card rounded shadow-sm">

      <div className="img-box bg-light rounded position-relative d-flex justify-content-center align-items-center">
        <img src={product.image} alt={product.name} className="product-img" />

        <div
          className="icon-box"
          style={{ right: "10px" }}
          onClick={() => addToWishlist(product)}
        >
          {isLiked ? (
            <FaHeart size={18} className="text-danger" />
          ) : (
            <FaRegHeart size={18} />
          )}
        </div>

        <div className="icon-box" style={{ right: "45px" }}>
          <FaEye size={18} />
        </div>
      </div>

      <div className="ms-3 mt-2">
        <h6 className="fw-semibold">{product.name}</h6>
        <p className="m-0">
          <span className="text-danger fw-bold">${product.price}</span>{" "}
          <span className="text-muted text-decoration-line-through">
            ${product.oldPrice}
          </span>
        </p>
      </div>

      <div className="d-flex align-items-center gap-1 ms-3 mb-2 mt-1">
        {renderStars()}
        <span className="text-muted ms-1">({product.reviews})</span>
      </div>
    </div>
  );
};

export default ProductCard;
