// import React, { useState } from "react";
import { product } from "../../Data/product";
import ProductCard from "../../Component/ProductCard";
import { useOutletContext } from "react-router-dom";


function ShopAll({ addToCart }) {
  // const [sort, setSort] = useState(none);
  // const memory = useMemo(() => {
  //   const arr = [...product];
  // });

  // if(sort == "lowtohigh"){

  // }
  const { searchQuery } = useOutletContext();

  const q = (searchQuery || "").trim().toLowerCase();

  const listToShow = q
    ? product.filter((item) => item.name.toLowerCase().includes(q))
    : product;

  return (
    <div>
      <h1 className="font-bold text-3xl py-3 p-3 mb-5">ALL PRODUCTS</h1>

      <div className="grid grid-cols-3 gap-4">
        {listToShow.map((item) => (
          <ProductCard key={item.id} product={item} addToCart={addToCart} />
        ))}
      </div>

      {/* optional: if you want */}
      {q && listToShow.length === 0 && (
        <p className="p-3 font-semibold">No product found.</p>
      )}
    </div>
  );
}

export default ShopAll;
