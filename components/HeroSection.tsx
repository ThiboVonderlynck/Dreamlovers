'use client';

import React from 'react';
import Link from 'next/link';
import { Play } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <video
          src="/videos/home/Bannervideo.webm"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 w-full">
        <div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-playfair font-regular mb-6 leading-tight tracking-wide whitespace-nowrap">
            CINEMATISCHE TROUWFILM
          </h1>
          
          <p className="text-base md:text-xl mb-8 text-white font-medium max-w-2xl mx-auto leading-relaxed">
            "Jullie trouwdag, voor altijd in beeld gebracht."
          </p>
          
          <div className="flex justify-center">
            <a 
              href="#showreel" 
              className="inline-flex items-center bg-white text-black px-8 py-4 font-medium transition-all duration-300 hover:bg-gray-100 hover:shadow-lg"
            >
              Bekijk onze showreel
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;