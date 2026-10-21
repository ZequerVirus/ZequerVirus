# Portfolio — Carlos Sequeiros

Landing page de presentación construida con **React + TypeScript**, **Vite** y **Framer Motion**.

## Características

- Modo claro y oscuro (sigue la preferencia del sistema y recuerda tu elección)
- Diseño responsive (móvil, tablet y escritorio)
- Fondo de partículas con parallax que reacciona al scroll
- Objeto 3D de "capas de Clean Architecture" que rota con el scroll
- Animaciones de entrada, tarjetas con efecto tilt, marquee del stack y barra de progreso
- Respeta `prefers-reduced-motion`

Los datos (nombre, bio, stack, contacto) provienen del perfil de GitHub [@ZequerVirus](https://github.com/ZequerVirus). Para actualizarlos, edita `src/data.ts`.

## Scripts

```bash
npm install
npm run dev       # desarrollo en http://localhost:5173
npm run build     # typecheck + build de producción en dist/
npm run preview   # sirve el build localmente
```

## Despliegue en Cloudflare Pages

1. En el dashboard de Cloudflare ve a **Workers & Pages → Create → Pages → Connect to Git**.
2. Selecciona el repositorio `ZequerVirus/ZequerVirus` y la rama de producción (`main` o la que prefieras).
3. Configura el build:

   | Campo                  | Valor           |
   | ---------------------- | --------------- |
   | Framework preset       | Vite            |
   | Root directory         | `portfolio`     |
   | Build command          | `npm run build` |
   | Build output directory | `dist`          |

4. Pulsa **Save and Deploy**. Cada push a la rama de producción redespliega automáticamente.

También puedes desplegar a mano con Wrangler: `npm run build && npx wrangler pages deploy dist --project-name=<nombre>`.
