import React from 'react';

const AboutMe = () => {
  return (
    <section className="py-16 lg:py-24 relative">
      {/* Background that doesn't extend full width - cut off on left */}
      <div className="absolute inset-0 bg-beige ml-[20%] lg:ml-[25%]"></div>
      
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div>
            <div className="relative">
              <img
                src="/images/maxim.jpg"
                alt="Maxim - Videographer"
                className="w-full h-[600px] object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div>
            <div className="mb-6">
              <span className="text-subtitle text-black">EEN TEAM VOL ENERGIE</span>
              <h2 className="text-4xl md:text-5xl font-playfair font-bold mt-2 mb-6 text-black leading-relaxed">
                DREAM LOVERS
              </h2>
            </div>
            
            <div className="space-y-6 text-black text-base">
              <p className="leading-relaxed">
                Wij bestaan uit een jong team, vol energie en passie. Wij houden ervan 
                om intieme momenten vast te leggen, waarbij iemands unieke verhaal in 
                detail kan naverteld worden.
              </p>
              
              <p className="leading-relaxed">
                Het voelt elke keer weer bijzonder en wij waarderen enorm het 
                vertrouwen dat de bruidsparen in ons team stellen. Met dat vertrouwen 
                kunnen wij onze creatieve vrijheid volledig benutten om de mooiste 
                beelden te creëren. Daarnaast leren wij als team telkens bij van elkaar, 
                wat onze films naar een hoger niveau brengt.
              </p>
              
              <p className="leading-relaxed">
                <strong>Videograaf Maxim</strong> - "Ik maak van nature mensen graag blij, en daarom 
                voelt dit werk vaak als een passie. Het is ongelooflijk speciaal om 
                iemands herinneringen voor altijd vast te leggen, en dat is een van de 
                belangrijkste redenen waarom ik dit doe."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;