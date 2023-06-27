/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  transpilePackages: ['ui', 'common'],
  compiler: {
    emotion: true,
  },
  rewrites: async () => [
    {
      source: '/api/client/:path*',
      destination: `${process.env.CLIENT_API_URL}/api/:path*`,
    },
  ],
};

module.exports = nextConfig;
