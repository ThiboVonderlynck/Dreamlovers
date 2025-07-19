'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Play, Volume2, VolumeX, Pause } from 'lucide-react';

const PortfolioPage = () => {
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const [mutedStates, setMutedStates] = useState<boolean[]>(Array(9).fill(true));
  const [playingStates, setPlayingStates] = useState<boolean[]>(Array(9).fill(false));
  const [isMobile, setIsMobile] = useState(false);
  const [isInView, setIsInView] = useState<boolean[]>(Array(9).fill(false));

  useEffect(() => {
    // Detect mobile devices and tablets
    const checkMobile = () => {
      const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      const isTabletOrMobile = /Mobi|Android|iPad|iPhone/i.test(navigator.userAgent) || window.innerWidth <= 1200;
      setIsMobile(isTouchDevice && isTabletOrMobile);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    videoRefs.current.forEach((video, index) => {
      if (!video) return;

      // Add event listeners for play/pause events
      const handlePlay = () => {
        setPlayingStates((prev) => {
          const newStates = [...prev];
          newStates[index] = true;
          return newStates;
        });
      };

      const handlePause = () => {
        setPlayingStates((prev) => {
          const newStates = [...prev];
          newStates[index] = false;
          return newStates;
        });
      };

      const handleEnded = () => {
        // Loop the video
        video.currentTime = 0;
        video.play().catch(() => {});
      };

      video.addEventListener('play', handlePlay);
      video.addEventListener('pause', handlePause);
      video.addEventListener('ended', handleEnded);

      // Create intersection observer for auto-play
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            const videoIndex = index;
            
            if (entry.isIntersecting) {
              // Video is in view
              setIsInView((prev) => {
                const newStates = [...prev];
                newStates[videoIndex] = true;
                return newStates;
              });

              if (!isMobile) {
                // Desktop: auto-play when in view (but later)
                video.play().catch((error) => {
                  console.log(`Auto-play was prevented for video ${videoIndex}:`, error);
                });
              }
            } else {
              // Video is out of view
              setIsInView((prev) => {
                const newStates = [...prev];
                newStates[videoIndex] = false;
                return newStates;
              });

              // Pause video when out of view
              video.pause();
            }
          });
        },
        {
          threshold: isMobile ? 0.3 : 0.6, // Higher threshold for desktop - video must be 60% visible
          rootMargin: isMobile ? '-10% 0px -10% 0px' : '-20% 0px -20% 0px', // Larger margin for desktop
        }
      );

      observer.observe(video);
      observers.push(observer);

      // Cleanup function
      return () => {
        video.removeEventListener('play', handlePlay);
        video.removeEventListener('pause', handlePause);
        video.removeEventListener('ended', handleEnded);
      };
    });

    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, [isMobile]);

  const handleToggleMute = (index: number) => {
    setMutedStates((prev) => {
      const newStates = [...prev];
      newStates[index] = !newStates[index];
      const video = videoRefs.current[index];
      if (video) video.muted = newStates[index];
      return newStates;
    });
  };

  const handleVideoClick = (index: number) => {
    if (!isMobile) return; // Only handle clicks on mobile

    const video = videoRefs.current[index];
    if (!video) return;

    if (video.paused) {
      video.play().catch((error) => {
        console.log(`Play was prevented for video ${index}:`, error);
      });
      setPlayingStates((prev) => {
        const newStates = [...prev];
        newStates[index] = true;
        return newStates;
      });
    } else {
      video.pause();
      setPlayingStates((prev) => {
        const newStates = [...prev];
        newStates[index] = false;
        return newStates;
      });
    }
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

  // Workflow steps with Dutch descriptions and video file names
  const workflowSteps = [
    {
      id: 1,
      title: "De start van de dag",
      description: "De eerste zon straalt naar binnen en jullie bereiden je voor op dat bijzondere moment waarop jullie elkaar voor het eerst zullen zien.",
      videoName: "Startvandedag",
    },
    {
      id: 2,
      title: "First look",
      description: "Het begin van wat beloofd een prachtige dag te worden.",
      videoName: "Firstlook",
    },
    {
      id: 3,
      title: "Zeg 'ja'",
      description: "Omringd door familie en vrienden zeggen jullie met liefde en vol overtuiging 'ja' tegen elkaar.",
      videoName: "Zegja",
    },
    {
      id: 4,
      title: "Fotoshoot",
      description: "Jullie twee, in een moment waarin de tijd even stil lijkt te staan.",
      videoName: "Fotoshoot",
    },
    {
      id: 5,
      title: "Geloftes",
      description: "Jullie persoonlijke woorden die deze bijzondere dag voor altijd betekenis geven.",
      videoName: "Geloftes",
    },
    {
      id: 6,
      title: "Familie & Vrienden",
      description: "Samen genieten van momenten vol warmte en plezier. Lachen, liefhebben en dicht bij elkaar zijn.",
      videoName: "FamilieVrienden",
    },
    {
      id: 7,
      title: "Entree in de zaal",
      description: "Het sprankelende begin van het feest, klaar om samen te vieren.",
      videoName: "Intrede",
    },
    {
      id: 8,
      title: "Dessert",
      description: "Het zoete moment om het avondmaal mee af te sluiten.",
      videoName: "Dessert",
    },
    {
      id: 9,
      title: "Openingsdans",
      description: "Jullie eerste dans als getrouwd stel — Samen bewegen op het ritme van jullie geluk, terwijl de wereld even stil lijkt te staan.",
      videoName: "Openingsdans",
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
              const isEven = index % 2 === 0;
              
              return (
                <div 
                  key={step.id}
                  className={`grid lg:grid-cols-2 gap-12 items-center`}
                >
                  <div className={`${isEven ? 'lg:order-1' : 'lg:order-2'} text-center`}>
                    <h3 className="text-2xl md:text-3xl font-playfair font-bold mb-4 text-black">
                      {step.title}
                    </h3>
                    
                    <p className="text-body text-lg leading-relaxed text-black">
                      {step.description}
                    </p>
                  </div>

                  <div className={`${isEven ? 'lg:order-2' : 'lg:order-1'}`}> 
                    <div className="relative group overflow-hidden">
                      <div className="aspect-video">
                        <video
                          ref={el => {
                            videoRefs.current[index] = el;
                            if (el) {
                              el.muted = mutedStates[index];
                              el.loop = true;
                              if (isMobile) {
                                el.playsInline = true;
                                el.preload = "metadata";
                                el.controls = true; // Add native controls for mobile
                              } else {
                                el.preload = "auto";
                                el.controls = false; // No controls for desktop
                              }
                            }
                          }}
                          className="w-full h-full object-cover"
                          muted={mutedStates[index]}
                          preload={isMobile ? "metadata" : "auto"}
                          playsInline
                          loop
                          controls={isMobile}
                          poster={`/images/portfolio/${step.videoName}.webp`}
                          onClick={!isMobile ? () => handleVideoClick(index) : undefined}
                        >
                          <source src={`/videos/portfolio/${step.videoName}.webm`} type="video/webm" />
                          <source src={`/videos/portfolio/${step.videoName}.mp4`} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      </div>
                      
                      {/* Volume button - only for desktop */}
                      {!isMobile && (
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
                      )}

                      {/* In view indicator (for debugging) */}
                      {process.env.NODE_ENV === 'development' && (
                        <div className="absolute top-4 left-4 z-10 bg-black/60 text-white text-xs px-2 py-1 rounded">
                        </div>
                      )}
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