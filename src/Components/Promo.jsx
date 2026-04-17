import React, { useState, useEffect } from "react";
import speaker from "../assets/speaker.svg"; 
import "../CSS/Promo.css";

const PromoSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const target = new Date();
    target.setDate(target.getDate() + 20); 

    const interval = setInterval(() => {
      const now = new Date();
      const diff = target - now;

      if (diff <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60)
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="promo-section container my-5 d-flex align-items-center justify-content-between flex-wrap">

      <div className="promo-text ms-5">
        <h5 className=" fw-bold">Categories</h5>

        <h1 className="fw-bold promo-title">
          Enhance Your <br /> Music Experience
        </h1>

        <div className="d-flex gap-3 my-4">
          <div className="count-box">{String(timeLeft.days).padStart(2,'0')}<br/><span>Days</span></div>
          <div className="count-box">{String(timeLeft.hours).padStart(2,'0')}<br/><span>Hours</span></div>
          <div className="count-box">{String(timeLeft.minutes).padStart(2,'0')}<br/><span>Minutes</span></div>
          <div className="count-box">{String(timeLeft.seconds).padStart(2,'0')}<br/><span>Seconds</span></div>
        </div>

        <button className="btn px-4 py-2 fw-semibold">
          Buy Now!
        </button>
      </div>

      <div className="promo-img me-5">
        <img src={speaker} alt="Speaker" />
      </div>
    </section>
  );
};

export default PromoSection;
