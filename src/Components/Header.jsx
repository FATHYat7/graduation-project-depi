import React, { useContext, useState } from "react";
import { ShopContext } from "../Components/ShopContext";
import { Link, useLocation } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { FaRegCircleUser } from "react-icons/fa6";

import "../CSS/Header.css";
import logo from "../assets/logoo.png";

const Header = () => {
  // 🟢 جلب بيانات user + setUser + cart + wishlist من الـ Context
  const { user, setUser, cart, wishlist } = useContext(ShopContext);
  const location = useLocation();

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const logout = () => {
    setUser(null);                // إزالة المستخدم من الـ Context
    localStorage.removeItem("user"); // إزالة البيانات من localStorage
    setDropdownOpen(false);
  };

  return (
    <header>
      {/* Black Sale Bar */}
      <div className="bg-dark text-white text-center py-2 small">
        Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
        <span className="ms-3 text-warning" style={{ cursor: "pointer" }}>
          ShopNow
        </span>
      </div>

      <nav className="navbar navbar-expand-lg bg-white py-1 shadow-sm">
        <div className="container">
          
          {/* Logo */}
          <Link className="navbar-brand fw-bold fs-3" to="/">
            <img src={logo} alt="logo" />
          </Link>

          {/* Mobile Toggle */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navbar Links */}
          <div className="collapse navbar-collapse" id="mainNav">
            <ul className="navbar-nav mx-auto gap-4">
              <li className="nav-item">
                <Link className="nav-link active" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/About">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/signup">
                  Sign Up
                </Link>
              </li>
            </ul>

            {/* Icons Section */}
            <div className="d-flex align-items-center gap-4 position-relative">

              {/* Wishlist Icon */}
              <Link to="/wishlist" className="position-relative text-dark">
                <FaRegHeart size={20} />
                {wishlist.length > 0 && (
                  <span className="badge bg-danger position-absolute top-0 start-100 translate-middle rounded-pill">
                    {wishlist.length}
                  </span>
                )}
              </Link>

              {/* Cart Icon */}
              <Link to="/cart" className="position-relative text-dark">
                <IoCartOutline size={25} />
                {cart.length > 0 && (
                  <span className="badge bg-danger position-absolute top-0 start-100 translate-middle rounded-pill">
                    {cart.length}
                  </span>
                )}
              </Link>

              {/* USER DROPDOWN */}
              <div className="position-relative">
                <div
                  onClick={toggleDropdown}
                  style={{ cursor: "pointer" }}
                  className="d-flex align-items-center gap-1"
                >
                  <FaRegCircleUser size={20} />
                  {user ? (
                    <span>{user.name}</span>
                  ) : (
                    <Link to="/login"
                    className="text-dark text-decoration-none">Login</Link>
                  )}
                </div>

                {user && dropdownOpen && (
                  <div
                    className="dropdown-menu show p-2"
                    style={{
                      right: 0,
                      position: "absolute",
                      zIndex: 1000,
                      minWidth: "125px",
                     
                    }}
                  >
                    <Link to="/Myprofile" className="dropdown-item text-danger">
                      Profile
                    </Link>
                    <Link to="/" className="dropdown-item text-danger">
                      Home
                    </Link>
                    <button onClick={logout} className="dropdown-item text-danger ">
                      Logout
                    </button>
                  </div>
                )}
              </div>

            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
