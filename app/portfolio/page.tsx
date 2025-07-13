'use client';

import React, { useState } from 'react';
import { Play, Heart, Camera, Users, Music } from 'lucide-react';

const PortfolioPage = () => {
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

  return (
    <div>
      {/* Header */}
      <section className="bg-beige">
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
      <section className="py-16 bg-white">
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

          {/* 3 Videos in Grid - Styled like Homepage Showreel */}
          <div className="grid lg:grid-cols-3 gap-8">
            {showreelVideos.map((video, index) => (
              <div key={video.id} className="group">
                <div className="relative aspect-video bg-black overflow-hidden cursor-pointer">
                  {/* Video Thumbnail */}
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-300"></div>
                  
                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Play className="h-8 w-8 text-white ml-1" fill="white" />
                    </div>
                  </div>
                </div>
                
                {/* Video Info */}
                <div className="mt-4 text-center">
                  <h3 className="font-playfair font-semibold text-lg mb-1">{video.title}</h3>
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
            <span className="text-subtitle">Ons Proces</span>
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mt-2 mb-6">
              De hoogtepunten van jullie dag
            </h2>
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
                  <div className={`${isEven ? 'lg:order-1' : 'lg:order-2'} text-center`}>
                    <h3 className="text-2xl md:text-3xl font-playfair font-bold mb-4">
                      {step.title}
                    </h3>
                    
                    <p className="text-body text-lg leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Video */}
                  <div className={`${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div className="relative group overflow-hidden">
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
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;