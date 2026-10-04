import { mkdir, writeFile, cp } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { renderRoutes } from '../src/site.mjs';

const root = fileURLToPath(new URL('../', import.meta.url));
const output = resolve(root, 'dist');
// Only generated output is written; no source files or user assets are removed.
await mkdir(output, { recursive: true });
for (const [path, html] of renderRoutes()) {
  const destination = resolve(output, path);
  await mkdir(dirname(destination), { recursive: true });
  await writeFile(destination, html);
}
await cp(resolve(root, 'public'), output, { recursive: true });
console.log(`Built ${renderRoutes().size} static pages in dist/ (zero runtime JavaScript).`);
