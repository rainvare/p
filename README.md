# React + GitHub Pages (Vite) – Auto Deploy desde `main`

Starter listo para que **cada push a `main`** construya y despliegue automáticamente a **GitHub Pages** usando **GitHub Actions**.

- Build con **Vite**
- Rutas seguras en Pages con **HashRouter**
- **Sin** `gh-pages`: todo via Actions (workflows en `.github/workflows/deploy.yml`)
- Incluye `404.html` (por si migras a `BrowserRouter` más adelante)

---

## Configuración rápida

1. **Renombrá la base** en `vite.config.js` con el **nombre exacto del repo**:
   ```js
   // si tu repo se llama "mi-app", debe ser:
   base: '/mi-app/',
   ```

2. **Subí el proyecto** a un repo nuevo:
   ```bash
   git init
   git add .
   git commit -m "init"
   git branch -M main
   git remote add origin https://github.com/TU_USUARIO/MI_REPO.git
   git push -u origin main
   ```

3. En GitHub, ve a **Settings → Pages** y en **Build and deployment** elegí **Source: GitHub Actions**.
   > El workflow `deploy.yml` ya se encargará de construir y publicar.

4. Cada vez que pushes a `main`, el sitio se va a construir y publicar automáticamente.

### Desarrollo local
```bash
npm install
npm run dev
```

### ¿BrowserRouter?
- Con **HashRouter** no hay problemas al refrescar rutas en Pages.
- Si quieres `BrowserRouter`, mantené `404.html` (incluido) o una estrategia SPA fallback.
