/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.pexels.com'],
  },
  // Disable static optimization
  reactStrictMode: true,
  swcMinify: true,
  // Skip specific pages during static generation
  typescript: {
    // Ignore TypeScript errors during build
    ignoreBuildErrors: true,
  },
  eslint: {
    // Ignore ESLint errors during build
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig