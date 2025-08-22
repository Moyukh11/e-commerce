import React from "react";

export default function About() {
  return (
    <section className="bg-white py-16 px-6" id="about">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          About <span className="text-indigo-600">BUYit</span>
        </h2>

        {/* Description */}
        <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto mb-10">
          BUYit is your one-stop solution for online shopping. We bring you a wide
          variety of products at affordable prices, with a seamless shopping
          experience. Our mission is to make online shopping simple, secure, and
          enjoyable for everyone.
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          <div className="p-6 bg-gray-50 rounded-2xl shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-indigo-600 mb-2">Our Mission</h3>
            <p className="text-gray-600">
              To deliver quality products at unbeatable prices while making shopping easy and accessible for all.
            </p>
          </div>

          <div className="p-6 bg-gray-50 rounded-2xl shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-indigo-600 mb-2">Our Vision</h3>
            <p className="text-gray-600">
              To become the most trusted and customer-friendly online marketplace worldwide.
            </p>
          </div>

          <div className="p-6 bg-gray-50 rounded-2xl shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-indigo-600 mb-2">Why Choose Us?</h3>
            <p className="text-gray-600">
              With 24/7 support, secure payments, and fast delivery, we ensure your shopping experience is smooth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
