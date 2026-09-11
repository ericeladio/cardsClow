# Keystatic — Guía paso a paso

## ¿Qué es Keystatic?

CMS basado en archivos. No usa base de datos externa. Guarda contenido como archivos `.md` / `.mdoc` en tu repo. Admin visual en `/keystatic`.

```
Editor (/keystatic) → archivos .md en src/content/ → Astro los lee → renderiza página
```

---

## 1. Instalación

```bash
npm install @keystatic/core @keystatic/astro
```

Peer dependencies (ya instaladas si usas Astro 5+):

```bash
npm install @astrojs/react @astrojs/markdoc react react-dom
```

## 2. Configurar Astro

`astro.config.mjs`:

```js
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import markdoc from '@astrojs/markdoc';
import keystatic from '@keystatic/astro';
import vercel from '@astrojs/vercel';

export default defineConfig({
  site: "https://tu-dominio.com",
  integrations: [react(), markdoc(), keystatic()],
  output: "static",
  adapter: vercel(),
});
```

> El admin `/keystatic` necesita un adapter (vercel, node, netlify). Sin adapter no funciona en producción.

## 3. Crear `keystatic.config.ts`

Define qué contenido es editable.

### Ejemplo: colección simple

```ts
import { config, fields, collection } from "@keystatic/core";

export default config({
  storage: { kind: "local" },
  collections: {
    posts: collection({
      label: "Posts",
      slugField: "title",
      path: "src/content/posts/*",
      format: { contentField: "content" },
      schema: {
        title: fields.slug({ name: { label: "Título" } }),
        description: fields.text({ label: "Descripción", multiline: true }),
        cover: fields.image({
          label: "Portada",
          directory: "public/assets",
          publicPath: "/assets/",
        }),
        content: fields.markdoc({ label: "Contenido" }),
      },
    }),
  },
});
```

### Tipos de campos disponibles

| Campo | Uso |
|---|---|
| `fields.text` | Texto corto o largo (`multiline: true`) |
| `fields.slug` | Título → slug para URL/filename |
| `fields.image` | Upload de imagen → guarda en `public/` |
| `fields.markdoc` | Editor rico (WYSIWYG) |
| `fields.select` | Dropdown |
| `fields.checkbox` | Boolean |
| `fields.date` | Fecha |
| `fields.url` | URL validada |
| `fields.array` | Lista de items |
| `fields.object` | Grupo de campos |
| `fields.relationship` | Referencia a otra colección |

### Ejemplo con i18n (bilingüe ES/EN)

Keystatic no tiene i18n nativo. Usa colecciones separadas por idioma:

```ts
collections: {
  pageContentEs: collection({
    label: "Contenido (ES)",
    slugField: "slug",
    path: "src/content/page-content/es/*",
    format: { contentField: "content" },
    schema: {
      slug: fields.slug({ name: { label: "Slug" } }),
      pageTitle: fields.text({ label: "Título de Página" }),
      description: fields.text({ label: "Descripción", multiline: true }),
      heroImage: fields.image({
        label: "Imagen Hero",
        directory: "public/assets",
        publicPath: "/assets/",
      }),
      content: fields.markdoc({ label: "Contenido" }),
    },
  }),
  pageContentEn: collection({
    label: "Content (EN)",
    slugField: "slug",
    path: "src/content/page-content/en/*",
    format: { contentField: "content" },
    schema: {
      slug: fields.slug({ name: { label: "Slug" } }),
      pageTitle: fields.text({ label: "Page Title" }),
      description: fields.text({ label: "Description", multiline: true }),
      heroImage: fields.image({
        label: "Hero Image",
        directory: "public/assets",
        publicPath: "/assets/",
      }),
      content: fields.markdoc({ label: "Content" }),
    },
  }),
}
```

## 4. Configurar Astro Content Layer

`src/content.config.ts` — debe reflejar el esquema de Keystatic:

