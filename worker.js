export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const path = url.pathname;

    const response = await env.ASSETS.fetch(request);

    if (path.endsWith('.json') || path.endsWith('painel-gestao-mtc.html')) {
      const headers = new Headers(response.headers);
      headers.set('Cache-Control', 'no-store, no-cache, must-revalidate');
      headers.set('Pragma', 'no-cache');
      return new Response(response.body, { status: response.status, headers });
    }

    return response;
  }
};
