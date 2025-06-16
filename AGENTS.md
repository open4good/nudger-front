# Nudger Nuxt 3 Frontend Development Guide

Welcome to the Nudger Nuxt 3 frontend project! This guide covers project setup, coding conventions, and AI agent instructions, ensuring consistent and efficient development. It is written for new contributors and AI code-generation agents alike.

---

## Getting Started: Installation & Setup

1. **Prerequisites**: Node.js 18+, `pnpm` (`npm install -g pnpm`).
2. **Clone the Repository**: `git clone https://github.com/your-org/nudger-nuxt-front.git`.
3. **Install Dependencies**: `pnpm install`.
4. **Environment Variables**: Set `STRAPI_URL`, `STRAPI_TOKEN`, `NUXT_PUBLIC_SITE_URL`, etc.
5. **Run Dev Server**: `pnpm dev` → http://localhost:3000.
6. **Production Build**: `pnpm build && pnpm preview`.
7. **Static Generation**: `pnpm generate`.
8. **Helper Scripts**:
   - `pnpm lint` - check linting  
   - `pnpm format` - format code  
   - `pnpm test` - run tests  
   - `pnpm storybook` - start Storybook  
   - `pnpm generate:api` - regenerate API client  
   - `pnpm storybook:build` - build Storybook  
9. **Non-regression Checks**: Run `pnpm lint`, `pnpm generate`, and `pnpm test` to ensure no regressions.

---

## Project Structure

- `src/pages/` – File-based routing. Each file in this folder creates a route.
- `src/components/` – Reusable UI components (presentational).
- `src/layouts/` – Layout components (e.g., `default.vue`). Pages can override layouts via `definePageMeta`.
- `src/composables/` – Reusable logic (functions prefixed with `use`). Use composables for data fetching and shared logic.
- `src/stores/` – Pinia stores (`defineStore`). Use for global state (e.g., user, cart).
- `src/api/` – OpenAPI-generated client (`client.ts`) and helper functions for API calls.
- `src/assets/` – Static assets and global styles (Tailwind CSS files).
- `src/middleware/` – Nuxt route middleware.
- `src/plugins/` – Nuxt plugins and initialization code.
- `tests/` or `*.spec.ts` – Vitest test files.

---

## Vue 3 & Nuxt 3 Coding Conventions

- Use `<script setup lang="ts">` in all components.
- Use Composition API: `defineProps`, `defineEmits`, `ref`, `computed`, `watch`, etc.
- TypeScript is required everywhere (components, composables, stores).
- **Naming**: Use PascalCase for component names and kebab-case for file names (e.g. `MyButton.vue`).
- SSR-safe code: guard browser-only APIs with `if (process.client) { ... }` or use Nuxt composables like `useFetch`.
- Auto-imports: you can directly call `useRouter()`, `useRoute()`, `useHead()`, `useState()`, etc. without importing.
- Use Nuxt aliases (`@/` or `~/`) for cleaner paths.
- **Component Structure**:
  - Presentational components: receive props and emit events; contain markup and styling only.
  - Container components (pages or views): fetch data, call composables or stores, and pass data to presentational components.
- Use `definePageMeta` in pages to set `title`, `meta` tags, and layout.
- Comments and JSDoc: add `@param` and `@returns` for functions, and describe complex logic.

---

## Styling with Tailwind CSS

- Use utility-first Tailwind classes in templates.
- Customize theme in `tailwind.config.js` (colors, spacing, etc.).
- Include `@tailwind base;`, `@tailwind components;`, and `@tailwind utilities;` in your global CSS.
- Use responsive prefixes (`sm:`, `md:`, `lg:`) and dark mode classes (`dark:`).
- For repeated style patterns, use `@apply` in your CSS.
- Ensure accessibility: maintain color contrast and focus outlines.
- **Example:**

    ```vue
    <template>
      <button
        class="px-4 py-2 bg-primary text-white font-semibold rounded hover:bg-primary-dark disabled:opacity-50"
      >
        {{ label }}
      </button>
    </template>
    <script setup lang="ts">
    defineProps<{ label: string }>();
    </script>
    ```

