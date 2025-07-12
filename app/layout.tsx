import './globals.css';
import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import Navigation from '@/components/Navigation';
import CallToAction from '@/components/CallToAction';
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });

export const metadata: Metadata = {
  title: 'Dreamlovers - Trouwvideografie | Cinématische Trouwfilms',
  description: 'Leg jullie liefdesverhaal vast met Dreamlovers trouwvideografie. Wij creëren cinématische, romantische en documentaire trouwfilms die jullie kostbaarste momenten voor altijd bewaren.',
  keywords: 'trouwvideografie, trouwfilms, cinématische trouwvideo\'s, romantische trouwfilms, documentaire trouwvideo\'s, dreamlovers, trouwherinneringen',
  authors: [{ name: 'Dreamlovers' }],
  openGraph: {
    title: 'Dreamlovers - Trouwvideografie',
    description: 'Leg jullie liefdesverhaal vast met cinématische trouwfilms',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dreamlovers - Trouwvideografie',
    description: 'Leg jullie liefdesverhaal vast met cinématische trouwfilms',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="bg-white text-black antialiased">
        <Navigation />
        <main>
          {children}
        </main>
        <CallToAction />
      </body>
    </html>
  );
}