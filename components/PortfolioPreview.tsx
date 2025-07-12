import React from 'react';
import Link from 'next/link';
import { Play, ArrowRight } from 'lucide-react';

const PortfolioPreview = () => {
  const videos = [
    {
      id: 1,
      title: "Sarah & Michael",
      style: "Romantic",
      thumbnail: "https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=600&h=400",
      description: "A romantic summer wedding in Tuscany"
    },
    {
      id: 2,
      title: "Emma & James",
      style: "Cinematic",
      thumbnail: "https://images.pexels.com/photos/1488313/pexels-photo-1488313.jpeg?auto=compress&cs=tinysrgb&w=600&h=400",
      description: "An intimate ceremony in the mountains"
    },
    {
      id: 3,
      title: "Lisa & David",
      style: "Documentary",
      thumbnail: "https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=600&h=400",
      description: "A joyful celebration with family and friends"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="text-subtitle">Recent Werk</span>
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mt-2 mb-6">
            Liefdesverhalen Die Wij Vastlegden
          </h2>
          <p className="text-body max-w-2xl mx-auto">
            Elke bruiloft is uniek, en elke film vertelt een ander verhaal. 
            Hier zijn enkele van onze favoriete recente projecten.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {videos.map((video, index) => (
            <div 
              key={video.id} 
              className="group hover-lift"
            >
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <Play className="h-8 w-8 text-white" />
                    </div>
                    <span className="text-beige text-sm font-medium">{video.style}</span>
                  </div>
                </div>
              </div>
              
              <div className="pt-4">
                <h3 className="font-playfair font-semibold text-xl mb-2">{video.title}</h3>
                <p className="text-body text-sm">{video.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/portfolio" className="btn-primary inline-flex items-center">
            Bekijk Alle Films
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PortfolioPreview;