'use client';

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      quote: "Wauw, die trouwfilm, zo schoon! Het is echt perfect! En we hebben dan de rest nog niet gezien!",
      names: "Sophie & Michiel"
    },
    {
      id: 2,
      quote: "Ongelooflijk hoe jullie onze dag hebben vastgelegd. Elke keer als we kijken, krijgen we kippenvel!",
      names: "Emma & Tom"
    },
    {
      id: 3,
      quote: "De film is precies wat we hoopten - emotioneel, prachtig en vol liefde. Dank jullie wel!",
      names: "Lisa & David"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="text-center max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <span className="text-subtitle text-gold">TESTIMONIALS</span>
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mt-2 mb-6 text-black">
              WAT ONZE KOPPELS ZEGGEN
            </h2>
          </div>

          {/* Testimonial Content */}
          <div className="relative">
            <div className="flex items-center justify-center">
              {/* Previous Arrow */}
              <button
                onClick={prevTestimonial}
                className="absolute left-0 p-2 hover:text-gold transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-8 w-8" />
              </button>

              {/* Testimonial */}
              <div className="max-w-3xl mx-auto px-16">
                <blockquote className="text-base text-black mb-4 leading-relaxed">
                  "{testimonials[currentTestimonial].quote}"
                </blockquote>
                
                <div className="flex flex-col items-center justify-center">
                  <div className="w-px h-8 bg-black mb-4"></div>
                  <cite className="text-lg font-dancing text-black not-italic">
                    {testimonials[currentTestimonial].names}
                  </cite>
                </div>
              </div>

              {/* Next Arrow */}
              <button
                onClick={nextTestimonial}
                className="absolute right-0 p-2 hover:text-gold transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-8 w-8" />
              </button>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentTestimonial ? 'bg-gold' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;