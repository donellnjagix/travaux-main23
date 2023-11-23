const { withNextVideo } = require('next-video\process')

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["localhost"],
  },
};

module.exports = withNextVideo(nextConfig);
