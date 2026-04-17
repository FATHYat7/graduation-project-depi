import React, { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import LoginSide from "../Components/LoginSide.jsx";
import "../Css/Login.css";
import { ShopContext } from "../Components/ShopContext";

export default function Login() {
  const { setUser } = useContext(ShopContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    setTimeout(() => {
      if (email && password) {
        
        const userData = {
          name: email.split("@")[0], 
          email: email,
        };

        setUser(userData);

        navigate("/Myprofile");
      } else {
        setError("Email or password is incorrect!");
      }

      setLoading(false);
    }, 500);
  };

  return (
    <div className="d-flex gap-6 container-login align-items-center">
      <div className="side-Photo pt-5">
        <LoginSide />
      </div>

      <div className="container-main p-5 d-flex flex-column gap-4">
        <div className="text d-flex flex-column gap-4">
          <h2>Log in to Exclusive</h2>
          <p>Enter your details below</p>
        </div>

        {error && <p className="text-danger">{error}</p>}

        <form
          className="container-form d-flex flex-column gap-3"
          onSubmit={handleLogin}
          noValidate
        >
          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={loading}
            />
            <label>Email address</label>
          </div>

          <div className="form-floating mb-3">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={loading}
            />
            <label>Password</label>
          </div>

          <div className="submit-section d-flex justify-content-between align-items-center flex-wrap gap-3 mt-4">
            <button type="submit" className="btn btn-danger" disabled={loading}>
              {loading ? "Logging in..." : "Log In"}
            </button>

            <Link to="/signup" className="text-danger text-decoration-none">
              Don't have an account?
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
