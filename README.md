# review_ia2_frontend

Interfaz web de la **Biblioteca semántica**: crear, editar y eliminar documentos, buscarlos por significado y ver su embedding.

Backend (API): <https://github.com/MariaJoseMontepequeZet/review_ia2.git>

## Puesta en marcha

1. Levanta el backend (`npm start` en `review_ia2`, puerto 3000).
2. Si la API no está en `http://localhost:3000`, edita `API_URL` en [config.js](config.js).
3. Sirve el frontend:

```bash
npm start
```

Abre <http://localhost:5173>. El backend permite ese origen por CORS; si usas otro puerto, ajusta `FRONTEND_ORIGIN` en el `.env` del backend.

Archivos: `index.html` (interfaz) y `config.js` (URL de la API). Sin dependencias.
