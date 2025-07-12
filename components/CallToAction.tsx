import React from 'react';
import Link from 'next/link';
import { ArrowRight, Heart } from 'lucide-react';

const CallToAction = () => {
  return (
    <section className="py-16 lg:py-24 bg-black text-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto">
          <div className="flex items-center justify-center mb-6">
            <Heart className="h-8 w-8 text-beige mr-3" />
            <span className="text-beige font-medium tracking-wide uppercase text-sm">
              Klaar om te Beginnen?
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
            Laten We Jullie Liefdesverhaal Creëren
          </h2>
          
          <p className="text-xl text-beige mb-8 leading-relaxed">
            Jullie trouwdag verdient het om herinnerd te worden in al zijn schoonheid. 
            Laat ons de magie, de emotie en de vreugde vastleggen die jullie verhaal uniek maken.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-secondary inline-flex items-center">
              Neem Contact Op
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link href="/portfolio" className="btn-primary inline-flex items-center">
              Bekijk Ons Werk
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;