import React from 'react';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import PortfolioPreview from '@/components/PortfolioPreview';
import TestimonialSection from '@/components/TestimonialSection';
import CallToAction from '@/components/CallToAction';

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <PortfolioPreview />
      <TestimonialSection />
    </div>
  );
}