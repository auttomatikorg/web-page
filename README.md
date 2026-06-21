# Auttomatik — Web corporativa

Web de **Auttomatik**, consultoría e implementación de IA operativa para pymes.
Sitio estático, trilingüe (ES · CA · EN), construido con **Astro 5 + Tailwind CSS 4**.

## Requisitos

- Node.js 20+ (probado con Node 23)

## Comandos

```bash
npm install        # instalar dependencias
npm run dev        # servidor de desarrollo (http://localhost:4321)
npm run build      # build estático a ./dist
npm run preview    # previsualizar el build de producción
```

## ⚠️ Antes de publicar: rellena estos datos

Todo lo editable está centralizado en **[`src/config/site.ts`](src/config/site.ts)** (busca `TODO`):

- **`url`** — dominio de producción. Mantenlo en sync con `site` en [`astro.config.mjs`](astro.config.mjs) y la URL del sitemap en [`public/robots.txt`](public/robots.txt).
- **`email`** — email de contacto.
- **`whatsapp`** — número de WhatsApp Business en formato internacional sin signos (ej. `34600000000`).
- **`booking`** — reserva de la auditoría:
  - `provider`: `"cal"` (Cal.com, por defecto), `"calendly"` o `"link"`.
  - `calLink`: ruta de Cal.com (ej. `auttomatik/auditoria-ia`).
  - `bookingUrl`: URL completa (se usa en los botones y como fallback / para Calendly o `link`).
- **`social`** — LinkedIn, Instagram (vacío = oculto).
- **`legal`** — razón social, NIF y dirección (necesarios para Aviso legal / RGPD).

Otros pendientes:

- **Imagen Open Graph**: ahora se usa el logo como placeholder en `public/og/og-default.png`. Sustitúyelo por una imagen diseñada de **1200×630**.
- **Textos legales** ([`src/i18n/content/legal.ts`](src/i18n/content/legal.ts)): son plantillas orientativas (LSSI-CE + RGPD). Revísalas con un profesional.
- **Casos** ([`src/i18n/content/cases.ts`](src/i18n/content/cases.ts)): son ejemplos ilustrativos. Sustituye por casos reales cuando los tengas.

## Estructura

```
src/
├─ config/site.ts          # datos del negocio (placeholders)
├─ styles/global.css       # Tailwind + tokens de marca
├─ i18n/
│  ├─ utils.ts             # idiomas + rutas localizadas + helpers
│  ├─ ui.ts                # strings de UI (nav, botones, footer)
│  └─ content/             # contenido de cada página (es/ca/en)
├─ layouts/BaseLayout.astro
├─ components/
│  ├─ Header, Footer, LanguageSwitcher, WhatsAppFloat, CookieBanner...
│  ├─ sections/            # secciones reutilizables (Hero, FAQ, CTA...)
│  └─ pages/               # 1 componente por página, recibe `lang`
└─ pages/                  # rutas finas: ES en raíz, CA en /ca, EN en /en
```

### Cómo añadir o editar contenido

El texto **no** está en los `.astro`, sino en `src/i18n/content/*.ts`, con una entrada
por idioma (`es`, `ca`, `en`). Edita ahí y se refleja en las tres versiones.

### Cómo añadir una página nueva

1. Añade su `PageKey` y slugs por idioma en [`src/i18n/utils.ts`](src/i18n/utils.ts) (`ROUTES`).
2. Crea el contenido en `src/i18n/content/`.
3. Crea el componente en `src/components/pages/`.
4. Crea las 3 rutas finas en `src/pages/`, `src/pages/ca/`, `src/pages/en/`.

## Marca

| Token            | Color     | Uso                                  |
| ---------------- | --------- | ------------------------------------ |
| `primary`        | `#DE7007` | CTAs y acentos                       |
| `cream`          | `#F3ECCC` | fondos claros                        |
| `ink`            | `#3F2F12` | texto, secciones oscuras, footer     |

Tipografías: **Space Grotesk** (titulares) + **Inter** (cuerpo), self-hosted vía `@fontsource`.

## Despliegue

El sitio es **100% estático** (`dist/`), sin backend. Recomendado: **Vercel**, **Netlify**
o **Cloudflare Pages** (build: `npm run build`, output: `dist`). Recuerda actualizar el
dominio en los 3 sitios indicados arriba antes del primer deploy.
