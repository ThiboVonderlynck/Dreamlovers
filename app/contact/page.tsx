import React from 'react';
import ContactForm from '@/components/ContactForm';
import { MapPin, Phone, Mail, Instagram, Camera } from 'lucide-react';

const ContactPage = () => {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="py-16 lg:py-24 bg-beige/20">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-subtitle">Contact</span>
            <h1 className="text-4xl md:text-6xl font-playfair font-bold mt-2 mb-6">
              Laat hier een afspraak achter
            </h1>
            <p className="text-body text-lg leading-relaxed">
              Contacteer ons of plan vrijblijvend een 
              afspraak in via
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-playfair font-bold mb-6">Stuur ons een bericht</h2>
              <p className="text-body mb-8">
                Vertel ons over jullie bijzondere dag en wij nemen binnen 24 uur contact met jullie op 
                met een gepersonaliseerde offerte en beschikbaarheid.
              </p>
              <ContactForm />
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-playfair font-bold mb-6">Contactinformatie</h2>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-beige/30 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Onze Locatie</h3>
                    <p className="text-body">
                      123 Trouwstraat<br />
                      Amsterdam, Nederland 1000 AB
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-beige/30 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Telefoon</h3>
                    <p className="text-body">+31 6 1234 5678</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-beige/30 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-body">hello@dreamlovers.com</p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="mb-8">
                <h3 className="font-playfair font-semibold text-xl mb-4">Volg Ons Werk</h3>
                <div className="flex space-x-4">
                  <a 
                    href="https://instagram.com/dreamlovers" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-beige/30 rounded-full flex items-center justify-center hover:bg-gold hover:text-white transition-colors duration-300"
                  >
                    <Instagram className="h-6 w-6" />
                  </a>
                  <a 
                    href="https://vimeo.com/dreamlovers" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-beige/30 rounded-full flex items-center justify-center hover:bg-gold hover:text-white transition-colors duration-300"
                  >
                    <Camera className="h-6 w-6" />
                  </a>
                </div>
              </div>

              {/* Map */}
              <div className="rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2436.8434567890123!2d4.9041389!3d52.3675734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c609c3db87e4b1%3A0xb3a175f8c4b5a8a6!2sAmsterdam%2C%20Netherlands!5e0!3m2!1sen!2sus!4v1634567890123!5m2!1sen!2sus"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Dreamlovers Locatie Kaart"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;