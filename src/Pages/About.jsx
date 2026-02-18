import React from "react";

export default function About() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-3xl md:text-4xl font-bold">About Our Furniture</h1>
        <p className="mt-3 text-gray-600">
          We design and deliver furniture that feels good, lasts long, and makes
          every space look beautiful.
        </p>
      </div>

      {/* Intro Section */}
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="rounded-2xl overflow-hidden shadow">
          <img
            src="https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&w=1200&q=80"
            alt="Furniture showroom"
            className="w-full h-80 object-cover"
          />
        </div>

        <div>
          <h2 className="text-2xl font-semibold">Our Story</h2>
          <p className="mt-3 text-gray-600 leading-relaxed">
            We started with a simple idea: furniture should be both stylish and
            practical. From modern minimal designs to warm, classic pieces, we
            craft collections that help you build a home you love.
          </p>

          <p className="mt-3 text-gray-600 leading-relaxed">
            Every product is selected with care—quality materials, strong build,
            and finishes that fit real everyday living.
          </p>
        </div>
      </div>

      {/* Values */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-5">What We Stand For</h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl shadow bg-white">
            <h3 className="font-bold text-lg">Quality First</h3>
            <p className="mt-2 text-gray-600">
              Strong frames, premium materials, and lasting comfort—built to
              serve you for years.
            </p>
          </div>

          <div className="p-6 rounded-2xl shadow bg-white">
            <h3 className="font-bold text-lg">Modern Design</h3>
            <p className="mt-2 text-gray-600">
              Clean styles that match every room—bedroom, living room, dining,
              and office.
            </p>
          </div>

          <div className="p-6 rounded-2xl shadow bg-white">
            <h3 className="font-bold text-lg">Customer Care</h3>
            <p className="mt-2 text-gray-600">
              We’re here to help—from choosing the right piece to delivery and
              after-sales support.
            </p>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="mt-12 grid md:grid-cols-2 gap-8">
        <div className="p-6 rounded-2xl shadow bg-white">
          <h2 className="text-2xl font-semibold">Why Choose Us?</h2>
          <ul className="mt-4 space-y-2 text-gray-600 list-disc list-inside">
            <li>Affordable furniture with premium feel</li>
            <li>Trendy collections updated regularly</li>
            <li>Durable build and easy maintenance</li>
            <li>Fast delivery & safe packaging</li>
            <li>Trusted by happy customers</li>
          </ul>
        </div>

        <div className="p-6 rounded-2xl shadow bg-white">
          <h2 className="text-2xl font-semibold">Our Promise</h2>
          <p className="mt-3 text-gray-600 leading-relaxed">
            Whether you’re furnishing a new home or upgrading a single room, we
            make it simple to find pieces you’ll love. Comfort, quality, and
            style—every time.
          </p>

          <div className="mt-6 flex gap-3">
            <button className="px-5 py-2 rounded-xl border border-gray-300 hover:bg-gray-50">
              Contact Us
            </button>
          </div>
        </div>
      </div>

      {/* Footer Note */}
      {/* <div className="mt-12 text-center text-gray-500">
        <p>Thank you for choosing us — let’s build a better space, together.</p>
      </div> */}
    </div>
  );
}
