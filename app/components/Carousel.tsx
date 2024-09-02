'use client';

import React, { useState } from 'react';

const Carousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    'https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg',
    'https://images.pexels.com/photos/257360/pexels-photo-257360.jpeg',
    'https://images.pexels.com/photos/247599/pexels-photo-247599.jpeg',
    'https://images.pexels.com/photos/34950/pexels-photo.jpg',
  ];

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto">
      <div className="relative overflow-hidden rounded-lg aspect-[16/9]">
        <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {slides.map((slide, index) => (
            <div key={index} className="shrink-0 w-full h-full">
              <img
                src={slide}
                alt={`Slide ${index + 1}`}
                width="1920"
                height="1080"
                className="object-cover w-full h-full"
                style={{ aspectRatio: '1920 / 1080', objectFit: 'cover' }}
              />
            </div>
          ))}
        </div>
        <div className="absolute inset-0 flex items-center justify-between px-4">
          <button
            onClick={prevSlide}
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10 text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-6 h-6"
            >
              <path d="m15 18-6-6 6-6"></path>
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10 text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-6 h-6"
            >
              <path d="m9 18 6-6-6-6"></path>
            </svg>
          </button>
        </div>
      </div>
      <div className="flex justify-center gap-4 mt-4">
        {slides.map((slide, index) => (
          <button
            key={index}
            className={`relative w-12 h-12 rounded-md overflow-hidden border border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${currentIndex === index ? 'border-accent' : ''}`}
            onClick={() => setCurrentIndex(index)}
          >
            <img
              src={slide}
              alt={`Thumbnail ${index + 1}`}
              width="96"
              height="96"
              className="object-cover w-full h-full"
              style={{ aspectRatio: '96 / 96', objectFit: 'cover' }}
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
