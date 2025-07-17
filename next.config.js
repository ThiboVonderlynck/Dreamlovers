/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  output: 'standalone',
  experimental: {
    outputFileTracingRoot: process.env.VERCEL ? '/vercel/path0' : undefined,
  },
};

module.exports = nextConfig;
