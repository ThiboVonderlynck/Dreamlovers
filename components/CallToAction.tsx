import React from 'react';
import Link from 'next/link';
import { ArrowRight, Heart } from 'lucide-react';

const CallToAction = () => {
  return (
    <section className="text-black">
      <div className="container-custom border-t border-beige py-16">
        <div className="text-center mx-auto">
          <div className="flex items-center justify-center mb-6">
            <Heart className="h-8 w-8 text-gold mr-3" strokeWidth={1} />
            <span className="text-gold font-medium tracking-wide uppercase text-sm">
              Klaar om te Beginnen?
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
            Laten we jullie Liefdesverhaal creëren
          </h2>
          
          <p className="text-base text-black xl:w-1/2 mx-auto mb-8 leading-relaxed">
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