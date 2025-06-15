# AGENTS

These guidelines apply to all folders in this repository.

## Workflow
- Use `pnpm install` to set up the project.
- Commits must follow Conventional Commits. Run `pnpm commit` to generate the message.
- Always run `pnpm lint` and `pnpm test` before pushing changes.

## Nuxt / Vue
- This project uses Nuxt 3 with TypeScript. Prefer `<script setup lang="ts">` in components.
- Keep pages in `src/pages` and UI components in `src/components`.
- Import files using the `@/` alias.
- Configure the app in `nuxt.config.ts` via `defineNuxtConfig` and store runtime config there.
- Use Pinia for state management.

## Tailwind CSS
- Tailwind is provided through the `@nuxtjs/tailwindcss` module.
- Customise utility classes in `tailwind.config.ts` (create the file if missing).
- Use utility classes instead of custom CSS when possible. Repeated patterns may use `@apply`.

## Testing
- Tests use Vitest and live next to the code with a `.spec.ts` suffix.
- Run tests with `pnpm test --run`.

## Storybook
- Stories live next to components as `*.stories.ts` or `*.stories.mdx`.
- Launch Storybook with `pnpm storybook` and build it with `pnpm storybook:build`.

## API client
- The OpenAPI client in `src/api` is generated. Use `pnpm generate:api` after changing the spec.

## Linting and formatting
- ESLint follows the Vue 3 and TypeScript recommended rules.
- Prettier enforces single quotes and no semicolons.
