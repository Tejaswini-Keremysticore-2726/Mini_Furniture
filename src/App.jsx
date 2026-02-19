import { Routes, Route } from "react-router-dom";

import Layout from "./Component/Layout";
import ShopAll from "./Pages/Shop/ShopAll";
import ShopBedroom from "./Pages/Shop/ShopBedroom";
import ShopLiving from "./Pages/Shop/ShopLiving";
import ShopOutdoor from "./Pages/Shop/ShopOutdoor";
import ShopKids from "./Pages/Shop/ShopKids";
import About from "./Pages/About";
import Cart from "./Component/Cart";
import { useState, useEffect } from "react";

import "./App.css";

function App() {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    
    // prev cart's array
    setCart((prev) => {
      const found = prev.find((item) => item.id === product.id);

      if (found) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item,
        );
      }

      return [...prev, { ...product, qty: 1 }];
    });
  };
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   // simulate loading delay (2 seconds)
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 1000);
  // }, []);

  // if (loading) {
  //   return (
  //     <div className="flex justify-center items-center h-screen bg-gray-50">
  //       <div className="relative">
  //         <div className="w-20 h-20 border-4 border-transparent border-t-blue-500 border-r-purple-500 rounded-full animate-spin"></div>
  //         <div className="absolute inset-0 flex items-center justify-center text-sm font-semibold text-gray-600">
  //           Loading
  //         </div>
  //       </div>
  //     </div>
  //   );
  // }

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout cart={cart} />}>
          {/* ✅ addToCart ko pages me pass karo */}
          <Route index element={<ShopAll addToCart={addToCart} />} />
          <Route
            path="bedroom"
            element={<ShopBedroom addToCart={addToCart} />}
          />
          <Route
            path="outdoor"
            element={<ShopOutdoor addToCart={addToCart} />}
          />
          <Route path="living" element={<ShopLiving addToCart={addToCart} />} />
          <Route path="kids" element={<ShopKids addToCart={addToCart} />} />

          <Route path="about" element={<About />} />

          {/* ✅ Cart page route */}
          <Route path="cart" element={<Cart cart={cart} setCart={setCart} />} />
          {/* <Route path="/" element={<Layout cart={cart} />}/> */}

        </Route>
      </Routes>
    </>
  );
}

export default App;
