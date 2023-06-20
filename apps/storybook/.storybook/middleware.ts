import { createProxyMiddleware } from 'http-proxy-middleware';

export function expressMiddleware(router) {
  router.use(
    '/api/client',
    createProxyMiddleware({
      target: process.env.CLIENT_API_URL,
      changeOrigin: true,
      pathRewrite: {
        client: '',
        admin: '',
      },
    })
  );
}
