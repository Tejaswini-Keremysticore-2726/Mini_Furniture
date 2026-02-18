import React from "react";
import { product } from "../../Data/product";
import ProductCard from "../../Component/ProductCard";
import { useOutletContext } from "react-router-dom";

export default function ShopOutdoor({ addToCart }) {
  const { searchQuery } = useOutletContext();
  const q = (searchQuery || "").trim().toLowerCase();

  const filterdpro = product
    .filter((item) => item.category.toLowerCase() === "outdoor")
    .filter((item) => item.name.toLowerCase().includes(q));

  // const filoutdoor = product.filter(
  //   (O) => O.category.toLowerCase() === "outdoor",
  // );
  return (
    <div>
      <h1 className="font-bold text-3xl p-3 mb-5 py-3">OUTDOOR FURNITURE</h1>
      <div className="grid grid-cols-3 gap-4">
        {filterdpro.map((items) => (
          <ProductCard
            key={items.category}
            product={items}
            addToCart={addToCart}
          />
        ))}
      </div>
    </div>
  );
}
