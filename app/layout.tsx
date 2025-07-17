import './globals.css';
import type { Metadata } from 'next';
import { Inter, Playfair_Display, Dancing_Script } from 'next/font/google';
import Navigation from '@/components/Navigation';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });
const dancingScript = Dancing_Script({ subsets: ['latin'], variable: '--font-dancing-script' });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000'),
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
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${dancingScript.variable}`}>
      <body className="bg-white text-black antialiased">
        <Navigation />
        <main>
          {children}
        </main>
        <CallToAction />
        <Footer />
      </body>
    </html>
  );
}