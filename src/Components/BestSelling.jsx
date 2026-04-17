import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import { ShopContext } from "../Components/ShopContext";
import { FaHeart, FaRegHeart, FaEye } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom"; // ← هنا الإضافة
import '../CSS/productCard.css';

import img1 from "../assets/Best (1).svg";
import img2 from "../assets/Best (2).svg";
import img3 from "../assets/Best (3).svg";
import img4 from "../assets/Best (4).svg";

const dummyProducts = [
  { id: 5, name: "The north coat", price: 260, oldPrice: 360, image: img4, reviews: 65 },
  { id: 6, name: "Gucci duffle bag", price: 960, oldPrice: 1160, image: img3, reviews: 65 },
  { id: 7, name: "RGB liquid CPU Cooler", price: 160, oldPrice: 170, image: img2, reviews: 65 },
  { id: 8, name: "Small BookSelf", price: 360, oldPrice: 360, image: img1, reviews: 65 },
];

const BestSelling = () => {
  const [products, setProducts] = useState(dummyProducts);
  const { addToWishlist, wishlist } = useContext(ShopContext);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/products");
        setProducts(res.data.data);

      } catch (error) {
        console.error("Error fetching Best Selling products:", error);
        setProducts(dummyProducts);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="container my-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <span className="text-danger fw-semibold">This Month</span>
          <h2 className="fw-bold mt-1">Best Selling Products</h2>
        </div>

        <Link
          to="/products"
          className="btn btn-danger px-4 py-2 view-products-btn"
        >
          View All
        </Link>
      </div>

      <div className="row g-4">
        {products.map((item) => {
          const isLiked = wishlist.some(p => p.id === item.id);
          return (
            <div className="col-6 col-md-3" key={item.id}>
              <div className="product-card">
                <div className="img-box position-relative">
                  <img src={item.image} alt={item.name} className="product-img" />

                  <div className="icons-overlay">
                    <button className="icon-btn" onClick={() => addToWishlist(item)}>
                      {isLiked ? <FaHeart style={{ color: "red" }} /> : <FaRegHeart />}
                    </button>
                    <button className="icon-btn" onClick={() => navigate(`/product-details/${item.id}`)}>
                      <FaEye />
                    </button>
                  </div>
                </div>

                <div className="ms-3 mt-2">
                  <h6 className="fw-semibold">{item.name}</h6>
                  <p className="m-0">
                    <span className="text-danger fw-bold">${item.price}</span>{" "}
                    <span className="text-muted text-decoration-line-through">${item.oldPrice}</span>
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BestSelling;
