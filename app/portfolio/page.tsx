'use client';

import React, { useState } from 'react';
import { Play, Filter, Heart, Camera, Users, Music } from 'lucide-react';

const PortfolioPage = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'All Films' },
    { id: 'romantic', label: 'Romantic' },
    { id: 'cinematic', label: 'Cinematic' },
    { id: 'documentary', label: 'Documentary' }
  ];

  // Showreel videos
  const showreelVideos = [
    {
      id: 1,
      title: "Sarah & Michael - Tuscany Romance",
      thumbnail: "https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=800&h=450",
      duration: "4:32"
    },
    {
      id: 2,
      title: "Emma & James - Mountain Ceremony",
      thumbnail: "https://images.pexels.com/photos/1488313/pexels-photo-1488313.jpeg?auto=compress&cs=tinysrgb&w=800&h=450",
      duration: "6:15"
    },
    {
      id: 3,
      title: "Lisa & David - Garden Celebration",
      thumbnail: "https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=800&h=450",
      duration: "5:48"
    }
  ];

  // Workflow steps with Dutch descriptions
  const workflowSteps = [
    {
      id: 1,
      title: "De start van de dag",
      description: "De eerste zon straalt naar binnen en jullie bereiden zich voor op dat bijzondere moment waarop jullie elkaar voor het eerst zullen zien.",
      thumbnail: "https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=600&h=400",
      icon: Heart
    },
    {
      id: 2,
      title: "First look",
      description: "Het begin van wat beloofd een prachtige dag te worden.",
      thumbnail: "https://images.pexels.com/photos/1488313/pexels-photo-1488313.jpeg?auto=compress&cs=tinysrgb&w=600&h=400",
      icon: Camera
    },
    {
      id: 3,
      title: "Zeg 'ja'",
      description: "Omringd door familie en vrienden zeggen jullie met liefde en vol overtuiging 'ja' tegen elkaar.",
      thumbnail: "https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=600&h=400",
      icon: Heart
    },
    {
      id: 4,
      title: "Fotoshoot",
      description: "Jullie twee, in een moment waarin de tijd even stil lijkt te staan.",
      thumbnail: "https://images.pexels.com/photos/1488313/pexels-photo-1488313.jpeg?auto=compress&cs=tinysrgb&w=600&h=400",
      icon: Camera
    },
    {
      id: 5,
      title: "Geloftes",
      description: "Jullie persoonlijke woorden die deze bijzondere dag voor altijd betekenis geven.",
      thumbnail: "https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=600&h=400",
      icon: Heart
    },
    {
      id: 6,
      title: "Familie & Vrienden",
      description: "Samen genieten van momenten vol warmte en plezier. Lachen, liefhebben en dicht bij elkaar zijn.",
      thumbnail: "https://images.pexels.com/photos/1488313/pexels-photo-1488313.jpeg?auto=compress&cs=tinysrgb&w=600&h=400",
      icon: Users
    },
    {
      id: 7,
      title: "Entree in de zaal",
      description: "Het sprankelende begin van het feest, klaar om samen te vieren.",
      thumbnail: "https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=600&h=400",
      icon: Music
    },
    {
      id: 8,
      title: "Dessert",
      description: "Het zoete moment om het avondmaal mee af te sluiten.",
      thumbnail: "https://images.pexels.com/photos/1488313/pexels-photo-1488313.jpeg?auto=compress&cs=tinysrgb&w=600&h=400",
      icon: Heart
    },
    {
      id: 9,
      title: "Openingsdans",
      description: "Jullie eerste dans als getrouwd stel — Samen bewegen op het ritme van jullie geluk, terwijl de wereld even stil lijkt te staan.",
      thumbnail: "https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=600&h=400",
      icon: Music
    }
  ];

  const portfolioVideos = [
    {
      id: 1,
      title: "Sarah & Michael",
      style: "romantic",
      thumbnail: "https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=600&h=400",
      description: "A romantic summer wedding in Tuscany with breathtaking vineyard views",
      duration: "4:32",
      location: "Tuscany, Italy"
    },
    {
      id: 2,
      title: "Emma & James",
      style: "cinematic",
      thumbnail: "https://images.pexels.com/photos/1488313/pexels-photo-1488313.jpeg?auto=compress&cs=tinysrgb&w=600&h=400",
      description: "An intimate ceremony in the mountains with stunning landscapes",
      duration: "6:15",
      location: "Swiss Alps"
    },
    {
      id: 3,
      title: "Lisa & David",
      style: "documentary",
      thumbnail: "https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=600&h=400",
      description: "A joyful celebration with family and friends in a beautiful garden",
      duration: "5:48",
      location: "English Countryside"
    },
    {
      id: 4,
      title: "Anna & Thomas",
      style: "romantic",
      thumbnail: "https://images.pexels.com/photos/1488313/pexels-photo-1488313.jpeg?auto=compress&cs=tinysrgb&w=600&h=400",
      description: "A fairytale wedding in a historic castle",
      duration: "7:22",
      location: "Loire Valley, France"
    },
    {
      id: 5,
      title: "Maria & Carlos",
      style: "cinematic",
      thumbnail: "https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=600&h=400",
      description: "A passionate Spanish wedding with flamenco traditions",
      duration: "5:33",
      location: "Seville, Spain"
    },
    {
      id: 6,
      title: "Sophie & Alex",
      style: "documentary",
      thumbnail: "https://images.pexels.com/photos/1488313/pexels-photo-1488313.jpeg?auto=compress&cs=tinysrgb&w=600&h=400",
      description: "A bohemian beach wedding at sunset",
      duration: "4:17",
      location: "Santorini, Greece"
    }
  ];

  const filteredVideos = selectedFilter === 'all' 
    ? portfolioVideos 
    : portfolioVideos.filter(video => video.style === selectedFilter);

  return (
    <div>
      {/* Header */}
      <section className="bg-beige/20">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto py-20">
            <span className="text-subtitle">Portfolio</span>
            <h1 className="text-4xl md:text-6xl font-playfair font-bold mt-2 mb-6">
              Ontdek onze videostijl
            </h1>
            <p className="text-body text-lg leading-relaxed">
              Elke bruiloft vertelt een uniek verhaal. Blader door onze collectie films 
              om de stijl te vinden die resoneert met jullie visie.
            </p>
          </div>
        </div>
      </section>

      {/* Showreel Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">
              Trouwtrailers
            </h2>
            <p className="text-body max-w-2xl mx-auto">
              Beleef de magie door onze meest geliefde trouwfilms, 
              die verschillende stijlen en emoties tonen.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {showreelVideos.map((video, index) => (
              <div 
                key={video.id}
                className="group hover-lift"
              >
                <div className="relative overflow-hidden rounded-xl">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  
                  {/* Video Overlay */}
                  <div className="absolute inset-0 bg-black/50 group-hover:bg-black/70 transition-colors duration-300 flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform backdrop-blur-sm">
                        <Play className="h-10 w-10 text-white ml-1" />
                      </div>
                      <h3 className="font-playfair font-semibold text-lg mb-2">{video.title}</h3>
                      <span className="text-beige text-sm">{video.duration}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow Process Section */}
      <section className="py-16 lg:py-24 bg-beige/10">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="text-subtitle">Our Process</span>
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mt-2 mb-6">
              Hoe Wij Te Werk Gaan
            </h2>
            <p className="text-body max-w-2xl mx-auto">
              "De hoogtepunten van jullie dag, voor altijd in beeld."
            </p>
          </div>

          <div className="space-y-16">
            {workflowSteps.map((step, index) => {
              const IconComponent = step.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div 
                  key={step.id}
                  className={`grid lg:grid-cols-2 gap-12 items-center`}
                >
                  {/* Content */}
                  <div className={`${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center mr-4">
                        <IconComponent className="h-6 w-6 text-gold" />
                      </div>
                      <div className="w-8 h-8 bg-gold rounded-full flex items-center justify-center text-white font-bold text-sm">
                        {step.id}
                      </div>
                    </div>
                    
                    <h3 className="text-2xl md:text-3xl font-playfair font-bold mb-4">
                      {step.title}
                    </h3>
                    
                    <p className="text-body text-lg leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Video */}
                  <div className={`${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div className="relative group overflow-hidden rounded-xl">
                      <img
                        src={step.thumbnail}
                        alt={step.title}
                        className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      
                      {/* Video Play Overlay */}
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300 flex items-center justify-center">
                        <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform backdrop-blur-sm">
                          <Play className="h-8 w-8 text-white ml-1" />
                        </div>
                      </div>
                      
                      {/* Step Number Badge */}
                      <div className="absolute top-4 left-4 w-10 h-10 bg-gold rounded-full flex items-center justify-center text-white font-bold">
                        {step.id}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="py-8 bg-white border-b border-beige/20">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center text-gold mr-4">
              <Filter className="h-5 w-5 mr-2" />
              <span className="font-medium">Filter op stijl:</span>
            </div>
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setSelectedFilter(filter.id)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  selectedFilter === filter.id
                    ? 'bg-gold text-white'
                    : 'bg-beige/30 text-black hover:bg-beige hover:scale-105'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">
              Compleet Portfolio
            </h2>
            <p className="text-body max-w-2xl mx-auto">
              Blader door onze complete collectie trouwfilms, 
              elk vertelt een uniek liefdesverhaal.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredVideos.map((video, index) => (
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
                      <span className="text-beige text-sm font-medium capitalize">{video.style}</span>
                    </div>
                  </div>
                  
                  {/* Duration */}
                  <div className="absolute bottom-4 right-4 bg-black/70 text-white px-2 py-1 rounded text-sm">
                    {video.duration}
                  </div>
                </div>
                
                <div className="pt-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-playfair font-semibold text-xl">{video.title}</h3>
                    <span className="text-gold text-sm font-medium capitalize">{video.style}</span>
                  </div>
                  <p className="text-body text-sm mb-2">{video.description}</p>
                  <p className="text-gold text-sm font-medium">{video.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;