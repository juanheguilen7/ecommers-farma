/** @type {import('next').NextConfig} */
const path = require('path');
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    serverComponentsExternalPackages: ["mongoose"],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },

};

module.exports = nextConfig

