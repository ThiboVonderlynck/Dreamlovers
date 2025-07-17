import React from 'react';

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

        {/* Video Container - Extended beyond section */}
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="relative mb-[-100px]">
            <iframe
              className="w-full aspect-video self-stretch md:min-h-96"
              src="https://www.youtube.com/embed/KPaaOY_Q4Ho?start=9&hd=1&vq=hd1080"
              frameBorder="0"
              title="Product Overview Video"
              aria-hidden="true"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowreelSection; 