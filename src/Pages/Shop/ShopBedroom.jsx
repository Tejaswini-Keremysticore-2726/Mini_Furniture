import React from "react";
import { product } from "../../Data/product";
import ProductCard from "../../Component/ProductCard";
import { useOutletContext } from "react-router-dom";

function ShopBedroom({ addToCart }) {
  const { searchQuery } = useOutletContext();

  const q = (searchQuery || "").trim().toLowerCase();

  // Filter bedroom category + search in ONE chain
  const filteredProducts = product
    .filter((item) => item.category.toLowerCase().includes("bedroom"))
    .filter((item) => item.name.toLowerCase().includes(q));

  return (
    <div>
      
      <h1 className="font-bold text-3xl py-3 p-3 mb-5">BEDROOM FURNITURE</h1>

      <div className="grid grid-cols-3 gap-3">
        {filteredProducts.map((item) => (
          <ProductCard key={item.id} product={item} addToCart={addToCart} />
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <p className="p-3 font-semibold">No product found.</p>
      )}
    </div>
  );
}

export default ShopBedroom;
