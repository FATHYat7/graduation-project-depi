// // src/Pages/Payment.jsx
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const Payment = () => {
//   const navigate = useNavigate();
//   const [cardNumber, setCardNumber] = useState("");
//   const [expiry, setExpiry] = useState("");
//   const [cvv, setCvv] = useState("");
//   const [name, setName] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // هنا يمكنك عمل اتصال بالبوابة الفعلية أو API الدفع
//     alert("Payment Successful!");
//     navigate("/success"); // صفحة النجاح بعد الدفع
//   };

//   return (
//     <div className="container my-5">
//       <h2 className="mb-4">Payment Details</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="mb-3">
//           <label className="form-label">Cardholder Name</label>
//           <input
//             type="text"
//             className="form-control"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             required
//           />
//         </div>

//         <div className="mb-3">
//           <label className="form-label">Card Number</label>
//           <input
//             type="text"
//             className="form-control"
//             value={cardNumber}
//             onChange={(e) => setCardNumber(e.target.value)}
//             maxLength={16}
//             required
//           />
//         </div>

//         <div className="row mb-3">
//           <div className="col">
//             <label className="form-label">Expiry (MM/YY)</label>
//             <input
//               type="text"
//               className="form-control"
//               value={expiry}
//               onChange={(e) => setExpiry(e.target.value)}
//               placeholder="MM/YY"
//               required
//             />
//           </div>
//           <div className="col">
//             <label className="form-label">CVV</label>
//             <input
//               type="password"
//               className="form-control"
//               value={cvv}
//               onChange={(e) => setCvv(e.target.value)}
//               maxLength={3}
//               required
//             />
//           </div>
//         </div>

//         <button type="submit" className="btn btn-danger w-100">
//           Pay Now
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Payment;




// src/Pages/PaymentPage.jsx
import React, { useContext, useState } from "react";
import { ShopContext } from "../Components/ShopContext";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const PaymentPage = () => {
  const { cart } = useContext(ShopContext);
  const navigate = useNavigate();

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shipping = "Free";
  const total = subtotal;

  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");

  const handlePayment = (e) => {
    e.preventDefault();
    alert("Payment Successful! ✅");
    navigate("/"); // بعد الدفع نرجع للصفحة الرئيسية
  };

  return (
    <div className="container my-5">
      <h2 className="mb-4 text-center fw-bold text-danger">Secure Payment</h2>

      <div className="row justify-content-center">
        {/* Order Summary */}
        <div className="col-lg-5 mb-4">
          <div className="p-4 shadow rounded border">
            <h5 className="mb-3">Order Summary</h5>
            {cart.map((item) => (
              <div key={item.id} className="d-flex justify-content-between mb-2">
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
            <div className="d-flex justify-content-between fw-bold mt-2">
              <span>Total:</span>
              <span>${total}</span>
            </div>
          </div>
        </div>

        {/* Payment Form */}
        <div className="col-lg-5">
          <div className="p-4 shadow rounded border">
            <h5 className="mb-3">Card Details</h5>
            <form onSubmit={handlePayment}>
              <div className="mb-3">
                <label className="form-label">Card Number</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="1234 5678 9012 3456"
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value)}
                  required
                />
              </div>

              <div className="row">
                <div className="col-md-6 mb-3">
                  <label className="form-label">Expiry</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="MM/YY"
                    value={expiry}
                    onChange={(e) => setExpiry(e.target.value)}
                    required
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">CVV</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="123"
                    value={cvv}
                    onChange={(e) => setCvv(e.target.value)}
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                className="btn btn-danger w-100 mt-3"
                style={{ transition: "0.3s", fontWeight: "600" }}
                onMouseOver={(e) => (e.target.style.transform = "scale(1.05)")}
                onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
              >
                Pay ${total}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
