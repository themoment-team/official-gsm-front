/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  transpilePackages: ['ui', 'common'],
  compiler: {
    emotion: true,
  },
  images: {
    domains: ['files.porsche.com'],
  },
};

module.exports = nextConfig;
