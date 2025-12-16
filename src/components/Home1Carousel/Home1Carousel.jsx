import React, { useEffect, useState } from "react";
import "./Home1Carousel.css";

const images = import.meta.glob(
  "/public/Galeria/carousel/*.{jpg,jpeg,png,webp}",
  { eager: true }
);

export default function Home1Carousel() {
  const slides = Object.values(images).map(img => img.default);
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      let next;
      do {
        next = Math.floor(Math.random() * slides.length);
      } while (next === current && slides.length > 1);

      setPrev(current);
      setCurrent(next);
    }, 5000);

    return () => clearInterval(interval);
  }, [current, slides.length]);

  return (
    <div className="home1-carousel">
      {slides.map((src, i) => (
        <img
          key={i}
          src={src}
          className={`home1-carousel-img ${
            i === current ? "active" : i === prev ? "fade-out" : ""
          }`}
          alt={`carousel-${i}`}
        />
      ))}
    </div>
  );
}
