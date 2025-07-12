'use client';

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sarah & Michael",
      location: "Tuscany Wedding",
      content: "Dreamlovers captured our wedding day in the most beautiful way. The film brings back all the emotions and joy we felt. We can't stop watching it!",
      content: "Dreamlovers heeft onze trouwdag op de mooiste manier vastgelegd. De film brengt alle emoties en vreugde terug die we voelden. We kunnen er niet mee stoppen met kijken!",
      rating: 5,
      image: "https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=150&h=150"
    },
    {
      id: 2,
      name: "Emma & James",
      location: "Mountain Ceremony",
      content: "The attention to detail and the way they captured our intimate moments was incredible. Our film is a true work of art that we'll treasure forever.",
      content: "De aandacht voor detail en de manier waarop ze onze intieme momenten vastlegden was ongelooflijk. Onze film is een waar kunstwerk dat we voor altijd zullen koesteren.",
      rating: 5,
      image: "https://images.pexels.com/photos/1488313/pexels-photo-1488313.jpeg?auto=compress&cs=tinysrgb&w=150&h=150"
    },
    {
      id: 3,
      name: "Lisa & David",
      location: "Garden Party Wedding",
      content: "Professional, creative, and so easy to work with. They made us feel comfortable and the result exceeded all our expectations. Highly recommend!",
      content: "Professioneel, creatief en zo makkelijk om mee te werken. Ze zorgden ervoor dat we ons op ons gemak voelden en het resultaat overtrof al onze verwachtingen. Zeer aan te bevelen!",
      rating: 5,
      image: "https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=150&h=150"
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-play testimonials
  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 lg:py-24 bg-beige/10">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="text-subtitle">Wat Koppels Zeggen</span>
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mt-2 mb-6">
            Liefdesbrieven van Onze Koppels
          </h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Testimonial Card */}
          <div className="bg-white rounded-2xl p-8 md:p-12">
            <div className="flex items-center justify-center mb-8">
              <Quote className="h-12 w-12 text-gold/30" />
            </div>
            
            <div className="text-center mb-8">
              <p className="text-lg md:text-xl text-body italic leading-relaxed mb-6">
                "{testimonials[currentIndex].content}"
              </p>
              
              {/* Stars */}
              <div className="flex justify-center space-x-1 mb-4">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-gold fill-current" />
                ))}
              </div>
              
              <div className="flex items-center justify-center space-x-4">
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="text-left">
                  <h4 className="font-playfair font-semibold text-lg">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-body text-sm">{testimonials[currentIndex].location}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center space-x-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-beige transition-colors duration-200 group"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-6 w-6 text-gold group-hover:text-black" />
            </button>
            
            {/* Dots */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                    index === currentIndex ? 'bg-gold' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <button
              onClick={nextTestimonial}
              className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-beige transition-colors duration-200 group"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-6 w-6 text-gold group-hover:text-black" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;