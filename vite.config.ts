import { resolve } from 'path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

import { DEFAULT_OPTIONS } from './image-optimizer.config';

const resolvePath = (path: string) => resolve(__dirname, path);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), ViteImageOptimizer(DEFAULT_OPTIONS)],
  resolve: {
    alias: {
      '@app': resolvePath('./src/app'),
      '@entities': resolvePath('./src/entities'),
      '@features': resolvePath('./src/features'),
      '@pages': resolvePath('./src/pages'),
      '@shared': resolvePath('./src/shared'),
      '@widgets': resolvePath('./src/widgets'),
    },
  },
});
