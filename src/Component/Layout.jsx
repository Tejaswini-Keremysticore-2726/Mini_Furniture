import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import SidebarFil from "./SidebarFil";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Layout({ cart }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("none");

  return (
    <>
      <div className="flex min-h-screen">
      <SidebarFil sortOption={sortOption} setSortOption={setSortOption} />

        <div className="flex-1 min-w-0 flex flex-col">
          <Navbar
            cart={cart}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
          <main className="flex-1 min-w-0 p-4 overflow-y-auto">
            <Outlet context={{ searchQuery ,sortOption}} />
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

// import React, { useState } from "react";
// import { Outlet } from "react-router-dom";
// import SidebarFil from "./SidebarFil";

// function Layout() {
//   const [sortOption, setSortOption] = useState("none");
//   const [searchQuery] = useState("");

//   return (
//     <div className="flex h-screen">
//       <SidebarFil sortOption={sortOption} setSortOption={setSortOption} />

//       <main className="flex-1 min-w-0 p-4 overflow-y-auto">
//         <Outlet context={{ searchQuery, sortOption }} />
//       </main>
//     </div>
//   );
// }

// export default Layout;

// // import React, { useState } from "react";
// // import { Outlet } from "react-router-dom";
// // import SidebarFil from "./SidebarFil";
// // import Navbar from "./Navbar"; // ✅ apne navbar ka correct path

// // function Layout({ cart }) {
// //   const [sortOption, setSortOption] = useState("none");
// //   const [searchQuery, setSearchQuery] = useState("");
// //   const cartCount = (cart || []).reduce(
// //     (sum, item) => sum + (item.qty || 0),
// //     0,
// //   );

// //   return (
// //     <div className="h-screen flex flex-col">
// //       {/* ✅ Navbar on top */}
// //       <Navbar
// //         searchQuery={searchQuery}
// //         setSearchQuery={setSearchQuery}
// //         // addToCart={addToCart}
// //         cartCount={cartCount}
// //       />

// //       {/* ✅ Sidebar + Pages */}
// //       <div className="flex flex-1 overflow-hidden">
// //         <SidebarFil sortOption={sortOption} setSortOption={setSortOption} />

// //         <main className="flex-1 min-w-0 p-4 overflow-y-auto">
// //           <Outlet context={{ searchQuery, sortOption }} />
// //         </main>
// //       </div>
// //     </div>
// //   );
// // }

// // export default Layout;
