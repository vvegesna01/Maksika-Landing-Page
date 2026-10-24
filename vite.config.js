import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// base './' lets the build be hosted at a domain root or a sub-path (e.g. GitHub Pages)
export default defineConfig({
  plugins: [react()],
  base: './',
});
