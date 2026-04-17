// src/Pages/Wishlist.jsx
import React, { useContext } from "react";
import { ShopContext } from "../Components/ShopContext";
import { Link } from "react-router-dom";
import '../CSS/productGrid.css'

const Wishlist = () => {
  const { wishlist, addToCart, removeFromWishlist } = useContext(ShopContext);

  if (wishlist.length === 0) {
    return (
      <div className="container my-5">
        <h3 className="mb-4">Your Wishlist</h3>
        <div className="alert alert-info text-center">
          Wishlist is empty — <Link to="/products">Go shopping</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container my-5">
      <h3 className="mb-4">Your Wishlist</h3>

      <div className="row">
        {wishlist.map((item) => (
          <div
            key={item.id}
            className="col-md-4 mb-4"
          >
            <div className="card h-100 shadow-sm">
              <img
                src={item.image}
                className="card-img-top"
                alt={item.name}
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">${item.price}</p>
                <div className="mt-auto d-flex justify-content-between">
                  <button
                    className="btn btn-danger"
                    onClick={() => removeFromWishlist(item.id)}
                  >
                    Remove
                  </button>
                  <button
                    className="btn btn-primary"
                    onClick={() => addToCart(item)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
