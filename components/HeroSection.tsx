'use client';

import React from 'react';
import Link from 'next/link';
import { Play, Heart } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          className="w-full h-full object-cover"
          poster="https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080"
        >
          <source src="https://player.vimeo.com/external/434045526.hd.mp4?s=c27eecc69a27dbc4ff2b87d38afc35f1a9e4c02a&profile_id=174" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 video-overlay"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <div>
          <div className="flex items-center justify-center mb-6">
            <Heart className="h-8 w-8 text-beige mr-3" />
            <span className="text-beige font-medium tracking-wide uppercase text-sm">
              Waar gevoel een film wordt
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-playfair font-bold mb-6 leading-tight">
            Dreamlovers
          </h1>
          
          <p className="text-lg md:text-xl mb-8 text-beige font-light max-w-3xl mx-auto leading-relaxed">
            Wij brengen jullie trouwdag tot leven door het verfilmen van de échte, pure emoties. Jullie momenten worden op een spontane manier in beeld gebracht, vol liefde, warmte en betekenis. Zo kunnen jullie telkens opnieuw genieten van jullie dag en deze herbeleven.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/contact" className="btn-secondary inline-flex items-center">
              Bekijk onze huwelijksfilms
            </Link>
            <button className="inline-flex items-center text-white hover:text-beige transition-colors duration-300 group">
              <Play className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
              Bekijk onze films
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;