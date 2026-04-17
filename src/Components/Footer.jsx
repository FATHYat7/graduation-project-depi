import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import img from '../assets/Qr Code.svg'
import img1 from '../assets/google play.svg'
import img2 from '../assets/appstore.svg'
import { AiOutlineSend } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-5 pb-3 mt-5">
      <div className="container">

        <div className="row">

          <div className="col-md-3 mb-4">
            <h3 className="fw-bold">Exclusive</h3>
            <h6 className="mt-3">Subscribe</h6>
            <p>Get 10% off your first order</p>

            <div className="input-group w-75">
               <input
                  type="email"
                  className="form-control bg-black text-white border-secondary"
                  placeholder="Enter your email"
              />
             <span className="input-group-text bg-black border-secondary text-light" style={{cursor: "pointer"}}>
             <AiOutlineSend />
             </span>
            </div>
          </div>

          <div className="col-md-2 mb-4 lh-lg">
            <h6 className="fw-bold">Support</h6>
            <p className="mt-3 mb-1">111 Bijoy sarani, Dhaka,</p>
            <p className="mb-1">DH 1515, Bangladesh.</p>
            <p className="mb-1">exclusive@gmail.com</p>
            <p>+88015-88888-9999</p>
          </div>

          <div className="col-md-2 mb-4 lh-lg">
            <h6 className="fw-bold">Account</h6>
            <p className="mt-3 mb-1">My Account</p>
            <p className="mb-1">Login / Register</p>
            <p className="mb-1">Cart</p>
            <p className="mb-1">Wishlist</p>
            <p>Shop</p>
          </div>

          <div className="col-md-2 mb-4 lh-lg">
            <h6 className="fw-bold">Quick Link</h6>
            <p className="mt-3 mb-1">Privacy Policy</p>
            <p className="mb-1">Terms Of Use</p>
            <p className="mb-1">FAQ</p>
            <p>Contact</p>
          </div>

          <div className="col-md-3 mb-4 lh-lg">
            <h6 className="fw-bold">Download App</h6>
            <p className="mt-3">Save $3 with App New User Only</p>

            <div className="d-flex gap-3 mt-2">
              <img 
                src={img}
                alt="QR Code"
                style={{ width: "80px", height: "80px" }}
              />

              <div className="d-flex flex-column gap-2">
                <img src={img1} alt="App Store" style={{ width: "120px" }} />
                <img src={img2} alt="Google Play" style={{ width: "120px" }} />
              </div>
            </div>

            <div className="d-flex gap-3 mt-4 fs-5">
              <FaFacebookF />
              <FaTwitter />
              <FaInstagram />
              <FaLinkedinIn />
            </div>
          </div>
        </div>

        <hr className="border-secondary" />

        <p className="text-center small m-0">
          © Copyright Rimel 2022. All right reserved
        </p>

      </div>
    </footer>
  );
};

export default Footer;
