import React, { useEffect, useState, useRef, useContext } from "react";
import axios from "axios";
import { ShopContext } from "../Components/ShopContext";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "../CSS/FlashSales.css";

import { IoEyeOutline } from "react-icons/io5";
import {
  FaShoppingCart,
  FaArrowLeft,
  FaArrowRight,
  FaHeart,
  FaRegHeart,
  FaStar,
  FaRegStar,
  FaStarHalfAlt,
} from "react-icons/fa";

import { Link, useNavigate } from "react-router-dom";

import img1 from "../assets/prod (1).svg";
import img2 from "../assets/prod (2).svg";
import img3 from "../assets/prod (3).svg";
import img4 from "../assets/prod (4).svg";

const FlashSales = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [timeLeft, setTimeLeft] = useState({
    days: 3,
    hours: 23,
    minutes: 19,
    seconds: 56
  });
  const swiperRef = useRef(null);

  const { addToCart, wishlist, addToWishlist } = useContext(ShopContext);
  const navigate = useNavigate();

  const API_URL = "http://localhost:3000/api/products";

  // تايمر العد التنازلي
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        const { days, hours, minutes, seconds } = prev;
        
        let newSeconds = seconds - 1;
        let newMinutes = minutes;
        let newHours = hours;
        let newDays = days;
        
        if (newSeconds < 0) {
          newSeconds = 59;
          newMinutes -= 1;
          
          if (newMinutes < 0) {
            newMinutes = 59;
            newHours -= 1;
            
            if (newHours < 0) {
              newHours = 23;
              newDays -= 1;
            }
          }
        }
        
        // إعادة التعيين عندما ينتهي الوقت
        if (newDays < 0) {
          return {
            days: 3,
            hours: 23,
            minutes: 59,
            seconds: 59
          };
        }
        
        return {
          days: newDays,
          hours: newHours,
          minutes: newMinutes,
          seconds: newSeconds
        };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get(API_URL);
      setProducts(response.data.data || []);
    } catch (error) {
      // fallback demo data
      setProducts([
        { id: 1, title: "HAVIT HV-G92 Gamepad", price: 120, oldPrice: 160, discount: 40, rating: 4.5, image: img1 },
        { id: 2, title: "AK-900 Wired Keyboard", price: 960, oldPrice: 1160, discount: 35, rating: 3.5, image: img2 },
        { id: 3, title: "IPS LCD Gaming Monitor", price: 370, oldPrice: 400, discount: 30, rating: 5, image: img3 },
        { id: 4, title: "Comfort Chair", price: 375, oldPrice: 400, discount: 25, rating: 4, image: img4 },
        { id: 2, title: "AK-900 Wired Keyboard", price: 960, oldPrice: 1160, discount: 35, rating: 3.5, image: img2 },
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
    const full = Math.floor(rating);
    const half = rating % 1 !== 0;
    for (let i = 0; i < full; i++) stars.push(<FaStar key={i} className="text-warning" />);
    if (half) stars.push(<FaStarHalfAlt key="half" className="text-warning" />);
    const empty = 5 - stars.length;
    for (let i = 0; i < empty; i++) stars.push(<FaRegStar key={`e-${i}`} className="text-warning" />);
    return stars;
  };

  return (
    <div className="container my-5 ms-3 flash-container">
      {/* Header مع التايمر */}
      <div className="d-flex justify-content-between align-items-center mb-4 w-100">
        <div className="d-flex flex-column">
          <p className="cat-label mb-1">Today's</p>
          <h2 className="fw-bold mb-0">Flash Sales</h2>
        </div>

        {/* التايمر المضاف */}
        <div className="d-flex align-items-center gap-3">
          <div className="text-center">
            <p className="mb-1 small  text-danger">Days</p>
            <div className="timer-box bg-light  text-dark rounded-2 px-3 py-2">
              <h4 className="fw-bold mb-0">{timeLeft.days.toString().padStart(2, '0')}</h4>
            </div>
          </div>
          
          <div className="text-center">
            <p className="mb-1 small text-danger">Hours</p>
            <div className="timer-box bg-light  text-dark rounded-2 px-3 py-2">
              <h4 className="fw-bold mb-0">{timeLeft.hours.toString().padStart(2, '0')}</h4>
            </div>
          </div>
          
          <div className="text-center">
            <p className="mb-1 small text-danger">Minutes</p>
            <div className="timer-box bg-light  text-dark rounded-2 px-3 py-2">
              <h4 className="fw-bold mb-0">{timeLeft.minutes.toString().padStart(2, '0')}</h4>
            </div>
          </div>
          
          <div className="text-center">
            <p className="mb-1 small text-danger">Seconds</p>
            <div className="timer-box bg-light  text-dark rounded-2 px-3 py-2">
              <h4 className="fw-bold mb-0">{timeLeft.seconds.toString().padStart(2, '0')}</h4>
            </div>
          </div>
        </div>

        {/* أزرار السابق/التالي (كما هي) */}
        <div className="d-flex gap-2">
          <button className="btn btn-light shadow-sm" onClick={() => swiperRef.current?.slidePrev()}>
            <FaArrowLeft />
          </button>
          <button className="btn btn-light shadow-sm" onClick={() => swiperRef.current?.slideNext()}>
            <FaArrowRight />
          </button>
        </div>
      </div>

      {/* السوايبر (بدون تغيير) */}
      {loading ? (
        <p>Loading...</p>
      ) : (
        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={4}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 10 },
            576: { slidesPerView: 2, spaceBetween: 15 },
            768: { slidesPerView: 3, spaceBetween: 20 },
            992: { slidesPerView: 4, spaceBetween: 20 },
            1200: { slidesPerView: 4, spaceBetween: 20 },
          }}
        >
          {products.map((product) => {
            const isLiked = wishlist.some((p) => p.id === product.id);

            return (
              <SwiperSlide key={product.id}>
                <div className="product-card rounded-3 shadow-sm overflow-hidden">
                  <div className="image-box position-relative">
                    <div className="icons-wrapper">
                      <button
                        className="icon-btn"
                        onClick={() => addToWishlist(product)}
                      >
                        {isLiked ? <FaHeart size={20} className="text-danger" /> : <FaRegHeart size={20} />}
                      </button>

                      <button
                        className="icon-btn"
                        onClick={() => navigate(`/product-details/${product.id}`)}
                      >
                        <IoEyeOutline size={20} />
                      </button>
                    </div>

                    <span className="badge bg-danger position-absolute top-0 start-0 m-2">
                      -{product.discount}%
                    </span>

                    <img src={product.image} alt={product.title} className="product-img" />
                  </div>

                  <div className="info-box p-3 text-left">
                    <h6 className="mt-2">{product.title}</h6>
                    <div className="d-flex gap-2">
                      <span className="fw-bold text-danger">${product.price}</span>
                      <span className="text-muted text-decoration-line-through">${product.oldPrice}</span>
                    </div>

                    <div className="d-flex align-items-center gap-1 mt-1">
                      {renderStars(product.rating)}
                      <span className="text-dark ms-1">({product.rating})</span>
                    </div>

                    <button className="btn btn-dark w-100 mt-3 add-cart-btn" onClick={() => addToCart(product)}>
                      <FaShoppingCart className="me-2" /> Add to Cart
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      )}

      {/* View All (بدون تغيير) */}
      <div className="text-center mt-4">
        <Link to="/products" className="btn btn-danger px-4 py-2 view-products-btn">
          View All Products
        </Link>
      </div>
    </div>
  );
};

export default FlashSales;