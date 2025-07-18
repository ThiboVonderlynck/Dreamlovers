import React from 'react';
import Image from 'next/image';

const ShowreelSection = () => {
  return (
    <section id="showreel" className="bg-black pb-16 relative scroll-mt-20">
      <div className="container-custom">
        {/* Title */}
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white tracking-wider">
            SHOWREEL
          </h2>
        </div>

        {/* Image Container - Extended beyond section */}
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="relative mb-[-100px]">
            <Image
              src="/images/home/ShowreelThumbnail.webp"
              alt="Showreel thumbnail"
              width={1280}
              height={720}
              className="w-full aspect-video self-stretch md:min-h-96 object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/40 pointer-events-none rounded-lg" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-playfair font-bold md:text-2xl text-white drop-shadow-lg tracking-wide uppercase select-none">
                Coming Soon
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowreelSection; 