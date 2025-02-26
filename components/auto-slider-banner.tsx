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
      <div className="absolute top-0 left-0 w-full flex justify-between items-center ">
        <div className="flex items-center">
          <img 
            src="https://res.cloudinary.com/dpwqggym0/image/upload/v1740585853/lpu-logo-lovely_professional_university_oivxow_oxpi5n.png" 
            alt="Logo" 
            className="ml-8 mt-8 w-auto h-16 p-0 "
          />
<<<<<<< HEAD
=======
{/*           //<span className="text-white ml-2">Logo</span> */}
>>>>>>> 85de1749aaf1c3a18854670642f07c5e5505e85c
        </div>
        <nav className="flex space-x-8 mr-40 mt-6 gap-4">
          {[
            "Navigation",
            "Hotel Booking",
            "Food Dine-In",
            "Events",
            "Placement Info",
          ].map((item) => (
            <a
              key={item}
              href="#"
              className="text-white text-xl transition-colors"
            >
              {item}
            </a>
          ))}
        </nav>
      </div>
      <div className="font-Monoserrat absolute inset-0 bg-black bg-opacity-50 flex flex-col items-start justify-center pl-40">
        
        <h1 className="text-2xl tracking-tighter sm:text-6xl md:text-2xl text-white mb-4">
          
          Together we have achieved excellence
        </h1>
        <p className="text-7xl font-extrabold text-white mb-8">
          
          LOVELY PROFESSIONAL <br /> UNIVERSITY
        </p>
        <p className="text-2xl text-white mb-8">
          
          Transforming Education, Transforming India
        </p>
        <div className="flex space-x-4">
          
          <Button
            size="lg"
            variant="outline"
            className="font-openSans text-[18px] bg-transparent border-white text-white hover:bg-white hover:text-black transition-colors"
          >
            
             Navigation ➔
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="font-openSans text-[18px] bg-transparent border-white text-white hover:bg-white hover:text-black transition-colors"
          >
            
            Other Services ➔
          </Button>
        </div>
      </div>
    </div>
  );
}