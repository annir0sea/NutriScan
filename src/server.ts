import service from './service.ts';
import html from './app-html.ts';
Bun.serve({
  port: service.port(),
  hostname: '0.0.0.0',
  fetch(req: Request) {
    const url = new URL(req.url);
    if (url.pathname === '/' || url.pathname === '/index.html')
      return new Response(html, {headers:{'content-type':'text/html; charset=utf-8','cache-control':'no-store','x-content-type-options':'nosniff'}});
    if (url.pathname === '/healthz')
      return new Response('OK',{headers:{'content-type':'text/plain'}});
    return new Response('Not found',{status:404});
  },
});
