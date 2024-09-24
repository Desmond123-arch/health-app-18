/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "cdn.usegalileo.ai",
      "assets.aceternity.com",
      "images.unsplash.com",
    ],
  },
};

export default nextConfig;
