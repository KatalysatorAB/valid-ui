import { resolve } from 'node:path';

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import EsLint from 'vite-plugin-linter';
import tsConfigPaths from 'vite-tsconfig-paths';

const { EsLinter, linterPlugin } = EsLint;

import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const packageJson = require('./package.json');

// https://vitejs.dev/config/
export default defineConfig((configEnv) => ({
  plugins: [
    dts({
      include: ['src/'],
    }),
    react({
      jsxImportSource: '@emotion/react',
      babel: {
        plugins: ['@emotion/babel-plugin'],
      },
    }),
    tsConfigPaths(),
    linterPlugin({
      include: ['./src}/**/*.{ts,tsx}'],
      linters: [new EsLinter({ configEnv })],
    }),
  ],
  build: {
    lib: {
      entry: resolve('src', 'index.ts'),
      name: 'ValidSearch',
      formats: ['es', 'umd'],
      fileName: (format) => `valid-ui.${format}.js`,
    },
    rollupOptions: {
      external: [...Object.keys(packageJson.peerDependencies)],
    },
  },
}));