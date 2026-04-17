import React from "react";
import "../CSS/ServicesSection.css";
import { FaStore, FaDollarSign, FaShoppingBag, FaMoneyBillAlt } from "react-icons/fa";

const services = [
  {
    id: 1,
    icon: <FaStore />,
    number: "10.5k",
    text: "Sallers active our site",
  },
  {
    id: 2,
    icon: <FaDollarSign />,
    number: "33k",
    text: "Monthly Product Sale",
  },
  {
    id: 3,
    icon: <FaShoppingBag />,
    number: "45.5k",
    text: "Customer active in our site",
  },
  {
    id: 4,
    icon: <FaMoneyBillAlt />,
    number: "25k",
    text: "Anual gross sale in our site",
  },
];

const ServicesSection = () => {
  return (
    <div className="services container">
      {services.map((item) => (
        <div key={item.id} className="service-card ">
          <div className="service-icon">{item.icon}</div>
          <h3 className="service-number">{item.number}</h3>
          <p className="service-text">{item.text}</p>
        </div>
      ))}
    </div>
  );
};

export default ServicesSection;
