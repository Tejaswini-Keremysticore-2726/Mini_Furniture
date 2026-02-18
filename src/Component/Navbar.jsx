// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// // import Cart from "./Cart";
// // import ProductCard from "./ProductCard";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

// function Navbar({ cart = [] }) {
//   const [open, setOpen] = useState(false);

//   return (
//     <div className="px-4 rounded-2xl text-[20px]">
//       <ul className="flex flex-wrap justify-end gap-20 rounded-2xl p-10 border mt-1 items-center border-gray-200 font-bold shadow">
//         <Link to="/" className="hover:text-amber-900">
//           Home
//         </Link>
//         <Link to="/about" className="hover:text-amber-900">
//           About
//         </Link>

//         <li className="relative">
//           <button
//             type="button"
//             onClick={() => setOpen((prev) => !prev)}
//             className="px-2 hover:text-amber-900 cursor-pointer"
//           >
//             ShopAll &nbsp;
//             <FontAwesomeIcon icon={faAngleDown} className="text-sm" />
//           </button>

//           {open && (
//             <div className="absolute left-0 top-full mt-2 w-40 bg-white border border-gray-200 rounded-xl shadow-md z-50">
//               <Link
//                 to="/bedroom"
//                 onClick={() => setOpen(false)}
//                 className="block px-4 py-2 hover:bg-gray-100 hover:rounded-xl"
//               >
//                 Bedroom
//               </Link>
//               <Link
//                 to="/living"
//                 onClick={() => setOpen(false)}
//                 className="block px-4 py-2 hover:bg-gray-100 hover:rounded-xl"
//               >
//                 Living Room
//               </Link>
//               <Link
//                 to="/outdoor"
//                 onClick={() => setOpen(false)}
//                 className="block px-4 py-2 hover:bg-gray-100 hover:rounded-xl"
//               >
//                 Outdoor
//               </Link>
//               <Link
//                 to="/kids"
//                 onClick={() => setOpen(false)}
//                 className="block px-4 py-2 hover:bg-gray-100 hover:rounded-xl"
//               >
//                 Kids
//               </Link>
//               <Link
//                 to="/"
//                 onClick={() => setOpen(false)}
//                 className="block px-4 py-2 hover:bg-gray-100 hover:rounded-xl"
//               >
//                 All
//               </Link>
//             </div>
//           )}
//         </li>

//         {/* <li className="text-2xl">🛒</li> */}
//         {/* <li className="relative">
//   <Link to="/cart" className="text-2xl">🛒</Link>

//   {cart.length > 0 && (
//     <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs px-2 rounded-full">
//       {cart.length}
//     </span>
//   )}
// </li> */}

//         <li className="relative">
//           <Link to="/cart" className="text-2xl">
//             🛒
//           </Link>
//           {cart.length > 0 && (
//             <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs px-2 rounded-full">
//               {cart.length}
//             </span>
//           )}
//         </li>
//       </ul>
//     </div>
//   );
// }

// export default Navbar;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

function Navbar({ cart = [], searchQuery, setSearchQuery }) {
  const [open, setOpen] = useState(false);

  // ✅ total quantity calculate karega (agar qty nahi hai to 1 maan lega)
  const totalItems = cart.reduce(
    (sum, item) => sum + (item.qty ? item.qty : 1),
    0,
  );

  return (
    <div className="px-4 rounded-2xl text-[20px]">
      <div className="flex flex-wrap justify-between gap-20 rounded-2xl p-10 border mt-1 items-center border-gray-200 font-bold shadow">
        <div className="bg-white shadow-2xl px-3 py-1 rounded flex items-center gap-4">
          <i className="fa-solid fa-magnifying-glass text-amber-900 hover:text-amber-950"></i>
          <input
            className="outline-none bg-transparent text-[18px] p-2"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search Your fav"
          />
        </div>
        <ul className="flex justify-end gap-15">
          <Link to="/" className="hover:text-amber-900">
            Home
          </Link>

          <Link to="/about" className="hover:text-amber-900">
            About
          </Link>

          <li className="relative">
            <button
              type="button"
              onClick={() => setOpen((prev) => !prev)}
              className="px-2 hover:text-amber-900 cursor-pointer"
            >
              Shop &nbsp;
              <FontAwesomeIcon icon={faAngleDown} className="text-sm" />
            </button>

            {open && (
              <div className="absolute left-0 top-full mt-2 w-40 bg-white border border-gray-200 rounded-xl shadow-md z-50">
                <Link
                  to="/living"
                  onClick={() => setOpen(false)}
                  className="block px-4 py-2 hover:bg-gray-100 hover:rounded-xl"
                >
                  Living Room
                </Link>

                <Link
                  to="/bedroom"
                  onClick={() => setOpen(false)}
                  className="block px-4 py-2 hover:bg-gray-100 hover:rounded-xl"
                >
                  Bedroom
                </Link>
                <Link
                  to="/outdoor"
                  onClick={() => setOpen(false)}
                  className="block px-4 py-2 hover:bg-gray-100 hover:rounded-xl"
                >
                  Outdoor
                </Link>

                <Link
                  to="/kids"
                  onClick={() => setOpen(false)}
                  className="block px-4 py-2 hover:bg-gray-100 hover:rounded-xl"
                >
                  Kids
                </Link>

                <Link
                  to="/"
                  onClick={() => setOpen(false)}
                  className="block px-4 py-2 hover:bg-gray-100 hover:rounded-xl"
                >
                  All
                </Link>
              </div>
            )}
          </li>

          {/* 🛒 Cart Icon */}
          <li className="relative">
            <Link to="/cart" className="text-2xl">
              🛒
            </Link>

            {totalItems > 0 && (
              <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs px-2 py-[2px] rounded-full">
                {totalItems}
              </span>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
