# Curso de Fundamentos de Bases de Datos

Sitio estático con contenido, evaluación, proyecto, materiales, notas y bibliografía del curso.

## Personalización rápida

Antes de publicar, edita `app/page.tsx`:

1. En el objeto `links`, reemplaza las URLs de Google Sheets (`gradesView`, `gradesDownload` y `gradesPreview`).
2. En el array `chapters`, agrega la propiedad `slides: "<url>"` al capítulo cuya presentación ya esté publicada. Los capítulos sin `slides` muestran «Por publicar».
3. En `books`, ajusta la bibliografía según la edición y referencia principal del curso.

## Publicar en GitHub Pages

1. Crea un repositorio vacío en GitHub.
2. Sube todos los archivos de este proyecto a la rama `main`.
3. En GitHub ve a **Settings → Pages**.
4. En **Build and deployment → Source**, selecciona **GitHub Actions**.
5. En la pestaña **Actions**, espera a que termine “Publicar en GitHub Pages”.

El flujo incluido detecta automáticamente si el repositorio es un sitio de usuario
(`usuario.github.io`) o un sitio de proyecto (`usuario.github.io/repositorio`).

## Ejecutar localmente

```bash
npm install
npm run dev
```

Para validar la versión estática de GitHub Pages:

```bash
npm run build:github
```
