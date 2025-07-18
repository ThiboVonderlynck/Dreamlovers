import React from 'react';
import ContactForm from '@/components/ContactForm';
import { Phone, Mail } from 'lucide-react';

const ContactPage = () => {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="py-16 lg:py-24 bg-beige">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-subtitle">Contact</span>
            <h1 className="text-4xl md:text-6xl font-playfair font-bold mt-2 mb-6">
              Laat hier een afspraak achter
            </h1>
            <p className="text-body text-lg leading-relaxed">
              Contacteer ons of plan vrijblijvend een 
              afspraak in
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {/* Contact Form */}
            <div className="mb-16">
              <h2 className="text-3xl font-playfair font-bold mb-6">Stuur ons een bericht</h2>
              <p className="text-body mb-8">
                Vertel ons over jullie bijzondere dag en wij nemen binnen 24 uur contact met jullie op 
                met een gepersonaliseerde offerte en beschikbaarheid.
              </p>
              <ContactForm />
            </div>

            {/* Contact Info */}
            <div className="p-8 lg:p-12">
              <h2 className="text-3xl font-playfair font-bold mb-8 text-center">Contactinformatie</h2>
              
              <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-beige/50 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Telefoon</h3>
                    <p className="text-body text-lg">+32 484 36 86 50</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-beige/50 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Email</h3>
                    <p className="text-body text-lg">info@dreamlovers.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;