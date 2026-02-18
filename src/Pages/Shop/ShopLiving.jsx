import React from "react";
import { product } from "../../Data/product";
import ProductCard from "../../Component/ProductCard";
import { useOutletContext } from "react-router-dom";

function ShopLiving({ addToCart }) {
  // const filliving = product.filter(
  const { searchQuery } = useOutletContext();
  const q = (searchQuery || "").trim().toLowerCase();

  const filteredprod = product
    .filter((item) => item.category.toLowerCase() === "living")
    .filter((item) => item.name.toLowerCase().includes(q));

  //   (l) => l.category.toLowerCase() === "living",
  // );
  return (
    <>
      <div>
        <h1 className="font-bold text-2xl py-3 p-3 mb-5">
          LIVING ROOM FURNITURE
        </h1>
        <div className="grid grid-cols-3 gap-4">
          {filteredprod.map((items) => (
            <ProductCard
              key={items.category}
              product={items}
              addToCart={addToCart}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default ShopLiving;
