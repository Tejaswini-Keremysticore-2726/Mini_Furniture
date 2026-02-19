import React from "react";
import { product } from "../../Data/product";
import ProductCard from "../../Component/ProductCard";
import { useOutletContext } from "react-router-dom";
import { useMemo } from "react";

function ShopBedroom({ addToCart }) {
  const { searchQuery, sortOption, selectedMaterial } = useOutletContext(); // from layout

  const q = (searchQuery || "").trim().toLowerCase();

  const filteredProducts = product
    .filter((item) => item.category.toLowerCase().includes("bedroom"))
    .filter((item) => item.name.toLowerCase().includes(q));


  const finallist = useMemo(() => {
    let arr = [...filteredProducts];

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
  }, [filteredProducts, sortOption, selectedMaterial]);

  return (
    <div>
      <h1 className="font-bold text-3xl py-3 p-3 mb-5">BEDROOM FURNITURE</h1>

      <div className="grid grid-cols-3 gap-3">
        {finallist.map((item) => (
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
