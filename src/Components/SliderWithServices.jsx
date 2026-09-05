
import React, { useState, useEffect } from "react";

const SliderWithServices = () => {
  // Slider images
  const sliderImages = [
    "src/assets/slider13.png",
    "src/assets/slide2.webp",
    "src/assets/slide3.webp",
    "src/assets/slide4.webp",
    "src/assets/slide5.webp",
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Automatic slide change
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [sliderImages.length]);

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? sliderImages.length - 1 : prev - 1
    );
  };

  return (
    <div className="mt-32">

      {/* Slider Section */}
      <div className="relative w-full h-90 overflow-hidden rounded-xl">

        {/* Slides */}
        <div
          className="flex h-full transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${currentSlide * 100}%)`,
          }}
        >
          {sliderImages.map((image, index) => (
            <div
              key={index}
              className="min-w-full h-full shrink-0"
            >
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          ))}
        </div>

        {/* Previous Button */}
        <button
          className="w-10 h-18 absolute top-1/2 left-0.5 -translate-y-1/2 bg-white text-gray-700 p-3 rounded-md hover:bg-gray-200"
          onClick={goToPrevSlide}
        >
          &#8592;
        </button>

        {/* Next Button */}
        <button
          className="w-10 h-18 absolute top-1/2 right-0.5 -translate-y-1/2 bg-white text-gray-700 p-3 rounded-md hover:bg-gray-200"
          onClick={goToNextSlide}
        >
          &#8594;
        </button>

        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {sliderImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "w-7 bg-white"
                  : "w-2.5 bg-white/60 hover:bg-white"
              }`}
            />
          ))}
        </div>

      </div>
    </div>
  );
};

export default SliderWithServices;