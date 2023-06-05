/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  transpilePackages: ['ui', 'common', 'api'],
  compiler: {
    emotion: true,
  },
  rewrites: async () => [
    {
      source: '/api/client/:path*',
      destination: `${process.env.CLIENT_API_URL}/api/:path*`,
    },
    // {
    //   source: "/api/admin/:path*",
    //   destination: `${process.env.ADMIN_API_URL}/api/:path*`,
    // },
  ],
  images: {
    domains: [
      'files.porsche.com',
      'official-gsm-dev-server-bucket.s3.ap-northeast-2.amazonaws.com',
    ],
  },
};

module.exports = nextConfig;
