/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  transpilePackages: ["ui", "common"],
  compiler: {
    emotion: true,
  },
};

module.exports = nextConfig;
