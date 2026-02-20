import React from "react";
import { useNavigate } from "react-router-dom";

function OrderPay({ cart, setCart }) {
  const navigate = useNavigate();

  const total = cart.reduce(
    (sum, item) => sum + Number(item.price) * item.qty,
    0,
  );

  const handleContinue = () => {
    setCart([]); // ✅ clear cart
    navigate("/");
  };

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-4 text-green-600">
        🎉 Order Placed Successfully!
      </h1>

      <div className="mb-4">
        {cart.map((item) => (
          <div key={item.id} className="flex justify-between">
            <p>{item.name}</p>
            <p>${Number(item.price) * item.qty}</p>
          </div>
        ))}
      </div>

      <h2 className="font-bold text-lg">Total: ${total}</h2>

      <button
        onClick={handleContinue}
        className="mt-4 bg-black text-white px-4 py-2 rounded"
      >
        Continue Shopping
      </button>
    </div>
  );
}

export default OrderPay;





