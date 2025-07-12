import React from 'react';
import { Check, Heart, Star, Crown } from 'lucide-react';
import Link from 'next/link';

const PackagesPage = () => {
  const packages = [
    {
      id: 1,
      name: "Basis",
      price: "1.200",
      icon: Heart,
      popular: false,
      description: "Perfect voor intieme ceremonies en kleinere vieringen",
      features: [
        "4 uur opnames",
        "1 videograaf",
        "Highlight reel (3-4 minuten)",
        "Ceremonie beelden",
        "Basis kleurcorrectie",
        "Online galerij toegang",
        "Digitale download"
      ],
      highlight: "Ideaal voor intieme bruiloften"
    },
    {
      id: 2,
      name: "Premium",
      price: "2.500",
      icon: Star,
      popular: true,
      description: "Ons populairste pakket met uitgebreide dekking",
      features: [
        "8 uur opnames",
        "2 videografen",
        "Highlight reel (5-6 minuten)",
        "Ceremonie & receptie beelden",
        "Professionele kleurcorrectie",
        "Audio verbetering",
        "Online galerij toegang",
        "Digitale download",
        "USB-stick inbegrepen",
        "Ruwe beelden backup"
      ],
      highlight: "Beste waarde voor complete dekking"
    },
    {
      id: 3,
      name: "Cinématisch",
      price: "4.200",
      icon: Crown,
      popular: false,
      description: "De ultieme trouwfilm ervaring met luxe details",
      features: [
        "Volledige dag dekking (12 uur)",
        "3 videografen",
        "Uitgebreide highlight reel (8-10 minuten)",
        "Ceremonie & receptie beelden",
        "Drone beelden (waar toegestaan)",
        "Professionele kleurcorrectie",
        "Audio verbetering",
        "Aangepaste muziek selectie",
        "Online galerij toegang",
        "Digitale download",
        "USB-stick inbegrepen",
        "Ruwe beelden backup",
        "Zelfde dag edit preview",
        "Aangepaste verpakking"
      ],
      highlight: "Luxe ervaring met premium functies"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-beige/20">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto py-20">
            <span className="text-subtitle">Prijspakketten</span>
            <h1 className="text-4xl md:text-6xl font-playfair font-bold mt-2 mb-6">
              Kies Jullie Perfecte Pakket
            </h1>
            <p className="text-body text-lg leading-relaxed">
              Elk liefdesverhaal is uniek, en dat geldt ook voor onze pakketten. Kies degene die 
              past bij jullie visie en budget om jullie perfecte trouwfilm te creëren.
            </p>
          </div>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => {
              const IconComponent = pkg.icon;
              return (
                <div 
                  key={pkg.id}
                  className={`relative bg-white rounded-2xl border-2 ${
                    pkg.popular 
                      ? 'border-gold scale-105 lg:scale-110' 
                      : 'border-beige/20'
                  }`}
                >
                  {/* Popular Badge */}
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gold text-white px-6 py-2 rounded-full text-sm font-medium">
                        Meest Populair
                      </div>
                    </div>
                  )}

                  <div className="p-8">
                    {/* Header */}
                    <div className="text-center mb-8">
                      <div className="w-16 h-16 bg-beige/30 rounded-full flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="h-8 w-8 text-gold" />
                      </div>
                      <h3 className="text-2xl font-playfair font-bold mb-2">{pkg.name}</h3>
                      <p className="text-body text-sm mb-4">{pkg.description}</p>
                      <div className="text-4xl font-playfair font-bold text-gold mb-2">
                        €{pkg.price}
                      </div>
                      <p className="text-gold text-sm font-medium">{pkg.highlight}</p>
                    </div>

                    {/* Features */}
                    <div className="space-y-4 mb-8">
                      {pkg.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start space-x-3">
                          <Check className="h-5 w-5 text-gold mt-0.5 flex-shrink-0" />
                          <span className="text-body text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <Link 
                      href="/contact"
                      className={`w-full inline-flex items-center justify-center px-8 py-4 rounded-full font-medium ${
                        pkg.popular
                          ? 'bg-gold text-white'
                          : 'bg-beige text-black'
                      }`}
                    >
                      Kies Dit Pakket
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-16 lg:py-24 bg-beige/10">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-playfair font-bold mb-4">
                Wat is Inbegrepen in Elk Pakket
              </h2>
              <p className="text-body">
                Ongeacht welk pakket jullie kiezen, jullie ontvangen onze kenmerkende 
                kwaliteit en aandacht voor detail.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-playfair font-semibold text-xl mb-4">Kwaliteitsgarantie</h3>
                <ul className="space-y-2 text-body">
                  <li>• Professionele apparatuur</li>
                  <li>• Ervaren videografen</li>
                  <li>• High-definition 4K beelden</li>
                  <li>• Professionele audio opname</li>
                  <li>• Cinématische kleurcorrectie</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-playfair font-semibold text-xl mb-4">Levering & Ondersteuning</h3>
                <ul className="space-y-2 text-body">
                  <li>• 4-6 weken levertijd</li>
                  <li>• Online galerij voor eenvoudig delen</li>
                  <li>• Meerdere formaat opties</li>
                  <li>• Levenslange klantenservice</li>
                  <li>• Tevredenheidsgarantie</li>
                </ul>
              </div>
            </div>

            <div className="text-center mt-12">
              <p className="text-body mb-6">
                Hebben jullie iets speciaals nodig? Wij maken graag een gepersonaliseerd pakket speciaal voor jullie.
              </p>
              <Link href="/contact" className="btn-primary">
                Vraag Aangepaste Offerte Aan
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PackagesPage;