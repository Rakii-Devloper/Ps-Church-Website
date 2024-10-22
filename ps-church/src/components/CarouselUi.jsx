import React, { useState, useEffect } from 'react';

const CarouselUi = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
    
    { id: 1, image: '../src/assets/wallpaper1.jpg' },
    { id: 2, image: '../src/assets/wallpaper2.jpg' },
    { id: 3, image: '../src/assets/wallpaper3.jpg' },
  ];

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [slides.length]);

  return (
    <div className="carousel-container relative w-full mx-auto overflow-hidden">
      <div
        className="carousel-slides flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide) => (
          <div key={slide.id} className="carousel-item w-full flex-shrink-0">
            <img src={slide.image} alt={`Slide ${slide.id}`} className="w-full" />
          </div>
        ))}
      </div>

      {/* Navigation buttons */}
      <button
        className="absolute top-1/2 left-2 transform -translate-y-1/2  text-white p-2"
        onClick={() => setCurrentIndex((currentIndex - 1 + slides.length) % slides.length)}
      >
        ❮
      </button>
      <button
        className="absolute top-1/2 right-2 transform -translate-y-1/2  text-white p-2"
        onClick={() => setCurrentIndex((currentIndex + 1) % slides.length)}
      >
        ❯
      </button>
    </div>
  );
};

export default CarouselUi;
