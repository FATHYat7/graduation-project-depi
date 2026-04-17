import React, { useEffect, useState, useContext, useRef } from "react";
import axios from "axios";
import "../CSS/ProductGrid.css";
import { FaStar, FaRegStar, FaRegHeart, FaHeart, FaEye, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { ShopContext } from "../Components/ShopContext";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Grid } from "swiper/modules";
import { Link, useNavigate } from "react-router-dom"; // ← هنا الإضافة
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/grid";

import img1 from "../assets/product (1).svg";
import img2 from "../assets/product (2).svg";
import img3 from "../assets/product (3).svg";
import img4 from "../assets/product (4).svg";
import img5 from "../assets/product (5).svg";
import img6 from "../assets/product (6).svg";

const ProductGrid = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { addToCart, addToWishlist, wishlist } = useContext(ShopContext);

  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const navigate = useNavigate(); 

  const API_URL = "http://localhost:3000/api/products";

  const fetchProducts = async () => {
    try {
      const response = await axios.get(API_URL);
      setProducts(response.data.data);
    } catch (error) {
      setProducts([
        { id: 9, name: "Breed Dry Dog Food", price: 100, rating: 3, reviews: 35, image: img1 },
        { id: 10, name: "CANON EOS DSLR Camera", price: 360, rating: 4, reviews: 95, image: img2 },
        { id: 11, name: "ASUS FHD Gaming Laptop", price: 700, rating: 5, reviews: 325, image: img3 },
        { id: 12, name: "Curology Product Set", price: 500, rating: 4, reviews: 145, image: img4 },
        { id: 13, name: "Kids Electric Car", price: 960, rating: 5, reviews: 65, image: img5 },
        { id: 14, name: "Jr. Zoom Soccer Cleats", price: 1160, rating: 4, reviews: 35, image: img6 },
          { id: 9, name: "Breed Dry Dog Food", price: 100, rating: 3, reviews: 35, image: img1 },
        { id: 10, name: "CANON EOS DSLR Camera", price: 360, rating: 4, reviews: 95, image: img2 },
        { id: 11, name: "ASUS FHD Gaming Laptop", price: 700, rating: 5, reviews: 325, image: img3 },
        { id: 12, name: "Curology Product Set", price: 500, rating: 4, reviews: 145, image: img4 },
        { id: 13, name: "Kids Electric Car", price: 960, rating: 5, reviews: 65, image: img5 },
        { id: 14, name: "Jr. Zoom Soccer Cleats", price: 1160, rating: 4, reviews: 35, image: img6 },
      ]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(i <= rating ? <FaStar key={i} className="star-icon" /> : <FaRegStar key={i} className="star-icon" />);
    }
    return stars;
  };

  return (
    <section className="product-grid container my-4">
      <div className="section-header">
        <div className="title-row">
          <div>
            <p className="cat-label mb-1">Our product</p>
            <h2>Explore Our Products</h2>
          </div>

          <div className="swiper-buttons d-flex gap-2">
            <button ref={prevRef} className="arrow-btn"><FaArrowLeft /></button>
            <button ref={nextRef} className="arrow-btn"><FaArrowRight /></button>
          </div>
        </div>
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <Swiper
          slidesPerView={3}
          slidesPerGroup={3}
          spaceBetween={20}
          grid={{ rows: 2, fill: "row" }}
          modules={[Navigation, Grid]}
          navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
          onInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 10 },
            576: { slidesPerView: 2, spaceBetween: 15 },
            768: { slidesPerView: 3, spaceBetween: 20 },
            992: { slidesPerView: 3, spaceBetween: 20 },
            1200: { slidesPerView: 3, spaceBetween: 20 },
          }}
        >
          {products.map((product) => {
            const isLiked = wishlist.some(p => p.id === product.id);
            return (
              <SwiperSlide key={product.id}>
                <div className="product-card">
                  <div className="icons-overlay">
                    <button className="icon-btn" onClick={() => addToWishlist(product)}>
                      {isLiked ? <FaHeart style={{ color: "red" }} /> : <FaRegHeart />}
                    </button>
                    <button
                      className="icon-btn"
                      onClick={() => navigate(`/product-details/${product.id}`)} // ← الانتقال لصفحة التفاصيل
                    >
                      <FaEye />
                    </button>
                  </div>

                  <div className="product-image-container">
                    <img src={product.image} alt={product.name} className="product-img" />
                  </div>

                  <div className="product-info">
                    <h3 className="product-name text-dark">{product.name}</h3>
                    <div className="product-price">${product.price}</div>
                    <div className="product-rating">
                      <div className="stars-container text-warning">{renderStars(product.rating)}</div>
                      <span className="reviews">({product.reviews})</span>
                    </div>
                  </div>

                  <button className="btn-add-to-cart" onClick={() => addToCart(product)}>
                    Add To Cart
                  </button>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      )}

      <div className="text-center mt-4">
        <Link
          to="/products"
          className="btn btn-danger px-4 py-2 view-products-btn"
        >
          View All Products
        </Link>
      </div>
    </section>
  );
};

export default ProductGrid;
