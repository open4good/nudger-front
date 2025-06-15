# Nuder.fr Frontend

![CI](https://github.com/your/repo/actions/workflows/ci.yml/badge.svg)
![Deploy](https://github.com/your/repo/actions/workflows/deploy-static.yml/badge.svg)

Nuder.fr est le front‑end révolutionnaire du projet. Ce dépôt contient l'interface construite avec Nuxt 3 et TypeScript.

## Technologies
- **Nuxt 3**
- **TypeScript**
- **Pinia** pour l'état
- **Tailwind CSS** pour la mise en page
- **Strapi** comme CMS
- **Vitest** pour les tests unitaires

## Installation

```bash
pnpm install
```

## Développement

```bash
pnpm dev
```

## PWA

L'application peut être installée comme une Progressive Web App. Le service worker et le manifeste sont gérés par le module `@vite-pwa/nuxt`.


## Hydratation partielle

Le plugin `islands.client.ts` enregistre globalement le composant `LazyHydrate`.
Celui‑ci permet de différer l'hydratation d'une portion de page.

```vue
<template>
  <LazyHydrate when-visible>
    <Slider />
  </LazyHydrate>
</template>
```

## Tests

```bash
pnpm test -- --run
```

## Variables d'environnement

Le projet s'appuie sur plusieurs variables pour son runtime :

- `STRAPI_URL` — URL de l'instance Strapi utilisée par l'application.
- `STRAPI_TOKEN` — jeton d'authentification Strapi (utilisé côté serveur).
- `NUXT_PUBLIC_PLAUSIBLE_DOMAIN` — domaine suivi par Plausible Analytics.
- `NUXT_PUBLIC_SITE_URL` — URL publique du site pour le SEO.
- `FIGMA_TOKEN` — jeton utilisé pour générer les design tokens.

## Déploiement
- GitHub Pages via `deploy-static.yml`
- Vercel / Render
- Docker + serveur SSH

## Publication des versions
Les releases sont gérées par [semantic-release](https://github.com/semantic-release/semantic-release).
Le workflow GitHub **Release** peut être déclenché manuellement pour générer un
changelog, créer un tag et mettre à jour la version du projet. Vous pouvez
également exécuter `npx semantic-release` localement pour le même résultat.

## Contribuer
Les commits doivent suivre Conventional Commits via `pnpm commit`. Consultez `CONTRIBUTING.md` pour le détail de la procédure.

## Licence
Aucune licence ouverte n'est définie pour le moment.
