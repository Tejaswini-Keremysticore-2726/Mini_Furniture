

import React from "react";

function SidebarFil({ sortOption, setSortOption }) {
  return (
    <div className="w-70 h-screen border border-gray-200 bg-white shadow rounded-2xl p-2 m-1">
      <div>
        <div className="flex m-2">
          <h2 className="font-bold flex items-center text-amber-800 text-2xl">
            Woodzen
          </h2>
          <img
            src="/src/assets/furniture logo.png"
            alt=""
            className="w-40 flex justify-around items-center"
          />
        </div>
      </div>

      <div className="mt-6 p-2">
        <p className="font-semibold mb-2">Sort by Price</p>

        <select
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
          className="w-full border border-gray-300 rounded px-3 py-2"
        >
          <option value="none">Default</option>
          <option value="low">Low to High</option>
          <option value="high">High to Low</option>
        </select>
      </div>
    </div>
  );
}

export default SidebarFil;
