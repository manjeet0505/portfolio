/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        port: '',
        pathname: '/**',
      },
    ],
    unoptimized: true,
  },
  // Enable React strict mode
  reactStrictMode: true,
  // Configure for Netlify deployment
  distDir: '.next',
};

module.exports = nextConfig; 