---

## State Management with Pinia

- Define a store with `defineStore`.
- Store `state` as a function returning an object.
- Use `getters` for derived state and `actions` for mutations.
- Example:

    ```ts
    import { defineStore } from 'pinia';

    export const useCartStore = defineStore('cart', {
      state: () => ({ items: [] as { id: string; price: number }[] }),
      getters: {
        itemCount: (state) => state.items.length,
        totalPrice: (state) => state.items.reduce((sum, item) => sum + item.price, 0),
      },
      actions: {
        addItem(product: { id: string; price: number }) {
          this.items.push(product);
        },
        removeItem(id: string) {
          this.items = this.items.filter((i) => i.id !== id);
        },
      },
    });
    ```

- Use stores for global state (authentication, cart, etc.). For local component state, use `ref()` or `useState()`.

---

## OpenAPI Client Generation & API Integration

- API specification (e.g., `nudger-api.json`) defines endpoints and types.
- Run `pnpm generate:api` to regenerate `src/api/client.ts` with typed clients.
- **Do not** manually edit `client.ts`. Instead, update the OpenAPI spec and rerun the generator.
- Use the generated `client` (or `paths`) in your code for type-safe calls.
- Use `useFetch` or `useAsyncData` for fetching data from API in a SSR-safe way.
- **Agent Task**: When adding new endpoints, update the spec and run `pnpm generate:api` before using them.
- Example:

    ```ts
    import client from '@/api/client';
    // Replace `getProducts` with your endpoint
    const response = await client.paths.getProducts();
    console.log(response.data);
    ```

---

## Content from Strapi CMS

- Configure CMS by setting `STRAPI_URL` and `STRAPI_TOKEN` in `.env`.
- Fetch content with `useFetch`:
  
    ```ts
    const config = useRuntimeConfig();
    const { data } = await useFetch(`${config.public.strapiUrl}/api/pages`, {
      headers: { Authorization: \`Bearer \${config.strapiToken}\` },
    });
    ```
- Strapi responses usually have shape: `response.data.data.attributes`.
- Handle and normalize CMS data in a composable (e.g., `useStrapiContent`).
- **Agent Task**: Create or update composables to abstract Strapi fetching and caching (e.g., `useStrapiContent`).

---

## Testing with Vitest

- Co-locate test files as `*.spec.ts` next to components or in `tests/`.
- Run all tests with `pnpm test` (use `--watch` for TDD).
- Use `@vue/test-utils` for component testing.
- Example test:
  
    ```ts
    import { mount } from '@vue/test-utils';
    import MyButton from '@/components/MyButton.vue';

    it('renders label', () => {
      const wrapper = mount(MyButton, { props: { label: 'Click' } });
      expect(wrapper.text()).toContain('Click');
    });
    ```
- When testing Pinia stores, use `setActivePinia(createPinia())` before importing.
- Write tests for edge cases, async behavior, and API integration (mock or stub fetch calls).
- **Agent Task**: For each new component or feature, generate test suites (unit tests for logic, component render tests, error cases).

---

## Storybook for UI Components

