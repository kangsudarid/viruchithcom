import { defineConfig } from 'astro/config';
import legacy from '@vitejs/plugin-legacy';
import { unified } from '@astrojs/markdown-remark';
import rehypeKatex from 'rehype-katex';
import remarkMath from 'remark-math';
import mermaid from 'astro-mermaid';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://viruchith.com',
  compressHTML: true,
  session: false,
  experimental: {
    incrementalBuild: true,
  },
  integrations: [
    mermaid({
      theme: 'dark',
      autoTheme: true,
    }),
    mdx(),
  ],
  markdown: {
    processor: unified({
      remarkPlugins: [remarkMath],
      rehypePlugins: [rehypeKatex],
    }),
  },
  build: {
    inlineStylesheets: 'always',
  },

  devToolbar: {
    enabled: false,
  },
  vite: {
    plugins: [
      legacy({
        targets: ['defaults', 'not IE 11'],
        renderLegacyChunks: true,
        modernPolyfills: true,
        polyfills: true,
      }),
    ],
    build: {
      minify: true,
      cssMinify: true,
      chunkSizeWarningLimit: 700,
    },
  },
});
