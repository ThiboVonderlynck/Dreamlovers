import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Dreamlovers - Wedding Videography',
    short_name: 'Dreamlovers',
    description: 'Capture your love story with cinematic wedding films',
    start_url: '/',
    display: 'standalone',
    background_color: '#FFFFFF',
    theme_color: '#9F8E6E',
    icons: [
      {
        src: '/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
