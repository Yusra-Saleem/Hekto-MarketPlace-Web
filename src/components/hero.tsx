"use client";

import { useEffect, useState, useRef } from "react";

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Array of images (or content) for the carousel
  const slides = [
    "/images/promotional.png",
    "/images/promotional.png",
    "/images/promotional.png"
  ];

  // Handle the auto-scrolling effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  // Scroll to the current slide when index changes
  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollTo({
        left: carouselRef.current.offsetWidth * currentIndex,
        behavior: "smooth", // Add smooth scrolling behavior
      });
    }
  }, [currentIndex]);

  // Mouse swipe functionality
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const onMouseDown = (e: React.MouseEvent) => {
    setIsMouseDown(true);
    setStartX(e.pageX - carouselRef.current!.offsetLeft);
    setScrollLeft(carouselRef.current!.scrollLeft);
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isMouseDown) return;
    const x = e.pageX - carouselRef.current!.offsetLeft;
    const walk = (x - startX) * 2; // Adjust the speed of the scroll
    carouselRef.current!.scrollLeft = scrollLeft - walk;
  };

  const onMouseUp = () => {
    setIsMouseDown(false);
  };

  const onMouseLeave = () => {
    setIsMouseDown(false);
  };

  return (
    <div className="relative w-full overflow-hidden">
      <div
        ref={carouselRef}
        className="flex transition-transform duration-500 ease-in-out"
        style={{
          width: "100%",
          overflowX: "auto", // Enable horizontal scrolling
        }}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseLeave}
      >
        {slides.map((slide, index) => (
          <div key={index} className="flex-shrink-0 w-full">
            <img src={slide} alt={`Slide ${index}`} className="w-full" />
          </div>
        ))}
      </div>

      {/* Pagination buttons */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`btn btn-xs ${currentIndex === index ? "bg-blue-500 text-white" : ""}`}
          >
            ●
          </button>
        ))}
      </div>
    </div>
  );
};

export default Hero;