```ts
import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "zod";

const pageContentEs = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdoc}", base: "./src/content/page-content/es" }),
  schema: z.object({
    slug: z.string(),
    pageTitle: z.string(),
    description: z.string(),
    heroImage: z.string().nullable().optional(),
  }),
});

const pageContentEn = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdoc}", base: "./src/content/page-content/en" }),
  schema: z.object({
    slug: z.string(),
    pageTitle: z.string(),
    description: z.string(),
    heroImage: z.string().nullable().optional(),
  }),
});

export const collections = { pageContentEs, pageContentEn };
```

> `z.string().nullable().optional()` para imágenes — pueden ser `null` si no se subió nada.

## 5. Crear contenido inicial

Los archivos se crean automáticamente desde el admin, pero puedes crearlos manualmente:

`src/content/page-content/es/contenido.md`:

```md
---
slug: contenido
pageTitle: "Cartas Clow"
description: "Descubre tu destino"
heroImage: null
---

Contenido en español.
```

## 6. Leer contenido en páginas

`src/pages/[...lang]/index.astro`:

```astro
---
import { getCollection } from 'astro:content';

const { lang } = Astro.params; // 'es' | 'en'
const locale = lang as 'es' | 'en';

const collection = locale === 'es'
  ? await getCollection('pageContentEs')
  : await getCollection('pageContentEn');

const c = collection[0]?.data;

// Fallback a traducciones si no hay contenido en Keystatic
import { translations } from '../../i18n/translations';
const t = translations[locale];
---

<HeroSection title={c?.pageTitle ?? t.hero.title} />
<ReadingsColumns description={c?.description ?? t.readings.desc} />
```

> Patrón: `c?.campo ?? fallback` — si Keystatic no tiene dato, usa el hardcoded.

## 7. Componente con imagen editable

`src/components/ReadingsColumns.astro`:

```astro
---
import defaultImage from '../assets/magicBook.webp';

interface Props {
  bookImage?: string;
  title?: string;
}

const { bookImage, title } = Astro.props;
const imageSrc = bookImage || defaultImage.src;
---

<img src={imageSrc} alt="Libro mágico" width="400" height="600" />
```

Si no se subió imagen en Keystatic → usa la default. Si se subió → usa `/assets/nombre.jpg`.

## 8. Usar el admin

```bash
npm run dev
# Abrir http://localhost:4321/keystatic
```

- Ves las colecciones (ES / EN)
- Editas campos visualmente
- Al guardar → se escriben archivos `.md` en `src/content/`
- Haces `git add` + `git commit` + `git push` → deploy

### Storage modes

| Modo | Cuándo usar |
|---|---|
| `kind: "local"` | Desarrollo local, contenido versionado en git |
| `kind: "github"` | Producción con editores no técnicos (escribe directo a GitHub via API) |

Para cambiar a GitHub:

```ts
storage: {
  kind: "github",
  repo: "usuario/repo",
}
```

---

## Estructura final del proyecto

```
keystatic.config.ts          # Define colecciones y campos
src/content.config.ts        # Esquema Zod para Astro
src/content/page-content/
  es/contenido.md            # Contenido ES
  en/content.md              # Contenido EN
src/pages/[...lang]/index.astro  # Lee con getCollection()
src/components/              # Reciben props dinámicas
public/assets/               # Imágenes subidas por Keystatic
```

---

## ¿Cuándo configurar Keystatic?

### Recomendación: al final del proyecto

| Momento | Pros | Contras |
|---|---|---|
| **Al principio** | Estructura desde el inicio | Bloquea el maquetado, cambias esquema constantemente, pierdes tiempo |
| **Al final (recomendado)** | Maquetas libre y rápido, ya sabes qué campos necesitas, configuras una sola vez | Ninguno relevante |

### Por qué al final es mejor

1. **Mientras maquetas, todo es tentativo.** Títulos, textos, imágenes y estructura cambian cada día. Si ya configuraste Keystatic, cada cambio implica editar `keystatic.config.ts` + `content.config.ts` + archivos `.md`.

2. **Con el diseño terminado sabes exactamente qué es editable.** Ves la página final y decides: "estos 8 campos van al CMS, el resto es decorativo/fijo". Sin adivinar.

