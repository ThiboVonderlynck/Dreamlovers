'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Prijspakketten', href: '/packages' },
    { name: 'Contact', href: '/contact' },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="top-0 w-full z-50 bg-black">
      <div className="container-custom">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="text-4xl font-dancing font-bold text-white">
            Dreamlovers
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`relative text-sm font-medium transition-colors duration-200 ${
                  pathname === item.href
                    ? 'text-white border-b border-white'
                    : 'text-white hover:text-white group'
                }`}
              >
                {item.name}
                {pathname !== item.href && (
                  <span className="absolute bottom-0 left-1/2 w-0 h-px bg-white transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                )}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-md hover:bg-beige/20 transition-colors"
            aria-label="Toggle menu"
          >
            <Menu className="h-6 w-6 text-white" />
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div 
          className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 md:hidden ${
            isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`} 
          onClick={() => setIsOpen(false)} 
        />

        {/* Mobile Menu Panel */}
        <div className={`fixed top-0 left-0 h-full w-[300px] bg-black text-white z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}>
          <div className="flex justify-between items-center px-6 py-8 border-b border-white/20">
            <Link href="/" className="text-4xl font-dancing font-bold text-white">
              Dreamlovers
            </Link>
            <button 
              onClick={() => setIsOpen(false)} 
              className="text-white hover:text-gold transition-colors"
              aria-label="Close mobile menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          
          <ul className="flex flex-col">
            {navItems.map((item) => (
              <li key={item.name} className="border-b border-white/20">
                <Link 
                  href={item.href} 
                  onClick={() => setIsOpen(false)} 
                  className={`text-lg transition-colors px-6 py-3 block ${
                    pathname === item.href
                      ? 'text-white bg-white/10'
                      : 'text-white hover:text-gold'
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;