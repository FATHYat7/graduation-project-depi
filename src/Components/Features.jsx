import React from "react";
import "../CSS/Features.css";
import { FaShippingFast , FaShieldAlt } from "react-icons/fa";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { FaHeadset } from "react-icons/fa6";

const FeaturesSection = () => {
  const features = [
    {
      id: 1,
      icon: <FaShippingFast  size={50} className="feature-icon" />,
      title: "FREE AND FAST DELIVERY",
      description: "Free delivery for all orders over $140",
      color: "white"
    },
    {
      id: 2,
      icon: <FaHeadset size={50} className="feature-icon" />,
      title: "24/7 CUSTOMER SERVICE",
      description: "Friendly 24/7 customer support",
      color: "white"
    },
    {
      id: 3,
      icon: <AiOutlineSafetyCertificate size={50} className="feature-icon" />,
      title: "MONEY BACK GUARANTEE",
      description: "We return money within 30 days",
      color: "white"
    },
    {
      id: 4,
      icon: <FaShieldAlt size={50} className="feature-icon" />,
      title: "SECURE PAYMENT",
      description: "100% secure payment",
      color: "white"
    }
  ];

  return (
    <section className="features-section">
      <div className="container ">
        <div className="features-grid">
          {features.map((feature) => (
            <div key={feature.id} className="feature-card ">
              <div className="feature-icon-container" style={{ backgroundColor: `${feature.color}20` }}>
                <div className="feature-icon-wrapper" style={{ color: feature.color }}>
                  {feature.icon}
                </div>
              </div>
              <div className="feature-content">
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default FeaturesSection;