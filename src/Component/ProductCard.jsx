import { useState } from "react";
import { Link } from "react-router-dom";
// import Cart from "./Cart";
import View from "./View";

export default function ProductCard({ product, addToCart }) {
  const [view, setView] = useState([]);
  const [select, setSelect] = useState(false);

  return (
    <>
      <div className="rounded-3xl border border-gray-300 bg-white p-4 shadow-sm hover:shadow-md transition">
        {/* Image */}
        <div className="relative overflow-hidden rounded-2xl bg-gray-100 ">
          <img
            src={product.image}
            alt={product.name}
            className="relative rounded-2xl bg-gray-100 aspect-[4/3] transition-transform duration-500 hover:scale-110"
            onError={(e) => {
              e.currentTarget.src =
                "https://placehold.co/600x400?text=Furniture";
            }}
          />
        </div>

        {/* Info */}
        <div className="mt-4">
          <div className="flex items-start justify-between gap-3">
            <h3 className="font-semibold leading-tight">{product.name}</h3>

            <div className="text-right">
              <div className="font-bold">₹{product.price.toLocaleString()}</div>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-4 flex gap-2">
          <button
            className="flex-1 rounded-2xl px-4 py-2 text-sm font-medium bg-amber-900 font-bold hover:bg-amber-950 hover:font-semibold text-white hover:opacity-90 transition"
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>

          {/* View button only clickable */}
          <button
            className="rounded-2xl px-4 py-2 text-sm font-medium  font-bold hover:bg-amber-950 hover:font-semibold border border-gray-200  hover:text-white transition"
            onClick={() => setView(product) || setSelect(true)}
          >
            View
          </button>
        </div>
      </div>

      <View select={select} setSelect={setSelect} view={view} />
    </>
  );
}
