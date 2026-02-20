import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function PaymentDetails() {
  const navigate = useNavigate();
  const [pay, setpay] = useState({
    username: "",
    contact: "",
    email: "",
    address: "",
    pin: "",
    city: "",
  });

  const [open, setOpen] = useState(false); // for opening and closing dropdown
  const [selected, setSelected] = useState();
  const option = ["Cash on Delivery", "UPI", "Credit Card"]; //dummy items

  const handledata = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setpay((prev) => ({ ...prev, [name]: value }));
  };

  const handleError = () => {
    if (
      !pay.username ||
      !pay.contact ||
      !pay.email ||
      !pay.address ||
      !pay.pin ||
      !pay.city
    ) {
      alert("all feilds are required");
      return false;
    } else if (pay.contact.length !== 10) {
      alert("Mobile number must be exactly 10 digits");
      return false;
    } else if (!pay.email.includes("@")) {
      alert("email must contains @");
      return false;
    } else if (pay.pin.length !== 6) {
      alert("Pincode must be exactly 6 digits");
      return false;
    }
    return true;
  };

  const handlSubmit = () => {
    if (!handleError()) return;
    alert("Details saved successfully ✅");
    navigate("/order");
  };

  return (
    <>
      <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 px-4 py-10">
        <div className="w-full max-w-lg">
          {/* Card */}
          <div className="bg-white/90 backdrop-blur rounded-2xl shadow-xl border border-gray-200 p-6 sm:p-8">
            {/* Header */}
            <div className="mb-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
                Payment Details
              </h2>
              <p className="text-gray-500 mt-1 text-sm sm:text-base">
                Please fill in your delivery details to continue.
              </p>
            </div>

            {/* Form */}
            <div className="flex flex-col gap-4 font-semibold">
              {/* Name */}
              <div>
                <label className="block text-sm text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  className="w-full border border-gray-300 rounded-xl p-3 text-gray-800 placeholder-gray-400 outline-none focus:ring-2 focus:ring-gray-300 focus:border-gray-400 transition"
                  type="text"
                  placeholder="eg: Xyz"
                  name="username"
                  value={pay.username}
                  onChange={handledata}
                />
              </div>

              {/* Contact */}
              <div>
                <label className="block text-sm text-gray-700 mb-1">
                  Mobile Number
                </label>
                <input
                  className="w-full border border-gray-300 rounded-xl p-3 text-gray-800 placeholder-gray-400 outline-none focus:ring-2 focus:ring-gray-300 focus:border-gray-400 transition"
                  type="tel"
                  placeholder="eg: 7859863655"
                  name="contact"
                  value={pay.contact}
                  onChange={handledata}
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  className="w-full border border-gray-300 rounded-xl p-3 text-gray-800 placeholder-gray-400 outline-none focus:ring-2 focus:ring-gray-300 focus:border-gray-400 transition"
                  type="email"
                  placeholder="eg: xyz23@gmail.com"
                  name="email"
                  value={pay.email}
                  onChange={handledata}
                />
              </div>

              {/* Address */}
              <div>
                <label className="block text-sm text-gray-700 mb-1">
                  Full Address
                </label>
                <textarea
                  className="w-full border border-gray-300 rounded-xl p-3 text-gray-800 placeholder-gray-400 outline-none focus:ring-2 focus:ring-gray-300 focus:border-gray-400 transition resize-none"
                  placeholder="eg: abc ahmedabad 3800019"
                  name="address"
                  value={pay.address}
                  onChange={handledata}
                  rows={4}
                ></textarea>
              </div>

              {/* City + Pin (responsive grid) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-700 mb-1">
                    City
                  </label>
                  <input
                    className="w-full border border-gray-300 rounded-xl p-3 text-gray-800 placeholder-gray-400 outline-none focus:ring-2 focus:ring-gray-300 focus:border-gray-400 transition"
                    type="text"
                    placeholder="eg : Pune"
                    name="city"
                    value={pay.city}
                    onChange={handledata}
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-700 mb-1">
                    Pincode
                  </label>
                  <input
                    className="w-full border border-gray-300 rounded-xl p-3 text-gray-800 placeholder-gray-400 outline-none focus:ring-2 focus:ring-gray-300 focus:border-gray-400 transition"
                    type="number"
                    maxLength="6"
                    placeholder="eg : 980012"
                    name="pin"
                    value={pay.pin}
                    onChange={handledata}
                  />
                </div>
                <div className="relative w-64">
                  <button
                    onClick={() => setOpen(!open)}
                    className="w-full border border-gray-400 rounded-lg text-left p-2  bg-white"
                  >
                    <span>{selected || "Select payment method "}</span>
                    <i class="fa-solid fa-angle-down"></i>
                  </button>
                  {open && (
                    <div className="absolute w-full mt-2 bg-white border border-gray-300 rounded-lg shadow-md p-3">
                      {option.map((opt, index) => (
                        <label
                          key={index}
                          className="flex items-center gap-2 py-1 cursor-pointer"
                        >
                          <input
                            type="radio"
                            name="payment"
                            value={opt}
                            checked={selected === opt}
                            onChange={(e) => {
                              setSelected(e.target.value);
                              setOpen(false);
                            }}
                          />
                          {opt}
                        </label>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Button */}
              <button
                className="mt-2 w-full rounded-xl h-12 font-bold text-white bg-gray-900 hover:bg-gray-800 active:scale-[0.99] transition shadow-md"
                onClick={() => {
                  if (handleError()) {
                    handlSubmit();
                  }
                }}
              >
                Submit
              </button>

              {/* Small note */}
              <p className="text-xs text-gray-500 text-center mt-1">
                By submitting, you confirm the details are correct.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PaymentDetails;
