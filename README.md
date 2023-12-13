# vue3-template

**Features:**

- 🛠 [Vue 3](https://v3.vuejs.org/guide/introduction.html)
- ⚡️ [Vite](https://vitejs.dev/guide/)
- 🗂 [PNPM](https://pnpm.io)
- 🛣 [Vue Router](https://github.com/vuejs/vue-router-next)
- 🛠 [Pinia](https://pinia.vuejs.org/)
- 🦾 [TypeScript](https://www.typescriptlang.org/)
- 🧹 [Prettier](https://prettier.io/)
- 🧹 [ESLint](https://eslint.org/)
- 🔍 [Vitest](https://vitest.dev/)
- 🔍 [Cypress](https://www.cypress.io/)
- 🔍 [husky](https://typicode.github.io/husky/)

## Getting Started

Scaffold this repository

```sh
pnpx degit gn00678465/vue3-template my-project
cd my-project
git init
```

Install and start dev server

```sh
pnpm install
pnpm run dev
```

## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/)
- [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur)
- [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin)

## Team Work Flow

[Team Work Flow](TEAM_WORK_FLOW.md)

## Project Scripts

**Compile and Hot-Reload for Development**

```sh
pnpm dev
```

**Type-Check, Compile and Minify for Production**

```sh
pnpm build
```

**Run Unit Tests with [Vitest](https://vitest.dev/)**

```sh
pnpm test:unit
```

**Run End-to-End Tests with [Cypress](https://www.cypress.io/)**

```sh
pnpm test:e2e:dev
```

This runs the end-to-end tests against the Vite development server.
It is much faster than the production build.

But it's still recommended to test the production build with `test:e2e` before deploying (e.g. in CI environments):

```sh
pnpm build
pnpm test:e2e
```

**Lint with [ESLint](https://eslint.org/)**

```sh
pnpm lint
```

**Format with [Prettier](https://prettier.io/)**

```sh
pnpm format
```

**Commit**

```sh
pnpm commit
```
