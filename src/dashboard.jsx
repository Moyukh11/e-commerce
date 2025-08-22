import React from "react";
import data from "./data.json";

const Card = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold text-center my-8">Welcome to our Dashboard</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {data.map((item) => (
        <div
          key={item.id}
          className="bg-white shadow-md rounded-2xl p-4 flex flex-col items-center hover:shadow-lg transition"
        >
          <img
            src={item.image}
            alt={item.name}
            className="w-32 h-32 object-cover rounded-lg"
          />
          <h2 className="mt-3 text-lg font-semibold">{item.name}</h2>
          <p className="text-gray-600">₹{item.price}</p>
          <p className="text-yellow-500">⭐ {item.rating}</p>
          <span className="text-sm text-gray-500">{item.category}</span>
          <button className="mt-3 bg-blue-500 text-white px-4 py-2 rounded-xl hover:bg-blue-600">
            Add to Cart
          </button>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Card;
