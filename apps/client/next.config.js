/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  transpilePackages: ['ui', 'common'],
  images: {
    domains: [
      'official-dev-bucket.s3.ap-northeast-2.amazonaws.com',
      'official-prod-bucket.s3.ap-northeast-2.amazonaws.com',
    ],
  },
  rewrites: async () => [
    {
      source: '/api/client/:path*',
      destination: `${process.env.CLIENT_API_URL}/api/:path*`,
    },
  ],
};

module.exports = nextConfig;
