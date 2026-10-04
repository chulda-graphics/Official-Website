import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { resolve, extname, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(fileURLToPath(new URL('../dist/', import.meta.url)));
const port = Number(process.env.PORT || 4173);
const types = { '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8', '.svg': 'image/svg+xml', '.png': 'image/png', '.jpg': 'image/jpeg', '.mp4': 'video/mp4', '.webm': 'video/webm' };

export async function responseFor(pathname) {
  let path;
  try { path = resolve(root, `.${decodeURIComponent(pathname)}`); } catch { return { status: 400, body: 'Invalid path', type: 'text/plain' }; }
  if (path !== root && !path.startsWith(`${root}${sep}`)) return { status: 403, body: 'Forbidden', type: 'text/plain' };
  try {
    if ((await stat(path)).isDirectory()) path = resolve(path, 'index.html');
    return { status: 200, body: await readFile(path), type: types[extname(path)] || 'application/octet-stream' };
  } catch {
    return { status: 404, body: await readFile(resolve(root, '404.html')), type: types['.html'] };
  }
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  createServer(async (req, res) => {
    if (!['GET', 'HEAD'].includes(req.method)) { res.writeHead(405); res.end(); return; }
    try {
      const result = await responseFor(new URL(req.url, `http://127.0.0.1:${port}`).pathname);
      res.writeHead(result.status, { 'Content-Type': result.type, 'Cache-Control': 'no-store' });
      res.end(req.method === 'HEAD' ? undefined : result.body);
    } catch { res.writeHead(500); res.end('Build the site before previewing.'); }
  }).listen(port, '127.0.0.1', () => console.log(`Local prototype: http://127.0.0.1:${port}`));
}
