/** @type {import('next').NextConfig } */
const nextConfig = {images: {
    unoptimized: true,
    formats: ['image/webp', 'image/avif'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '10xvideo.b-cdn.net',
      },
    ],
  },};

export default nextConfig;
