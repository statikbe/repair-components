const path = require('path');

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { createVuePlugin } from 'vite-plugin-vue2';

// https://vitejs.dev/config/
// https://vitejs.dev/guide/build.html#library-mode

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'lib/main.js'),
      name: 'RepairComponents',
    },
    optimizeDeps: {
      include: ['vue'],
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['vue'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: 'Vue',
        },
        exports: 'named',
      },
    },
  },
  plugins: [createVuePlugin(), vue()],
});
