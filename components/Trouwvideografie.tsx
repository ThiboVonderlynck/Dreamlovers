import React from 'react';
import { Camera, Heart, Users } from 'lucide-react';

const AboutSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-black">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <div className="mb-6">
              <span className="text-subtitle text-beige">Trouwvideografie</span>
              <h2 className="text-4xl md:text-5xl font-playfair font-bold mt-2 mb-6 text-white leading-relaxed">
                Jullie dag, filmisch in beeld gebracht
              </h2>
            </div>
            
            <div className="space-y-6 text-body text-white text-base">
              <p className="leading-relaxed">
                Wij brengen jullie trouwdag tot leven door het verfilmen van de échte, pure emoties. Jullie 
                momenten worden op een spontane manier in beeld gebracht, vol liefde, warmte en 
                betekenis. Zo kunnen jullie telkens opnieuw genieten van jullie dag en deze herbeleven.
              </p>
              
              <p>
                Met een zorgvuldige combinatie van beeld, audio en muziek maken we een persoonlijk en 
                intiem verhaal — een film die laat 'dromen'. Naast een trouwfilm kunnen jullie bij Dream Lovers 
                ook terecht voor een ceremoniefilm, trailer, same day... Bekijk alvast even ons portfolio :)
              </p>
            </div>

            {/* Features */}
            <div className="grid sm:grid-cols-3 gap-6 mt-10 text-white">
              <div className="text-left group text-white">
                <div className="w-16 h-16 bg-beige rounded-full flex items-center justify-center mb-4">
                  <Camera className="h-8 w-8 text-gold" />
                </div>
                <h3 className="font-inter font-medium mb-2">Cinématische Kwaliteit</h3>
                <p className="text-sm">Professionele 4K-opnames met cinématische technieken</p>
              </div>
              
              <div className="text-left group text-white">
                <div className="w-16 h-16 bg-beige rounded-full flex items-center justify-center mb-4">
                  <Heart className="h-8 w-8 text-gold" />
                </div>
                <h3 className="font-inter font-medium mb-2">Authentieke Emoties</h3>
                <p className="text-sm">Het vastleggen van oprechte momenten en echte emoties</p>
              </div>
              
              <div className="text-left group text-white">
                <div className="w-16 h-16 bg-beige rounded-full flex items-center justify-center mb-4">
                  <Users className="h-8 w-8 text-gold" />
                </div>
                <h3 className="font-inter font-medium mb-2">Persoonlijke Aanpak</h3>
                <p className="text-sm">Elk koppel krijgt een unieke, op maat gemaakte ervaring</p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=800&h=600"
                alt="Wedding couple embracing"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
              
              {/* Floating card */}
              <div className="absolute -bottom-8 -left-8 bg-white p-6 max-w-xs">
                <div className="flex items-center mb-2">
                  <Heart className="h-5 w-5 text-gold mr-2" />
                  <span className="font-playfair font-semibold">Onze Belofte</span>
                </div>
                <p className="text-sm text-body">
                  Wij leggen niet alleen de momenten vast, maar ook de emoties die jullie dag onvergetelijk maken.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;