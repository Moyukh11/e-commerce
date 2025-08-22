import React from "react";

export default function ExampleCarouselImage({ src, alt, text }) {
  return (
    <div className="d-flex justify-content-center align-items-center bg-dark" style={{ height: "400px" }}>
      {src ? (
        <img
          src={src}
          alt={alt || text}
          className="d-block w-100"
          style={{ objectFit: "cover", height: "100%" }}
        />
      ) : (
        <span className="text-white fs-3">{text}</span>
      )}
    </div>
  );
}
