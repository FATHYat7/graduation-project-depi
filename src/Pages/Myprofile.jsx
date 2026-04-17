import React, { useState, useContext } from "react";
import "../CSS/MyProfile.css";
import { Link } from "react-router-dom";
import img from '../assets/R.png'
import { ShopContext } from "../Components/ShopContext.jsx"; // استدعاء الكونتكست

const MyProfile = () => {
  const [image, setImage] = useState(null);
  const { user, setUser } = useContext(ShopContext); // قراءة بيانات المستخدم من Context

  const uploadImage = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value })); // تحديث بيانات المستخدم في Context مباشرة
  };

  return (
    <div className="profile-page">

      {/* ========= LEFT MENU ========= */}
      <aside className="profile-sidebar">
        <h4>Manage My Account</h4>
        <ul>
          <li className="active">My Profile</li>
          <li>Address Book</li>
          <li>My Payment Options</li>
        </ul>

        <Link
          to="cart"
          className="text-dark text-decoration-none"
        >
          My Orders
        </Link>
        <ul>
          <li>My Returns</li>
          <li>My Cancellations</li>
        </ul>

        <Link 
          className="text-dark text-decoration-none"
          to="/wishlist" 
        >
          My Wishlist
        </Link>
      </aside>

      {/* ========= PROFILE CONTENT ========= */}
      <div className="profile-content">
        <h2 className="text-danger">My Profile</h2>

        <div className="profile-box">

          {/* LEFT SIDE = Profile info */}
          <div className="profile-left">
            <div className="image-wrapper">
              <img
                src={image || img}
                alt="Profile"
              />
              <label className="edit-photo">
                Change
                <input type="file" onChange={uploadImage} />
              </label>
            </div>

            <h3 className="username">
              {user ? `${user.firstName} ${user.lastName}` : ""}
            </h3>
            <p className="user-email">{user ? user.email : ""}</p>
          </div>

          {/* RIGHT SIDE = Form */}
          <form className="profile-form">
            <h3>Edit Your Profile</h3>

            <div className="input-grid">
              <div>
                <label>First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={user?.firstName || ""}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label>Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={user?.lastName || ""}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={user?.email || ""}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label>Address</label>
                <input
                  type="text"
                  name="address"
                  value={user?.address || ""}
                  placeholder="Cairo, Egypt"
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* <div className="action-btns">
              <Link to="/" className="save text-decoration-none">
                Save My Profile
              </Link>
            </div> */}
          </form>

        </div>
      </div>

    </div>
  );
};

export default MyProfile;
