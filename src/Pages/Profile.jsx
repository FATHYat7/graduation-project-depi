import React from "react";
import "../CSS/Profile.css";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    
    <div className="container py-5 profile-page">
    <div >
      {/* Title ABOVE the card */}
      <h5
        className="fw-bold mb-4 text-center"
        style={{ color: "#DB4444", fontSize: "24px" }}
      >
        Edit Your Profile
      </h5>
      </div>
      {/* Card Box */}
      <div className="col-md-12">
        <div className="profile-box shadow-sm p-4 bg-white">
          <form>

            {/* First Name */}
            <div className="row mb-3">
              <div className="col-md-12">
                <label className="form-label">First Name</label>
                <input type="text" className="form-control" placeholder="Md" />
              </div>
            </div>

            {/* Last Name */}
            <div className="row mb-3">
              <div className="col-md-12">
                <label className="form-label">Last Name</label>
                <input type="text" className="form-control" placeholder="Rimel" />
              </div>
            </div>

            {/* Email */}
            <div className="row mb-3">
              <div className="col-md-12">
                <label className="form-label">Email</label>
                <input type="email" className="form-control" placeholder="example@gmail.com" />
              </div>
            </div>

            {/* Address */}
            <div className="row mb-3">
              <div className="col-md-12">
                <label className="form-label">Address</label>
                <input type="text" className="form-control" placeholder="123 Street, City" />
              </div>
            </div>

            {/* Password Section */}
            <h6 className="fw-bold mt-4">Password Changes</h6>

            <div className="row mb-3">
              <div className="col-md-6 mb-3">
                <input type="password" className="form-control" placeholder="Current Password" />
              </div>

              <div className="col-md-6 mb-3">
                <input type="password" className="form-control" placeholder="New Password" />
              </div>

              <div className="col-md-12">
                <input type="password" className="form-control" placeholder="Confirm New Password" />
              </div>
            </div>

            {/* Buttons */}
            <div className="d-flex justify-content-end gap-3">
              <button className="btn btn-light">Cancel</button>
              <button className="btn btn-danger px-4">Save Changes</button>
            </div>

          </form>
        </div>
      </div>

    </div>
  );
};

export default Profile;
