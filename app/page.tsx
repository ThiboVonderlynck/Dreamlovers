import React from 'react';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/Trouwvideografie';
import ShowreelSection from '@/components/ShowreelSection';
import AboutMe from '@/components/AboutMe';
import Testimonials from '@/components/Testimonials';

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <ShowreelSection />
      <AboutMe /> 
      <Testimonials />
    </div>
  );
}