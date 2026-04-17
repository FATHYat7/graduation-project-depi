// src/Pages/CheckoutPage.jsx
import React, { useContext, useState } from "react";
import { ShopContext } from "../Components/ShopContext";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const CheckoutPage = () => {
  const { cart, clearCart } = useContext(ShopContext);
  const navigate = useNavigate();

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shipping = "Free";
  const total = subtotal;

  const [paymentMethod, setPaymentMethod] = useState("cash"); // 'bank' or 'cash'
  const [saveInfo, setSaveInfo] = useState(false);
  const [couponCode, setCouponCode] = useState("");

  // عند تغيير طريقة الدفع
  const handlePaymentChange = (method) => {
    setPaymentMethod(method);
    if (method === "bank") {
      navigate("/payment"); // صفحة الدفع بالفيزا
    clearCart(); // ← الكارت هيفرغ
    }
  };

  // عند الضغط على Place Order
  const handlePlaceOrder = (e) => {
    e.preventDefault(); // يمنع refresh الصفحة لو الزر داخل form
    alert("Order placed successfully!");
    clearCart(); // ← الكارت هيفرغ

  };

  return (
    <div className="container my-5">
      <h2 className="mb-4 fw-bold">Checkout</h2>
      <div className="row">
        {/* Billing Details */}
        <div className="col-lg-6 mb-5">
          <form>
            {["First Name*", "Last Name*", "Street Address*", "City*", "Phone*", "Email*"].map((label, i) => (
              <div className="mb-3" key={i}>
                <label className="form-label">{label}</label>
                <input
                  type={label.includes("Email") ? "email" : "text"}
                  className="form-control"
                  required
                />
              </div>
            ))}

            <div className="form-check mt-3">
              <input
                className="form-check-input"
                type="checkbox"
                checked={saveInfo}
                onChange={(e) => setSaveInfo(e.target.checked)}
                id="saveInfoCheck"
              />
              <label className="form-check-label" htmlFor="saveInfoCheck">
                Save this information for next time
              </label>
            </div>
          </form>
        </div>

        {/* Order Summary */}
        <div className="col-lg-6">
          <div className="p-4 border rounded shadow-sm bg-white">
            {cart.length === 0 && <p>Your cart is empty.</p>}

            {cart.map((item) => (
              <div key={item.id} className="d-flex justify-content-between mb-2 border-bottom pb-2">
                <span>{item.name} x {item.quantity}</span>
                <span>${item.price * item.quantity}</span>
              </div>
            ))}

            <hr />
            <div className="d-flex justify-content-between">
              <span>Subtotal:</span>
              <span>${subtotal}</span>
            </div>
            <div className="d-flex justify-content-between">
              <span>Shipping:</span>
              <span>{shipping}</span>
            </div>
            <div className="d-flex justify-content-between fw-bold">
              <span>Total:</span>
              <span>${total}</span>
            </div>

            {/* Payment Options */}
            <div className="mt-3">
              <div className="form-check mb-2">
                <input
                  className="form-check-input"
                  type="radio"
                  name="payment"
                  value="cash"
                  checked={paymentMethod === "cash"}
                  onChange={() => handlePaymentChange("cash")}
                  id="paymentCash"
                />
                <label className="form-check-label" htmlFor="paymentCash">
                  Cash on Delivery
                </label>
              </div>

              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="payment"
                  value="bank"
                  checked={paymentMethod === "bank"}
                  onChange={() => handlePaymentChange("bank")}
                  id="paymentBank"
                />
                <label className="form-check-label" htmlFor="paymentBank">
                  Pay with Card
                </label>
              </div>
            </div>

            {/* Coupon */}
            <div className="d-flex mt-3 mb-3">
              <input
                type="text"
                className="form-control me-2"
                placeholder="Coupon Code"
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
              />
              <button className="btn btn-danger">Apply</button>
            </div>

            {/* Place Order button لكل طرق الدفع */}
            {cart.length > 0 && (
              <button
                type="submit" 
                className="btn btn-danger w-100"
                onClick={handlePlaceOrder}
              >
                Place Order
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
