// src/Pages/CartPage.jsx
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../Components/ShopContext";

const CartPage = () => {
  const { cart, updateQuantity, removeFromCart } = useContext(ShopContext);

  const subtotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const shipping = "Free";
  const total = subtotal;

  if (cart.length === 0) {
    return (
      <div className="container my-5">
        <h3 className="mb-4">Your Cart</h3>
        <div className="alert alert-info text-center">
          Cart is empty — <Link to="/products">Go shopping</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container my-5">
      <h3 className="mb-4">Your Cart</h3>

      {/* Header */}
      <div className="row py-3 bg-white shadow-sm rounded mb-4">
        <div className="col-md-3 fw-bold">Product</div>
        <div className="col-md-3 fw-bold">Price</div>
        <div className="col-md-3 fw-bold">Quantity</div>
        <div className="col-md-2 fw-bold">Subtotal</div>
        <div className="col-md-1 fw-bold">Remove</div>
      </div>

      {/* Items */}
      <div className="bg-white p-3 shadow-sm rounded">
        {cart.map((item) => (
          <div
            key={item.id}
            className="row align-items-center py-4 border-bottom"
          >
            <div className="col-md-3 d-flex align-items-center">
              <img
                src={item.image || "https://via.placeholder.com/60"}
                alt={item.name}
                width="60"
                className="me-2 rounded"
              />
              {item.name}
            </div>

            <div className="col-md-3">${item.price}</div>

            <div className="col-md-3">
              <input
                type="number"
                min="1"
                value={item.quantity}
                onChange={(e) =>
                  updateQuantity(item.id, parseInt(e.target.value))
                }
                className="form-control text-center"
                style={{ width: "80px" }}
              />
            </div>

            <div className="col-md-2 fw-bold">${item.price * item.quantity}</div>

            <div className="col-md-1">
              <button
                className="btn btn-outline-danger btn-sm"
                onClick={() => removeFromCart(item.id)}
              >
                ❌
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Total */}
      <div className="row mt-5">
        <div className="col-md-6"></div>
        <div className="col-md-6 d-flex justify-content-end">
          <div className="card p-4" style={{ width: "350px" }}>
            <h5 className="fw-bold mb-3">Cart Total</h5>
            <div className="d-flex justify-content-between">
              <span>Subtotal:</span>
              <span>${subtotal}</span>
            </div>
            <div className="d-flex justify-content-between">
              <span>Shipping:</span>
              <span>{shipping}</span>
            </div>
            <div className="d-flex justify-content-between fw-bold mb-3">
              <span>Total:</span>
              <span>${total}</span>
            </div>
            <Link to="/checkout" className="btn btn-danger w-100">
              Proceed to Checkout
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
