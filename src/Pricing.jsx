import React from "react";
import data from "./data2.json";

export default function HorizontalCards() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Our Products</h2>
      <div className="space-y-6">
        {data.map((item) => (
          <div
            key={item.id}
            className="flex items-center bg-white border rounded-xl shadow-sm hover:shadow-md transition p-4"
          >
            {/* Image */}
            <img
              src={item.image}
              alt={item.title}
              className="w-24 h-24 object-cover rounded-lg mr-6"
            />

            {/* Content */}
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
              <p className="text-gray-600 text-sm mb-2">{item.description}</p>
              <span className="text-indigo-600 font-bold">{item.price}</span>
            </div>

            {/* Action */}
            <button className="ml-6 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700">
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
