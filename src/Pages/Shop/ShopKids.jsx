import React from "react";
import ProductCard from "../../Component/ProductCard";
import { product } from "../../Data/product";
import { useOutletContext } from "react-router-dom";

function ShopKids({ addToCart }) {
  // const filkids = product.filter((K) => K.category.toLowerCase() === "kids");

  const { searchQuery } = useOutletContext();

  const q = (searchQuery || "").trim().toLowerCase();

  const filteredprod = product
    .filter((items) => items.category === "Kids")
    .filter((items) => items.name.toLowerCase().includes(q));
  return (
    <>
      <div>
        <h1 className="text-3xl font-bold mb-5 py-3 p-2">KIDS FURNITURE</h1>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {filteredprod.map((items) => (
          <ProductCard
            key={items.category}
            product={items}
            addToCart={addToCart}
          />
        ))}
      </div>
    </>
  );
}

export default ShopKids;
