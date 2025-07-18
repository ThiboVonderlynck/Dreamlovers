'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Play, Heart, Camera, Users, Music, Volume2, VolumeX } from 'lucide-react';

const PortfolioPage = () => {
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const [mutedStates, setMutedStates] = useState<boolean[]>(Array(9).fill(true));

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    videoRefs.current.forEach((video, index) => {
      if (!video) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              video.play().catch((error) => {
                console.log(`Auto-play was prevented for video ${index}:`, error);
              });
            } else {
              video.pause();
            }
          });
        },
        {
          threshold: 0.15,
          rootMargin: '-40% 0px -40% 0px', // Play when video is centered in viewport
        }
      );

      observer.observe(video);
      observers.push(observer);
    });

    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, []);

  const handleToggleMute = (index: number) => {
    setMutedStates((prev) => {
      const newStates = [...prev];
      newStates[index] = !newStates[index];
      // Actually update the video element
      const video = videoRefs.current[index];
      if (video) video.muted = newStates[index];
      return newStates;
    });
  };

  // Showreel videos
  const showreelVideos = [
    {
      id: 1,
      title: "Sophie & Michiel - Trailer",
      videoId: "CY7D7dcoPBM",
      duration: "2:27"
    },
    {
      id: 2,
      title: "Loes & Baptiste - Trailer", 
      videoId: "rdVYZ5HVGgY",
      duration: "2:17"
    },
    {
      id: 3,
      title: "Lynn & Maarten - trailer",
      videoId: "ySx8nQrGLJQ", 
      duration: "1:55"
    }
  ];

  // Workflow steps with Dutch descriptions
  const workflowSteps = [
    {
      id: 1,
      title: "De start van de dag",
      description: "De eerste zon straalt naar binnen en jullie bereiden je voor op dat bijzondere moment waarop jullie elkaar voor het eerst zullen zien.",
      thumbnail: "/images/portfolio/Startvandedag.webp",
      videoPath: "/videos/portfolio/Startvandedag.webm", // Easy to replace later
      icon: Heart
    },
    {
      id: 2,
      title: "First look",
      description: "Het begin van wat beloofd een prachtige dag te worden.",
      thumbnail: "/images/portfolio/Firstlook.webp",
      videoPath: "/videos/portfolio/Firstlook.webm", // Easy to replace later
      icon: Camera
    },
    {
      id: 3,
      title: "Zeg 'ja'",
      description: "Omringd door familie en vrienden zeggen jullie met liefde en vol overtuiging 'ja' tegen elkaar.",
      thumbnail: "/images/portfolio/Zegja.webp",
      videoPath: "/videos/portfolio/Zegja.webm", // Easy to replace later
      icon: Heart
    },
    {
      id: 4,
      title: "Fotoshoot",
      description: "Jullie twee, in een moment waarin de tijd even stil lijkt te staan.",
      thumbnail: "/images/portfolio/Fotoshoot.webp",
      videoPath: "/videos/portfolio/Fotoshoot.webm", // Easy to replace later
      icon: Camera
    },
    {
      id: 5,
      title: "Geloftes",
      description: "Jullie persoonlijke woorden die deze bijzondere dag voor altijd betekenis geven.",
      thumbnail: "/images/portfolio/Geloftes.webp",
      videoPath: "/videos/portfolio/Geloftes.webm", // Easy to replace later
      icon: Heart
    },
    {
      id: 6,
      title: "Familie & Vrienden",
      description: "Samen genieten van momenten vol warmte en plezier. Lachen, liefhebben en dicht bij elkaar zijn.",
      thumbnail: "/images/portfolio/FamilieVrienden.webp",
      videoPath: "/videos/portfolio/FamilieVrienden.webm", // Easy to replace later
      icon: Users
    },
    {
      id: 7,
      title: "Entree in de zaal",
      description: "Het sprankelende begin van het feest, klaar om samen te vieren.",
      thumbnail: "/images/portfolio/Intrede.webp",
      videoPath: "/videos/portfolio/Intrede.webm", // Easy to replace later
      icon: Music
    },
    {
      id: 8,
      title: "Dessert",
      description: "Het zoete moment om het avondmaal mee af te sluiten.",
      thumbnail: "/images/portfolio/Dessert.webp",
      videoPath: "/videos/portfolio/Dessert.webm", // Easy to replace later
      icon: Heart
    },
    {
      id: 9,
      title: "Openingsdans",
      description: "Jullie eerste dans als getrouwd stel — Samen bewegen op het ritme van jullie geluk, terwijl de wereld even stil lijkt te staan.",
      thumbnail: "/images/portfolio/Openingsdans.webp",
      videoPath: "/videos/portfolio/Openingsdans.webm", // Easy to replace later
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
                <div className="relative aspect-video">
                  <iframe
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/${video.videoId}?hd=1&vq=hd1080`}
                    frameBorder="0"
                    title={video.title}
                    aria-hidden="true"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
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
      <section className="py-16 lg:py-24 bg-beige/20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="text-subtitle text-subtitle">Ons Proces</span>
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mt-2 mb-6 text-black">
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
                    <h3 className="text-2xl md:text-3xl font-playfair font-bold mb-4 text-black">
                      {step.title}
                    </h3>
                    
                    <p className="text-body text-lg leading-relaxed text-black">
                      {step.description}
                    </p>
                  </div>

                  {/* Video */}
                  <div className={`${isEven ? 'lg:order-2' : 'lg:order-1'}`}> 
                    <div className="relative group overflow-hidden">
                      <video
                        ref={el => {
                          videoRefs.current[index] = el;
                          if (el) el.muted = mutedStates[index];
                        }}
                        className="w-full h-80 object-cover"
                        muted={mutedStates[index]}
                        preload="auto"
                        poster={step.thumbnail} // Use thumbnail as placeholder
                        playsInline
                      >
                        <source src={step.videoPath} type="video/webm" />
                        Your browser does not support the video tag.
                      </video>
                      {/* Custom volume button */}
                      <button
                        type="button"
                        aria-label={mutedStates[index] ? 'Unmute video' : 'Mute video'}
                        onClick={() => handleToggleMute(index)}
                        className="absolute bottom-4 right-4 z-10 bg-black/60 hover:bg-black/80 text-white rounded-full p-2 transition-all opacity-100 focus:outline-none shadow-lg"
                        tabIndex={0}
                      >
                        {mutedStates[index] ? (
                          <VolumeX className="w-4 h-4" />
                        ) : (
                          <Volume2 className="w-4 h-4" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Same Day Edit Section */}
      <section className="py-16 bg-beige/10">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-1">
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                <img 
                  src="/images/portfolio/sameday.webp"
                  alt="Emotionele reacties tijdens het bekijken van de same day edit"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="order-2">
              <span className="text-subtitle">Same Day Edit</span>
              <h2 className="text-3xl md:text-4xl font-playfair font-bold mt-2 mb-6">
                Herbeleef jullie dag nog dezelfde avond
              </h2>
              <div className="space-y-4 text-lg leading-relaxed">
                <p>
                  Een same day video is ideaal om jullie dag nog eens samen te vatten, 
                  wat vaak zorgt voor ontroerende reacties. Daarnaast kan het een leuk 
                  moment zijn om de openingsdans in te leiden en iedereen rond de dansvloer 
                  te vragen na het filmpje.
                </p>
                <p>
                  Bovendien krijgen ook de gasten die er niet de hele dag bij konden zijn, 
                  zo een inkijk in hoe jullie dag verlopen is. Een bijzondere toevoeging 
                  aan een toch al onvergetelijke dag!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;