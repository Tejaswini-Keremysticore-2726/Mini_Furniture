import React from "react";
import { product } from "../Data/product";

const allMaterials = ["All", ...new Set(product.map((item) => item.material))];

function SidebarFil({
  sortOption,
  setSortOption,
  selectedMaterial,
  setSelectedMaterial,
}) {
  return (
    <div className="w-65 border-r border-gray-200 bg-white p-4 min-h-screen">
      <div className="flex items-center mb-6">
        <h2 className="font-bold text-amber-800 text-2xl">Woodzen</h2>
        <img
          src="/src/assets/furniture logo.png"
          alt="logo"
          className="w-40 flex justify-around items-center"
        />
      </div>

      {/* price */}
      <p className="font-semibold mb-2">Sort by Price</p>
      <select
        value={sortOption}
        onChange={(e) => setSortOption(e.target.value)}
        className="w-full border border-gray-300 rounded px-3 py-2 mb-6"
      >
        <option value="none">Default</option>
        <option value="low">Low to High</option>
        <option value="high">High to Low</option>
      </select>

      {/* material */}
      <p className="font-semibold mb-2">Sort by Material</p>
      <select
        value={selectedMaterial}
        onChange={(e) => setSelectedMaterial(e.target.value)}
        className="w-full border border-gray-300 rounded px-3 py-2"
      >
        {allMaterials.map((mat) => (
          <option key={mat} value={mat}>
            {mat}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SidebarFil;
