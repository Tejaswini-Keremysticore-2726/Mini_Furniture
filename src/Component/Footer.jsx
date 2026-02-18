import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="w-full bg-black text-amber-600 mt-10 ">
        {/* Grid Section */}
        <div className="grid grid-cols-3 p-5 gap-5">
          {/* Logo Section */}
          <div className="flex">
            <img
              src="/src/assets/furniture logo.png"
              alt=""
              className="w-80 h-50 mt-10"
            />
            <div className=" mt-15 flex flex-col gap-3">
              <h2 className="text-2xl font-bold mt-5">Woodzen</h2>
              <p className="text-lg font-semibold">
                Where Comfort Meets — Craftsmanship 😊
              </p>

              <div className=" flex gap-2 ml-5">
                <i className="fa-brands fa-facebook text-[20px] hover:text-amber-800 cursor-pointer"></i>
                <i className="fa-brands fa-instagram text-[20px] hover:text-amber-800 cursor-pointer"></i>
                <i className="fa-brands fa-x-twitter text-[20px] hover:text-amber-800 cursor-pointer"></i>
                {/* <i className="fa-brands fa-whatsapp text-[20px] hover:text-amber-800 cursor-pointer"></i> */}
              </div>
            </div>
          </div>

          {/* About Section */}
          <div className="flex flex-col gap-4 text-center mt-15">
            <Link to="/about">
              <h3 className="font-bold text-xl">About</h3>
            </Link>
            <p>Timeless comfort. Crafted to last.</p>
            <h5 className="font-bold">What we Stand for?</h5>
            <ul>
              <li>Quality First</li>
              <li>Modern Design</li>
              <li>Customer Care</li>
            </ul>
          </div>

          {/* Image Section */}
          <div className="grid grid-cols-3 gap-3">
            <img
              src="../../src/assets/furnished1.jpg"
              alt=""
              className="w-50 h-40 flex justify-around items-center mb-0
             rounded-lg"
            />
            <img
              src="../../src/assets/furniture2.jpg"
              alt=""
              className="w-50 h-40 flex justify-around items-center mb-0 rounded-lg"
            />
            <img
              src="../../src/assets/furntiutr3.jpeg"
              alt=""
              className="w-50 h-40 flex justify-around items-center mb-0 rounded-lg"
            />
            <img
              src="../../src/assets/furniture4.jpg"
              alt=""
              className="w-50 h-40 flex justify-around items-center mb-0 rounded-lg"
            />
            <img
              src="../../src/assets/furniture6.jpeg"
              alt=""
              className="w-50 h-40 flex justify-around items-center mb-0 rounded-lg"
            />
            <img
              src="../../src/assets/furnitur7.jpg"
              alt=""
              className="w-50 h-40 flex justify-around items-center mb-0 rounded-lg"
            />
          </div>
        </div>

        {/* FULL Horizontal Line */}
        <hr className="border-t border-gray-600 w-full" />

        {/* Bottom Copyright */}
        <div className="text-center py-2 text-gray-400 flex flex-col gap-4">
          <p>
            Thank you for choosing us — let’s build a better space, together.
          </p>
          &copy; 2026 Woodzen. All rights reserved.
          <div className=" text-center text-gray-500"></div>
        </div>
      </div>
    </>
  );
}

export default Footer;
