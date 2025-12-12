import React, { useEffect, useState } from "react";
import "./Carousel.css";
import { getToreoImages } from "./getImages";

export default function Carousel() {
  const [images, setImages] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    getToreoImages().then((imgs) => {
      setImages(imgs);
    });
  }, []);

  useEffect(() => {
    if (images.length === 0) return;

    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 6500);

    return () => clearInterval(timer);
  }, [images]);

  if (images.length === 0) return null;

  return (
    <div className="carousel-container">
      <div className="carousel-fade">
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            className={`carousel-img ${i === index ? "active" : ""}`}
          />
        ))}
      </div>
    </div>
  );
}
