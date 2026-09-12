# Changelog

All notable changes to this project are documented in this file.

Related documentation:
- [Project Overview & Setup Guide](./README.md)
- [Blog Authoring & Content Guide](./BLOG_GUIDE.md)

## [1.5.1] - 2026-09-12

### Changed
- Upgraded **Astro** to `7.3.2` and `@astrojs/markdown-remark` to `7.3.1`.
- Upgraded **Vitest** to `4.1.11`.

### Security
- Remediated all 16 Dependabot alerts across runtime and development dependencies, bringing `pnpm audit` to 0 vulnerabilities:
  - **`sharp`**: Upgraded to `0.35.4` (fixes libheif RCE vulnerabilities GHSA-rgj7-g3m4-5g8c, CVE-2026-84383).
  - **`astro`**: Upgraded to `7.3.2` (fixes RCE through AVIF image optimization GHSA-26w7-cxv4-gfx2).
  - **`vitest` / `@vitest/mocker`**: Upgraded to `4.1.11` (fixes path traversal / arbitrary file read GHSA-82fw-gwwq-j7x9, CVE-2026-84373).
  - **`smol-toml`**: Overridden to `1.7.2` (fixes infinite loop / DoS GHSA-7w5x-hrqm-74c2, CVE-2026-85730).
  - **`svgo`**: Overridden to `4.1.0` (fixes script bypass and namespace bypass XSS GHSA-4vpr-x523-8j87, GHSA-w27v-7q3p-w38r).
  - **`browserslist`**: Overridden to `4.28.9` (fixes prototype write / crash via custom stats GHSA-73wf-gq98-2v4g, CVE-2026-73088).
  - **`baseline-browser-mapping`**: Overridden to `2.11.22` (fixes process termination DoS GHSA-w5vr-8v7q-w6rv, CVE-2026-45819).
  - **`fast-uri`**: Overridden to `3.1.7` (fixes security vulnerabilities CVE-2026-31802).
  - **`postcss-selector-parser`**: Scoped overrides for `@6` (`6.1.4`) and `@7` (`7.1.6`) (fixes uncontrolled AST recursion DoS GHSA-w9m9-85wc-3x92).
  - **`js-yaml`**: Overridden to `4.3.2` (fixes CPU consumption DoS GHSA-2883-xcg3-v3hh).
  - **`brace-expansion`**: Scoped overrides for `@1` (`1.1.18`) and `@5` (`5.0.9`) (fixes unbounded intermediate array DoS GHSA-mh99-v99m-4gvg, GHSA-rgw5-rvv9-x895).

### Verification
- `pnpm audit` reports 0 vulnerabilities.
- `pnpm lint && pnpm typecheck && pnpm test && pnpm build` passed cleanly.

### Infrastructure
- Updated project version to `1.5.1`.

## [1.5.0] - 2026-08-23

### Added
- Integrated [`astro-mermaid`](https://www.npmjs.com/package/astro-mermaid) and `mermaid` to render Mermaid.js diagrams directly within Markdown (`.md`) and MDX article content.
- Configured default dark theme and automatic theme switching in `astro.config.mjs`.
- Enabled experimental incremental static builds (`experimental.incrementalBuild: true`) with `cacheKey: post.digest` in `src/pages/articles/[slug].astro` for faster page regeneration.
- Added Mermaid syntax documentation and diagram examples to [Blog Authoring Guide](./BLOG_GUIDE.md).

### Changed
- Upgraded **Astro** to `7.2.4` and `@astrojs/markdown-remark` to `7.2.4`.
- Configured `session: false` in `astro.config.mjs` to strip unused session runtime from production bundles.
- Migrated schema `z` imports from `astro:content` to `astro/zod` in `src/content.config.ts`.
- Replaced deprecated Lucide `Code2` icon with `Code` in `src/components/Expertise.astro`.
- Optimized `tsconfig.json` with `skipLibCheck` and explicit include paths for faster and memory-efficient type checking (`astro check`).

### Security
- Resolved 14 Dependabot alerts across production and tooling dependencies:
  - **`sharp`**: Upgraded to `0.35.3` (fixes libvips CVE-2026-33327, CVE-2026-33328, CVE-2026-35590, CVE-2026-35591).
  - **`postcss`**: Upgraded to `8.5.26` (fixes path traversal in source map loading CVE-2026-69153, GHSA-fxqj-rqcc-2cmp).
  - **`nanoid`**: Overridden to `3.3.18` (fixes infinite loops in custom/non-secure generators CVE-2026-67213, CVE-2026-67214).
  - **`js-yaml`**: Overridden to `4.3.1` (fixes quadratic CPU consumption DoS in `!!omap` resolution GHSA-5p4m-2wfm-xmqj).
  - **`fast-uri`**: Overridden to `3.1.5` (fixes host confusion via backslash authority introducer CVE-2026-18446).
  - **`undici`**: Overridden to `7.29.0` (fixes CRLF injection and cache disclosure vulnerabilities CVE-2026-15157).
  - **`svgo`**: Overridden to `4.0.2` (fixes script removal bypass).

### Verification
- `pnpm lint && pnpm typecheck && pnpm test && pnpm build`

### Infrastructure
- Updated project version to `1.5.0`.

## [1.4.4] - 2026-07-13

### Changed
- Enabled Markdown math rendering for blog posts so KaTeX equations compile correctly in Astro.
- Fixed the Gorilla compression example in the Datadog and Grafana article so the timestamp equation renders as display math.

### Verification
- `pnpm build`

### Infrastructure
- Updated project version to `1.4.4`.

## [1.4.3] - 2026-07-10

### Security
- Remediated reported Dependabot alerts related to `undici`, `js-yaml`, and `esbuild` by upgrading dependency chains.
- Upgraded tooling dependencies that pulled vulnerable transitive packages:
	- `wrangler` to `4.110.0` (with updated `miniflare`/`undici` chain)
	- `astro` to `7.0.7` (with updated `js-yaml` and build toolchain)
	- `@vitejs/plugin-legacy` to `8.2.0`
	- `@lucide/astro` to `1.24.0`

### Verification
- `pnpm audit --audit-level low` reports no known vulnerabilities.

### Infrastructure
- Updated project version to `1.4.3`.

## [1.4.2] - 2026-07-10

### Changed
- Tuned homepage mobile rendering performance with lighter above-the-fold visual effects on small screens.
- Deferred non-critical homepage content rendering to reduce initial mobile paint cost.
- Optimized font loading behavior for mobile to reduce layout instability risk.
- Updated analytics loading strategy to reduce first-load contention on mobile.

### Infrastructure
- Updated project version to `1.4.2`.

## [1.4.1] - 2026-07-07

### Changed
- Added deferred loading for the cat widget one minute after page initialization.
- Added graceful runtime checks for unsupported environments before initializing the widget.
- Externalized stylesheet output for production to avoid inline CSS bloat in built HTML.

### Infrastructure
- Updated project version to `1.4.1`.
