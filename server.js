// Servidor estático mínimo para desarrollo (sin dependencias).
import http from 'node:http';
import { readFile } from 'node:fs/promises';
import { extname, join, posix } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(fileURLToPath(import.meta.url), '..');
const PORT = process.env.PORT || 5173;
const PERMITIDOS = new Set(['index.html', 'config.js']);
const MIME = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8' };

http.createServer(async (req, res) => {
    const name = posix.normalize(new URL(req.url, 'http://x').pathname).slice(1) || 'index.html';
    if (!PERMITIDOS.has(name)) { res.writeHead(404); return res.end('No encontrado'); }
    res.writeHead(200, { 'Content-Type': MIME[extname(name)] });
    res.end(await readFile(join(ROOT, name)));
}).listen(PORT, () => console.log(`Frontend en http://localhost:${PORT}`));