3. **Hardcodea primero, CMS después.** Usa `translations.ts` o props fijas durante el desarrollo. Cuando el maquetado esté estable, migra esos valores a Keystatic con el patrón `c?.campo ?? fallback`.

4. **Menos fricción para iterar.** Cambiar un texto hardcodeado es 1 línea. Cambiar un campo de Keystatic son 3 archivos + rebuild.

### Flujo recomendado

```
1. Maquetar toda la página (HTML/CSS, responsive)
   → todo hardcodeado o en translations.ts

2. Cuando el diseño esté aprobado / estable
   → identificar qué campos deben ser editables

3. Configurar Keystatic
   → keystatic.config.ts + content.config.ts
   → crear archivos .md iniciales migrando valores hardcodeados
   → actualizar páginas para leer con getCollection()

4. Verificar
   → npm run build
   → probar /keystatic en local
   → git add + commit
```

> En este proyecto seguimos exactamente ese flujo: primero se completó el maquetado, responsive y SEO, y al final se integró Keystatic para el grid 1 bilingüe.

---

## 9. Deploy a Vercel + Keystatic Cloud (GitHub)

### Paso 1 — Subir a GitHub

```bash
git init
git remote add origin git@github.com:ericeladio/cardsClow.git
git add .
git commit -m "Initial commit"
git branch -M main
git push -u origin main
```

### Paso 2 — Desplegar en Vercel

1. Ve a [vercel.com/new](https://vercel.com/new)
2. Importa el repo `ericeladio/cardsClow`
3. Vercel auto-detecta Astro → build command: `astro build`
4. Click **Deploy**

> No necesitas `vercel.json`. El adapter `@astrojs/vercel` genera todo automáticamente.

### Paso 3 — Conectar Keystatic con GitHub

#### 3.1 Cambiar storage a GitHub

En `keystatic.config.ts`:

```ts
storage: {
  kind: "github",
  repo: "ericeladio/cardsClow",
},
```

#### 3.2 Crear el GitHub App

1. Corre `astro dev` local
2. Visita `http://127.0.0.1:4321/keystatic`
3. Botón **"Login with GitHub"** → wizard para crear un GitHub App
4. Dale un nombre (ej: `cardsclow-cms`)
5. El wizard genera un `.env`:

```
KEYSTATIC_GITHUB_CLIENT_ID=Iv1.xxxxxxxxxx
KEYSTATIC_GITHUB_CLIENT_SECRET=xxxxxxxxxx
KEYSTATIC_SECRET=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
PUBLIC_KEYSTATIC_GITHUB_APP_SLUG=cardsclow-cms
```

#### 3.3 Agregar callback URL de localhost

En GitHub App settings → **User authorization callback URL**, agrega:

```
http://127.0.0.1:4321/api/keystatic/github/oauth/callback
```

### Paso 4 — Variables de entorno en Vercel

En Vercel → **Settings → Environment Variables**, agrega las 4:

| Variable | Origen |
|---|---|
| `KEYSTATIC_GITHUB_CLIENT_ID` | GitHub App → Client ID |
| `KEYSTATIC_GITHUB_CLIENT_SECRET` | GitHub App → Generate new secret |
| `KEYSTATIC_SECRET` | `node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"` |
| `PUBLIC_KEYSTATIC_GITHUB_APP_SLUG` | Nombre del GitHub App |

### Paso 5 — Callback URL de producción

En GitHub App settings → agrega:

```
https://cardsclow.vercel.app/api/keystatic/github/oauth/callback
```

### Paso 6 — Probar en producción

1. Visita `https://cardsclow.vercel.app/keystatic`
2. Login con GitHub → edita contenido
3. Cada guardado = commit en GitHub → Vercel auto-rebuild (~2 min)

```
Edición en /keystatic → Commit a GitHub → Vercel rebuild → Sitio actualizado
```

> `PUBLIC_*` vars se inyectan en build time → si cambias el slug necesitas nuevo deploy.
