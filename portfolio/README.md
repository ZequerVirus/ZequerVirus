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
