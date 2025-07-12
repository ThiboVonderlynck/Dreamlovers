import React from 'react';
import { Camera, Heart, Users } from 'lucide-react';

const AboutSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-beige/20">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <div className="mb-6">
              <span className="text-subtitle">Trouwvideografie</span>
              <h2 className="text-4xl md:text-5xl font-playfair font-bold mt-2 mb-6">
                Jullie dag, filmisch in beeld gebracht
              </h2>
            </div>
            
            <div className="space-y-6 text-body">
              <p className="text-lg leading-relaxed">
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
            <div className="grid sm:grid-cols-3 gap-6 mt-10">
              <div className="text-center group">
                <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Camera className="h-8 w-8 text-gold" />
                </div>
                <h3 className="font-playfair font-semibold mb-2">Cinématische Kwaliteit</h3>
                <p className="text-sm text-body">Professionele 4K-opnames met cinématische technieken</p>
              </div>
              
              <div className="text-center group">
                <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Heart className="h-8 w-8 text-gold" />
                </div>
                <h3 className="font-playfair font-semibold mb-2">Authentieke Emoties</h3>
                <p className="text-sm text-body">Het vastleggen van oprechte momenten en echte emoties</p>
              </div>
              
              <div className="text-center group">
                <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Users className="h-8 w-8 text-gold" />
                </div>
                <h3 className="font-playfair font-semibold mb-2">Persoonlijke Aanpak</h3>
                <p className="text-sm text-body">Elk koppel krijgt een unieke, op maat gemaakte ervaring</p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=800&h=600"
                alt="Wedding couple embracing"
                className="rounded-lg w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
              
              {/* Floating card */}
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-lg max-w-xs">
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