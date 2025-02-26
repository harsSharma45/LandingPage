"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const images = [
  "https://res.cloudinary.com/dmmwgnhlf/video/upload/v1740585280/videoplayback_omswo5.mp4",
  "https://res.cloudinary.com/dmmwgnhlf/video/upload/v1740585280/videoplayback_omswo5.mp4",
];

export function AutoSliderBanner() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleShopClick = () => {
    const productSection = document.getElementById("product-section");
    if (productSection) {
      productSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (!isClient) {
    return null; 
  }

  return (
    <div className="relative w-full h-screen overflow-hidden font-Monoserrat">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="https://res.cloudinary.com/dmmwgnhlf/video/upload/v1740585280/videoplayback_omswo5.mp4"
        autoPlay
        loop
        muted
      />
      <div className="absolute top-0 left-0 w-full flex flex-col sm:flex-row justify-between items-center p-4 sm:p-6">
        <div className="flex items-center">
          <img 
            src="https://res.cloudinary.com/dpwqggym0/image/upload/v1740585853/lpu-logo-lovely_professional_university_oivxow_oxpi5n.png" 
            alt="Logo" 
            className="w-12 h-12 sm:w-16 sm:h-16 ml-2 sm:ml-4"
          />
          <span className="text-white ml-2">Logo</span>
        </div>
        <nav className="flex flex-wrap justify-center space-x-4 sm:space-x-8 mt-4 sm:mt-0">
          {["Navigation", "Hotel Booking", "Food Dine-In", "Events", "Placement Info"].map((item) => (
            <a
              key={item}
              href="#"
              className="text-white text-sm sm:text-lg hover:text-gray-300 transition-colors"
            >
              {item}
            </a>
          ))}
        </nav>
      </div>
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center sm:items-start justify-center p-4 sm:pl-20 text-center sm:text-left">
        <h1 className="text-3xl sm:text-6xl md:text-7xl font-bold tracking-tighter text-white mb-4">
          Together we have achieved excellence
        </h1>
        <p className="text-lg sm:text-2xl text-white mb-4 sm:mb-8">
          Lovely Professional <br className="hidden sm:block" /> University
        </p>
        <p className="text-base sm:text-xl text-white mb-4 sm:mb-8">
          Transforming Education, Transforming India
        </p>
        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
          <Button
            size="lg"
            variant="outline"
            className="bg-transparent border-white text-white hover:bg-white hover:text-black transition-colors"
          >
            View our Programmes
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="bg-transparent border-white text-white hover:bg-white hover:text-black transition-colors"
          >
            Contact Us
          </Button>
        </div>
      </div>
    </div>
  );
}
