import React from 'react';
import { Check, Heart, Star, Crown, Award, Shield, Clock, Headphones } from 'lucide-react';
import Link from 'next/link';

const PackagesPage = () => {
  const packages = [
    {
      id: 1,
      name: "Basis",
      price: "1.500",
      icon: Heart,
      popular: false,
      description: "Perfect voor intieme ceremonies en kleinere vieringen",
      features: [
        "Trouwfilm (6-10 min.)",
        "1 videograaf",
        "10u aanwezigheid",
        "Drone beelden",
        "Audio-opname",
        "Ceremoniefilm",
        "Trailer (1-2 min.)"
      ],
      highlight: "Ideaal voor intieme bruiloften"
    },
    {
      id: 2,
      name: "Standaard",
      price: "1.900",
      icon: Star,
      popular: true,
      description: "Ons populairste pakket met uitgebreide dekking",
      features: [
        "Trouwfilm (8-15 min.)",
        "1 videograaf",
        "Volledige dag aanwezig",
        "Drone beelden",
        "Audio-opname",
        "Ceremoniefilm",
        "Trailer (1-2 min.)",
        "Same day video"
      ],
      highlight: "Beste waarde voor de volledige ervaring"
    },
    {
      id: 3,
      name: "Exclusief",
      price: "3.200",
      icon: Crown,
      popular: false,
      description: "De ultieme trouwfilm ervaring met luxe details",
      features: [
        "Trouwfilm (8-15 min.)",
        "2 videografen",
        "Volledige dag aanwezig",
        "Drone beelden",
        "Audio-opname",
        "Ceremoniefilm",
        "Trailer (1-2 min.)",
        "Same day video"
      ],
      highlight: "Luxe ervaring door de extra mogelijkheid aan perspectieven"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-beige">
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
      <section className="pt-24 pb-14 bg-white">
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
                      href={`/contact?pakket=${encodeURIComponent(pkg.name)}`}
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

      {/* Price Info */}
      <section className="bg-white pb-14">
        <div className="container-custom">
          <div className="text-left">
            <p className="text-gold text-base italic">
              *Prijzen zijn telkens exclusief btw.
            </p>
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-16 lg:py-24 bg-beige/10">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">
                Wat is Inbegrepen in Elk Pakket
              </h2>
              <p className="text-body text-lg leading-relaxed max-w-3xl mx-auto">
                Ongeacht welk pakket jullie kiezen, jullie ontvangen onze kenmerkende 
                kwaliteit en aandacht voor detail.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-beige/20">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center mr-4">
                    <Award className="h-6 w-6 text-gold" />
                  </div>
                  <h3 className="font-playfair font-semibold text-xl">Kwaliteitsgarantie</h3>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <Check className="h-5 w-5 text-gold mt-0.5 flex-shrink-0" />
                    <span className="text-body">Professionele apparatuur</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Check className="h-5 w-5 text-gold mt-0.5 flex-shrink-0" />
                    <span className="text-body">Ervaren videografen</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Check className="h-5 w-5 text-gold mt-0.5 flex-shrink-0" />
                    <span className="text-body">High-definition 4K beelden</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Check className="h-5 w-5 text-gold mt-0.5 flex-shrink-0" />
                    <span className="text-body">Professionele audio opname</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Check className="h-5 w-5 text-gold mt-0.5 flex-shrink-0" />
                    <span className="text-body">Cinématische kleurcorrectie</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-beige/20">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center mr-4">
                    <Shield className="h-6 w-6 text-gold" />
                  </div>
                  <h3 className="font-playfair font-semibold text-xl">Levering & Ondersteuning</h3>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <Clock className="h-5 w-5 text-gold mt-0.5 flex-shrink-0" />
                    <span className="text-body">4 weken levertijd</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Headphones className="h-5 w-5 text-gold mt-0.5 flex-shrink-0" />
                    <span className="text-body">Levenslange klantenservice</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Shield className="h-5 w-5 text-gold mt-0.5 flex-shrink-0" />
                    <span className="text-body">Tevredenheidsgarantie</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-gold/5 to-beige/20 rounded-2xl p-8 md:p-12 text-center">
              <h3 className="text-2xl font-playfair font-bold mb-4">
                Op Maat Gemaakt Voor Jullie
              </h3>
              <p className="text-body text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
                Hebben jullie iets speciaals nodig? Wij maken graag een gepersonaliseerd pakket speciaal voor jullie.
              </p>
              <Link href="/contact?pakket=Aangepast" className="btn-primary inline-flex items-center space-x-2">
                <span>Vraag Aangepaste Offerte Aan</span>
                <Crown className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PackagesPage;