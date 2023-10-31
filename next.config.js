/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["localhost"],
  },
  experimental: {
    appDir: true,
  },
  // ...other configuration options...
};

module.exports = nextConfig;
