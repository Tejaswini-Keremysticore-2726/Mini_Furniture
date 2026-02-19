import React from "react";

function SidebarFil({ sortOption, setSortOption }) {
  return (
    <div className="w-65 h-screen border-r border-gray-200 bg-white p-4">
      <div className="flex items-center mb-6">
        <h2 className="font-bold text-amber-800 text-2xl">Woodzen</h2>
        <img
          src="/src/assets/furniture logo.png"
          alt="logo"
          className="w-40 flex justify-around items-center"
        />
      </div>

      <p className="font-semibold mb-2">Sort by Price</p>
      <select
        value={sortOption}
        onChange={(e) => setSortOption(e.target.value)}
        className="w-full border border-gray-300 rounded px-3 py-2"
      >
        <option value="none">Default</option>
        <option value="low">Low to High</option>
        <option value="high">High to Low</option>
        <option value="Oak Wood"> Oak Wood</option>
        <option value="Engineered Wood"> Engineered Wood</option>
        <option value="MDF"> MDF</option>
        <option value="Fabric">Fabric</option>
        <option value="Metal">Metal</option>
        <option value="Pine Wood">Pine Wood</option>
        <option value="Plywood">Plywood</option>
        <option value="Leatherette">Leatherette</option>
        <option value="Teak Wood">Teak Wood</option>
        <option value="Plastic">Plastic</option>
        <option value="Polyester">Polyester</option>
        <option value="wooden">wooden</option>
      </select>
    </div>
  );
}

export default SidebarFil;
