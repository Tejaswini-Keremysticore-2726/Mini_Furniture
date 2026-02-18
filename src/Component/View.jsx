import React from "react";

function View({ select, setSelect, view }) {
  return (
    <>
      {select && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur"
          onClick={() => setSelect(false)} // outside click close
        >
          <div
            className="w-full max-w-3xl rounded-3xl bg-white shadow-xl overflow-hidden"
            onClick={(e) => e.stopPropagation()} // modal click pe close na ho
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b p-4">
              <h2 className="text-lg font-bold">Product Details</h2>
              <button
                onClick={() => setSelect(false)}
                className="rounded-xl px-3 py-1 text-sm font-medium hover:bg-gray-100"
              >
                ❌
              </button>
            </div>

            {/* Body */}
            <div className="grid gap-6 p-5 md:grid-cols-2">
              {/* Left: Image */}
              <div className="rounded-2xl bg-gray-100 overflow-hidden">
                <img
                  src={view.image}
                  alt={view.name}
                  className="h-full w-full object-cover aspect-[4/3]"
                  onError={(e) => {
                    e.currentTarget.src =
                      "https://placehold.co/600x400?text=Furniture";
                  }}
                />
              </div>

              {/* Right: Info */}
              <div className="space-y-3">
                <h3 className="text-xl font-bold">{view.name}</h3>

                <div className="flex items-center justify-between">
                  <p className="text-2xl font-extrabold">
                    ₹{view.price?.toLocaleString?.() ?? view.price}
                  </p>
                  <p className="text-sm text-gray-600">⭐ {view.rating}</p>
                </div>

                <div className="flex flex-wrap gap-2 text-xs">
                  <span className="rounded-full bg-gray-100 px-3 py-1 text-gray-700">
                    {view.category}
                  </span>
                  <span className="rounded-full bg-gray-100 px-3 py-1 text-gray-700">
                    {view.material}
                  </span>
                  <span className="rounded-full bg-gray-100 px-3 py-1 text-gray-700">
                    {view.color}
                  </span>
                  <span className="rounded-full bg-gray-100 px-3 py-1 text-gray-700">
                    Stock: {view.stock ?? "—"}
                  </span>
                </div>

                {/* Optional description */}
                {view.description && (
                  <p className="text-sm text-gray-600">{view.description}</p>
                )}

                {/* Footer buttons */}
                <div className="mt-4 flex gap-2">
                  <button className="flex-1 rounded-2xl bg-black px-4 py-2 text-sm font-medium text-white hover:opacity-90">
                    Add to Cart
                  </button>
                  <button
                    onClick={() => setSelect(false)}
                    className="rounded-2xl border px-4 py-2 text-sm font-medium hover:bg-gray-50"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default View;
