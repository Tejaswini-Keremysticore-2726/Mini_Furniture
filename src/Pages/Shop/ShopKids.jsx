import React, { useMemo } from "react";
import ProductCard from "../../Component/ProductCard";
import { product } from "../../Data/product";
import { useOutletContext } from "react-router-dom";

function ShopKids({ addToCart }) {
  // const filkids = product.filter((K) => K.category.toLowerCase() === "kids");

  const { searchQuery, sortOption } = useOutletContext();

  const q = (searchQuery || "").trim().toLowerCase();

  const filteredprod = product
    .filter((items) => items.category === "Kids")
    .filter((items) => items.name.toLowerCase().includes(q));

  const materials = [
    "Oak Wood",
    "Engineered Wood",
    "MDF",
    "Fabric",
    "Metal",
    "Plywood",
    "Pine Wood",
    "Leatherette",
    "Teak Wood",
    "Plastic",
    "Polyester",
    "wooden",
  ];
  const finallist = useMemo(() => {
    let arr = [...filteredprod];
    if (sortOption === "low") {
      arr.sort((a, b) => Number(a.price) - Number(b.price));
    } else if (sortOption === "high") {
      arr.sort((a, b) => Number(b.price) - Number(a.price));
    } else if (materials.includes(sortOption)) {
      // ✅ correct way to check multiple values
      arr = arr.filter(
        (item) => item.material.toLowerCase() === sortOption.toLowerCase(),
      );
    }
    return arr;
  }, [filteredprod, sortOption]);
  return (
    <>
      <div>
        <h1 className="text-3xl font-bold mb-5 py-3 p-2">KIDS FURNITURE</h1>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {finallist.map((items) => (
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
