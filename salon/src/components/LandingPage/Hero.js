import { useState, useEffect } from "react";
import { heroSlides } from "../constant/Data"; 

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Function to change the slide
  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % heroSlides.length);
  };

  // Automatic sliding every 10 seconds
  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 10000); // Changed to 10 seconds

    // Clean up the interval when the component unmounts
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div className="relative overflow-hidden w-full">
      <div className="absolute bottom-40 w-full text-center">
        <p className="font-custom1 text-8xl z-20">Good Looks</p>
      </div>
      <div
        className="h-auto flex transition-all duration-[900ms] ease-in-out w-full"
        style={{
          transform: `translateX(-${currentSlide * 100}%)`,
        }}
      >
        {heroSlides.map((slide) => (
          <img
            key={slide.id}
            src={slide.src}
            alt={slide.alt}
            className="w-full h-full"
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