- Run Storybook: `pnpm storybook` (defaults to http://localhost:6006).
- Co-locate stories with components (e.g., `MyButton.stories.ts`).
- Define stories using default export and named exports:
  
    ```ts
    import MyButton from './MyButton.vue';
    export default { component: MyButton };
    export const Primary = { args: { label: 'Primary Button' } };
    ```
- Update or add stories when components change.
- Use Storybook Docs or Addon Essentials to auto-generate docs from comments.
- **Agent Task**: Generate or update story files when creating new components (include relevant args and variations).

---

## Linting and Formatting

- ESLint with Vue/Nuxt recommended rules enforces code standards.
- Prettier is configured for consistent formatting.
- Run lint: `pnpm lint`; auto-fix issues: `pnpm lint --fix`.
- Check formatting: `pnpm format`.
- Husky pre-commit hooks run linting and tests on each commit.
- **Agent Task**: After generating code, run linters and formatters to ensure style consistency.
- **Commit Messages**: Use Conventional Commits (e.g., `feat:`, `fix:`) with concise, imperative descriptions.

---

## Architecture & SSR Best Practices

- **Separation of Concerns**: Keep UI (components) separate from logic (composables, stores). Use container/presentational patterns.
- **SSR Safety**: Avoid using browser-only globals directly. Wrap such code with `if (process.client) {}` or guard against `typeof window`.
- **Lazy Hydration**: For heavy components, consider client-only hydration or libraries like `vue-lazy-hydration`.
- **Code-Splitting**: Use dynamic imports (`defineAsyncComponent`) for large components or libraries.
- **SEO & Metadata**: Use `useHead` to set page titles and meta tags in each page/component.
- **Composable Usage**: Encapsulate reusable logic and data fetching in composables (`useUser`, `useProducts`, etc.) to improve readability.
- **State Management**: Use Pinia or `useState()` for shared state; avoid non-reactive globals.
- **Performance**: Optimize images (Nuxt Image) and caching (Nitro, SSR caching) as needed.
- **Documentation**: Write clear code comments and JSDoc for complex functions and APIs.

---

## AI Agent Guidelines

- **Component Generation**: In your prompt, clearly describe component purpose, props, and design. Example: “Create a `ProductCard` Vue component with props `{ id, title, price }`, displaying product details using Tailwind classes.”
- **Layout Organization**: Use file-based routing and layouts. Example: “Generate a new page `/about` using the default layout. Use `useFetch` to load about page data.”
- **API Integration**: Tell the agent to use the generated API client or `useFetch`. Example: “Call `client.paths.getOrders()` and handle loading and error states.”
- **State Handling**: Use Pinia or Nuxt global state. Example: “Store the user’s cart in a Pinia store. Do not use global variables.”
- **Composable Usage**: Encourage creating reusable functions. Example: “Create a `useAuth()` composable that handles login status with `useState()`.”
- **Test Writing**: Instruct generating tests alongside code. Example: “Write a Vitest test for `ProductList.vue` that mocks API data and checks loading and error states.”
- **SSR Safety**: Remind the agent to guard browser APIs. Example: “Wrap `localStorage` access in `if (process.client) {}`.”
- **Code Clarity**: Require clear naming and comments. Example: “Add JSDoc for function `calculateTotal` describing parameters and return value.”
- **Linting**: After code generation, run linting/formatters. Example: “Use ESLint to fix any style issues before finalizing code.”
- **Commit Practices**: If generating commits, use conventional format. Example: “Use `feat: Add new checkout component` as commit message.”

---

## Deployment & Release

- Build the app: `pnpm build` (Nuxt output in `.output/`).
- Deploy on your chosen platform (Node, Vercel, Netlify, etc.).
- Provide required env vars (`STRAPI_URL`, `STRAPI_TOKEN`, etc.) in production.
- Use CI/CD to run tests, lint, and builds on each PR.
- Optionally use Semantic Release for automated versioning and changelogs.

---


## Pull request
- Use Conventional commits (e.g., `feat:`, `fix:`)
- Generate a clear and complete PR description (**why** and **what**). 
- Add a footer indicating this PR is generatEd by AI agent, and the estimatated time an average developper would have spent on this task

Before issueing a PR, systematically validate and check global non regession using 
- pnpm lint
- pnpm test run
- pnpm generate
- pnpm storybook, check all components have an associated storybook 
- pnpm preview, then tests URLS are HTTP 200 or act as expected



**Happy coding!** Keep this guide handy while working on the Nudger Nuxt 3 project.
