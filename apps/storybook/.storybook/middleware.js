require('dotenv').config();
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function storybookMiddleware(router) {
  router.use(
    '/api/client',
    createProxyMiddleware({
      target: process.env.CLIENT_API_URL,
      changeOrigin: true,
      pathRewrite: {
        client: '',
      },
    })
  );
};
