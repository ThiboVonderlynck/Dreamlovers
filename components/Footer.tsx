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
                                <Link href="/" className="block hover:text-gold transition-colors">
                                    Home
                                </Link>
                                <Link href="/portfolio" className="block hover:text-gold transition-colors">
                                    Portfolio
                                </Link>
                                <Link href="/packages" className="block hover:text-gold transition-colors">
                                    Prijspakketten
                                </Link>
                                <Link href="/contact" className="block hover:text-gold transition-colors">
                                    Contact
                                </Link>
                            </nav>
                        </div>

                        {/* Contact */}
                        <div>
                            <h3 className="text-lg font-inter font-medium text-beige mb-4">Contact</h3>
                            <div className="space-y-3">
                                <div className="flex items-center space-x-3">
                                    <Mail size={20} className="text-gold" />
                                    <span>info@dreamlovers.com</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <Phone size={20} className="text-gold" />
                                    <span>+32 484 36 86 50</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <MapPin size={20} className="text-gold" />
                                    <span>Ichtegem</span>
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