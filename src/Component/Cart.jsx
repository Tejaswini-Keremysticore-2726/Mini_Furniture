import React from "react";
import { useNavigate } from "react-router-dom";

function Cart({ cart, setCart }) {
  const navigate = useNavigate();
  const handleDeleteCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const handleClear = () => setCart([]);

  const handlebuynow = () => {
    if (cart.length === 0)
      return alert(
        "Your cart is empty! Please add one or more items to continue.",
      );
    navigate("/payment");
  };

  const increseQty = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item,
      ),
    );
  };

  const decreaseQty = (id) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id
            ? item.qty > 1
              ? { ...item, qty: item.qty - 1 }
              : null
            : item,
        )
        .filter(Boolean),
    );
  };

  // ✅ total (no setCart here)
  const total = cart.reduce(
    (sum, item) => sum + Number(item.price) * item.qty,
    0,
  );

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Shopping Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty please add furniture to start shopping</p>
      ) : (
        <>
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between mb-3 border border-gray-300 p-3 rounded-xl"
            >
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  className="w-20 h-20 rounded-lg"
                  alt={item.name}
                />

                <div className="font-semibold">
                  <p>{item.name}</p>
                  <br />
                  <p>${Number(item.price) * item.qty}</p>

                  <div className="mt-2 flex items-center gap-3">
                    <button
                      onClick={() => decreaseQty(item.id)}
                      className="w-10 h-10 bg-amber-900 text-2xl text-white font-bold hover:bg-amber-950 rounded-lg"
                    >
                      -
                    </button>

                    <span className="font-bold">{item.qty}</span>

                    <button
                      onClick={() => increseQty(item.id)}
                      className="w-10 h-10 bg-amber-900 text-2xl text-white font-bold hover:bg-amber-950 rounded-lg"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>

              <button
                onClick={() => handleDeleteCart(item.id)}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-semibold"
              >
                Remove
              </button>
            </div>
          ))}

          <div className="mt-4">
            <p className="font-bold text-lg">Total: ${total}</p>

            <div className="flex justify-between">
              <button
                onClick={handleClear}
                className="bg-black text-white font-bold px-4 py-2 mt-2 rounded"
              >
                Clear Cart
              </button>
              <button
                onClick={handlebuynow}
                className="bg-blue-700 text-white font-bold px-4 py-2 mt-2 rounded"
              >
                Buy Now
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
