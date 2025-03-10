import React, { useEffect, useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ImageCarousel = ({
  images,
  autoPlay = true,
  interval = 3000,
  className,
}) => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const carouselRef = useRef(null);

  const extendedImages = [images[images.length - 1], ...images, images[0]];

  const handleNext = () => {
    if (currentIndex >= extendedImages.length - 1) return;
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  const handlePrevious = () => {
    if (currentIndex <= 0) return;
    setCurrentIndex((prevIndex) => prevIndex - 1);
  };

  const handleTransitionEnd = () => {
    if (currentIndex === 0) {
      setIsTransitioning(false);
      setCurrentIndex(extendedImages.length - 2);
    } else if (currentIndex === extendedImages.length - 1) {
      setIsTransitioning(false);
      setCurrentIndex(1);
    }
  };

  useEffect(() => {
    if (!isTransitioning) {
      requestAnimationFrame(() => setIsTransitioning(true));
    }
  }, [isTransitioning]);

  useEffect(() => {
    if (!autoPlay || isPaused) return;
    const timer = setInterval(handleNext, interval);
    return () => clearInterval(timer);
  }, [autoPlay, interval, isPaused, currentIndex]);

  return (
    <div
      className={`relative w-full overflow-hidden  ${className}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div
        ref={carouselRef}
        className={`flex ${
          isTransitioning ? "transition-transform duration-700 ease-in-out" : ""
        }`}
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        onTransitionEnd={handleTransitionEnd}
      >
        {extendedImages.map((image, index) => (
          <div key={index} className="min-w-full flex">
            <img
              src={image.src}
              alt={image.alt}
              className="rounded-xl shadow-lg object-cover w-full sm:w-[100%] h-[250px] sm:h-[350px] md:h-[450px]"
            />
          </div>
        ))}
      </div>

      <button
        onClick={handlePrevious}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full p-2 z-10"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      <button
        onClick={handleNext}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full p-2 z-10"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index + 1)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentIndex === index + 1
                ? "bg-white scale-125"
                : "bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
