/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ['aws-amplify'],
  },
  images: {
    domains: [],
  },
  // Enable strict mode for better development experience
  reactStrictMode: true,
  // Optimize for production
  swcMinify: true,
};

module.exports = nextConfig;