/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["cdn.usegalileo.ai", "assets.aceternity.com", "ray.so"],
  },
};

export default nextConfig;
