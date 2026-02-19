

import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import SidebarFil from "./SidebarFil";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Layout({ cart }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("none");
  const [selectedMaterial, setSelectedMaterial] = useState("All"); // ← new

  return (
    <>
      <div className="flex min-h-screen">
        <SidebarFil
          sortOption={sortOption}
          setSortOption={setSortOption}
          selectedMaterial={selectedMaterial}
          setSelectedMaterial={setSelectedMaterial}
        />

        <div className="flex-1 min-w-0 flex flex-col">
          <Navbar
            cart={cart}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
          <main className="flex-1 min-w-0 p-4 overflow-y-auto">
            <Outlet context={{ searchQuery, sortOption, selectedMaterial }} />
          </main>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default Layout;
