import Link from "next/link";
import { Instagram, Facebook, Youtube, Mail, Phone, MapPin, Heart } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-black text-white py-12 text-base">
            <div className="container-custom">
                <div className="flex flex-col lg:flex-row justify-between gap-8 mb-8">
                    {/* Left Column - Brand */}
                    <div className="flex-1 max-w-md">
                        <Link href="/" className="text-4xl font-dancing font-bold text-white block mb-2">
                            Dreamlovers
                        </Link>
                        <p className="text-lg mb-4 text-beige">Trouw Videografie</p>
                        <p className="text-gray-300 leading-relaxed">
                            Wij leggen jullie liefdesverhaal vast in cinematografische films die jullie voor altijd zullen koesteren. Elke trouwdag is uniek, elk verhaal verdient de mooiste vertelling.
                        </p>
                        
                        {/* Social Media Icons */}
                        <div className="flex space-x-4 mt-6">
                            <Link href="#" className="hover:text-gold transition-colors">
                                <Instagram size={24} strokeWidth={1.4}/>
                            </Link>
                            <Link href="#" className="hover:text-gold transition-colors">
                                <Facebook size={24} strokeWidth={1.4}/>
                            </Link>
                            <Link href="#" className="hover:text-gold transition-colors">
                                <Youtube size={24} strokeWidth={1.4}/>
                            </Link>
                        </div>
                    </div>

                    {/* Right Side - Navigation and Contact grouped */}
                    <div className="flex flex-col md:flex-row gap-32">
                        {/* Navigation */}
                        <div>
                            <h3 className="text-lg font-inter font-medium text-beige mb-4">Navigatie</h3>
                            <nav className="space-y-2">
                                <Link href="/" className="relative block text-white hover:text-white transition-colors duration-200 group">
                                    <span className="relative inline-block">
                                        Home
                                        <span className="absolute bottom-0 left-1/2 w-0 h-px bg-white transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                                    </span>
                                </Link>
                                <Link href="/portfolio" className="relative block text-white hover:text-white transition-colors duration-200 group">
                                    <span className="relative inline-block">
                                        Portfolio
                                        <span className="absolute bottom-0 left-1/2 w-0 h-px bg-white transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                                    </span>
                                </Link>
                                <Link href="/packages" className="relative block text-white hover:text-white transition-colors duration-200 group">
                                    <span className="relative inline-block">
                                        Prijspakketten
                                        <span className="absolute bottom-0 left-1/2 w-0 h-px bg-white transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                                    </span>
                                </Link>
                                <Link href="/contact" className="relative block text-white hover:text-white transition-colors duration-200 group">
                                    <span className="relative inline-block">
                                        Contact
                                        <span className="absolute bottom-0 left-1/2 w-0 h-px bg-white transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                                    </span>
                                </Link>
                            </nav>
                        </div>

                        {/* Contact */}
                        <div>
                            <h3 className="text-lg font-inter font-medium text-beige mb-4">Contact</h3>
                            <div className="space-y-3">
                                <div className="flex items-center space-x-3">
                                    <Mail size={20} className="text-gold" />
                                    <a 
                                        href="mailto:info@dreamlovers.com" 
                                        className="relative inline-block text-white hover:text-white transition-colors duration-200 group cursor-pointer"
                                    >
                                        info@dreamlovers.com
                                        <span className="absolute bottom-0 left-1/2 w-0 h-px bg-white transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                                    </a>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <Phone size={20} className="text-gold" />
                                    <a 
                                        href="tel:+32484368650" 
                                        className="relative inline-block text-white hover:text-white transition-colors duration-200 group cursor-pointer"
                                    >
                                        +32 484 36 86 50
                                        <span className="absolute bottom-0 left-1/2 w-0 h-px bg-white transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                                    </a>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <MapPin size={20} className="text-gold" />
                                    <a 
                                        href="https://maps.google.com/?q=Ichtegem,Belgium" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="relative inline-block text-white hover:text-white transition-colors duration-200 group cursor-pointer"
                                    >
                                        Ichtegem
                                        <span className="absolute bottom-0 left-1/2 w-0 h-px bg-white transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Section - Copyright */}
                <div className="border-t border-gray-700 pt-6">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-gray-400 text-sm">
                            © 2025 Dreamlovers, Alle rechten voorbehouden
                        </p>
                        <p className="text-gray-400 text-sm flex items-center mt-2 md:mt-0">
                            Gemaakt met <Heart size={16} className="mx-1 text-beige" fill="#EAD9B3" /> voor jullie liefdesverhaal
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;