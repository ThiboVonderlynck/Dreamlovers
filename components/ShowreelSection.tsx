import React from 'react';
import { Play } from 'lucide-react';

const ShowreelSection = () => {
  return (
    <section className="bg-black pb-16 relative">
      <div className="container-custom">
        {/* Title */}
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white tracking-wider">
            SHOWREEL
          </h2>
        </div>

        {/* Video Container - Extended beyond section */}
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="relative aspect-video bg-black overflow-hidden group cursor-pointer mb-[-100px]">
            {/* Video Thumbnail */}
            <img
              src="https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=1200&h=675"
              alt="Wedding showreel thumbnail"
              className="w-full h-full object-cover"
            />
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-300"></div>
            
            {/* Play Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Play className="h-10 w-10 text-white ml-1" fill="white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowreelSection; 