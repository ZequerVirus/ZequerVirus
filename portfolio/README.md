# Portfolio — Carlos Sequeiros

Landing page de presentación construida con **React + TypeScript**, **Vite** y **Framer Motion**.

## Características

- Modo claro y oscuro (sigue la preferencia del sistema y recuerda tu elección)
- Diseño responsive (móvil, tablet y escritorio)
- Fondo de partículas con parallax que reacciona al scroll
- Objeto 3D de "capas de Clean Architecture" que rota con el scroll
- Animaciones de entrada, tarjetas con efecto tilt, marquee del stack y barra de progreso
- Paleta minimalista de tonos por sección y manchas de color "aurora" en el fondo
- Logos oficiales de lenguajes y herramientas ([simple-icons](https://simpleicons.org)) con filtros por categoría
- Sección de soluciones explicadas en lenguaje de cliente, según el rol y las habilidades
- Sección de habilidades: ingeniería de software y fundamentos de informática
- Perfil Fullstack con AWS y Cloudflare
- Contacto con correo, teléfono, WhatsApp y GitHub, y un formulario que abre el correo o WhatsApp con el mensaje redactado (sin backend)
- Respeta `prefers-reduced-motion`

Los datos (nombre, bio, habilidades, stack y contacto) están en `src/data.ts`.

## Scripts

```bash
npm install
npm run dev       # desarrollo en http://localhost:5173
npm run build     # typecheck + build de producción en dist/
npm run preview   # sirve el build localmente
npm run deploy    # build + deploy manual con Wrangler
```

## Despliegue en Cloudflare Workers

El proyecto usa **Workers Builds** con Workers Assets. La carpeta publicada (`dist`) y el modo SPA están definidos en `wrangler.jsonc`.

1. En el dashboard ve a **Workers & Pages → Create → Workers → Connect to Git**.
2. Selecciona el repositorio `ZequerVirus/ZequerVirus` y la rama `main`.
3. Configura el build:

   | Campo          | Valor                  |
   | -------------- | ---------------------- |
   | Root directory | `portfolio`            |
   | Build command  | `npm ci && npm run build` |
   | Deploy command | `npx wrangler deploy`  |
   | Node version   | `22` (`.nvmrc`)        |

4. Pulsa **Save and Deploy**. Cada push a `main` redespliega automáticamente.

### Si un deployment queda en `Queued`

- El plan Free permite **1 build concurrente**: cancela builds atascados y usa **Retry deployment**.
- Desactiva los **preview builds** para ramas que no sean `main`, especialmente `output` .
- Como alternativa inmediata, despliega a mano desde `portfolio/`:

  ```bash
  npx wrangler login   # solo la primera vez
  npm run deploy
  ```
