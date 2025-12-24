
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Set base path for deployment if needed (e.g., '/your-repo/' for GitHub Pages)
const base = process.env.VITE_BASE_PATH || '/';

// https://vitejs.dev/config/
export default defineConfig({
  base,
  plugins: [react()],
  build: {
    outDir: 'dist',
    sourcemap: true,
    minify: 'esbuild',
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
