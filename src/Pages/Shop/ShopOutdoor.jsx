import React, { useMemo } from "react";
import { product } from "../../Data/product";
import ProductCard from "../../Component/ProductCard";
import { useOutletContext } from "react-router-dom";

export default function ShopOutdoor({ addToCart }) {
  const { searchQuery, sortOption, selectedMaterial } = useOutletContext();
  const q = (searchQuery || "").trim().toLowerCase();

  const filterdpro = product
    .filter((item) => item.category.toLowerCase() === "outdoor")
    .filter((item) => item.name.toLowerCase().includes(q));

  const finallist = useMemo(() => {
    let arr = [...filterdpro];

    if (sortOption === "low") {
      arr.sort((a, b) => Number(a.price) - Number(b.price));
    } else if (sortOption === "high") {
      arr.sort((a, b) => Number(b.price) - Number(a.price));
    }
    if (selectedMaterial && selectedMaterial !== "All") {
      arr = arr.filter(
        (item) =>
          item.material.toLowerCase() === selectedMaterial.toLowerCase(),
      );
    }
    return arr;
  }, [filterdpro, sortOption, selectedMaterial]);

  return (
    <div>
      <h1 className="font-bold text-3xl p-3 mb-5 py-3">OUTDOOR FURNITURE</h1>
      <div className="grid grid-cols-3 gap-4">
        {finallist.map((items) => (
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
