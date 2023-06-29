/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  transpilePackages: ['ui', 'common'],
  output: 'standalone',
  compiler: {
    emotion: true,
  },
  images: {
    domains: ['bucket.ottokeng.site'],
  },
  rewrites: async () => [
    {
      source: '/api/client/:path*',
      destination: `${process.env.CLIENT_API_URL}/api/:path*`,
    },
  ],
};

module.exports = nextConfig;
