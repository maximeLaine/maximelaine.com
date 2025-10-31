import { defineConfig } from 'vite';
import { resolve } from 'path';
import { readdirSync, existsSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Get all HTML files from _site directory
let htmlFiles = {};
if (existsSync('./_site')) {
  htmlFiles = readdirSync('./_site')
    .filter(file => file.endsWith('.html'))
    .reduce((entries, file) => {
      const name = file.replace('.html', '');
      entries[name] = resolve(__dirname, '_site', file);
      return entries;
    }, {});
}

export default defineConfig({
  root: '_site',
  base: './',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    rollupOptions: {
      input: htmlFiles,
      output: {
        manualChunks: undefined
      }
    },
    minify: 'esbuild',
    sourcemap: false,
    cssCodeSplit: false,
    assetsInlineLimit: 4096,
    modulePreload: false
  },
  server: {
    port: 3000,
    open: true,
    host: true
  },
  preview: {
    port: 4173,
    open: true
  }
});
