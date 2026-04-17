import SideImage from "../assets/Side Image.svg";
import React from "react";
import "../css/LoginSide.css";
import"animate.css";

export default function LoginSide() {
  return (
      <div className="sidePhoto" style={{ padding: "40px" }}>
          <img src={SideImage} alt="Phone" className="img-fluid animate__animated animate__slideInLeft" />
      </div>
  );
}

