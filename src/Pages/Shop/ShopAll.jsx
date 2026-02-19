import React, { useMemo } from "react";
import { product } from "../../Data/product";
import ProductCard from "../../Component/ProductCard";
import { useOutletContext } from "react-router-dom";

function ShopAll({ addToCart }) {
  const { searchQuery, sortOption, selectedMaterial } = useOutletContext(); 

  const q = (searchQuery || "").trim().toLowerCase();

  const filteredList = q
    ? product.filter((item) => item.name.toLowerCase().includes(q))
    : product;

  const finalListToShow = useMemo(() => {
    let arr = [...filteredList];

    // price sorting
    if (sortOption === "low") {
      arr.sort((a, b) => Number(a.price) - Number(b.price));
    } else if (sortOption === "high") {
      arr.sort((a, b) => Number(b.price) - Number(a.price));
    }

    // material filter
    if (selectedMaterial && selectedMaterial !== "All") {
      arr = arr.filter(
        (item) =>
          item.material.toLowerCase() === selectedMaterial.toLowerCase(),
      );
    }

    return arr;
  }, [filteredList, sortOption, selectedMaterial]); // ← selectedMaterial add

  return (
    <div>
      <h1 className="font-bold text-3xl py-3 p-3 mb-5">ALL PRODUCTS</h1>

      <div className="grid grid-cols-3 gap-4">
        {finalListToShow.map((item) => (
          <ProductCard key={item.id} product={item} addToCart={addToCart} />
        ))}
      </div>

      {q && finalListToShow.length === 0 && (
        <p className="p-3 font-semibold">Sorry😔 No product found.</p>
      )}
    </div>
  );
}

export default ShopAll;
