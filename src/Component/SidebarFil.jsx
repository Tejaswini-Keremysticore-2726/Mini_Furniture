import React from "react";

function SidebarFil() {
  return (
    <>
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
      </div>
    </>
  );
}

export default SidebarFil;
