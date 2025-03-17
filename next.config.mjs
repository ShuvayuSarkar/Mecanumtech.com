/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // Allow all external images (adjust for production)
      },
    ],
    // If using local images:
    domains: ['localhost'], // Add your domain in production
  },
};

export default nextConfig;