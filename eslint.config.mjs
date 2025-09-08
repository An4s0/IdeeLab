// @ts-check

import eslint from '@eslint/js';
import { defineConfig } from 'eslint/config';
import tseslint from 'typescript-eslint';

export default defineConfig([
  {
    ignores: ['dist', 'build', 'node_modules', 'out'],
  },
  {
    files: ['**/*.{js,ts,jsx,tsx}'],
    extends: [eslint.configs.recommended, tseslint.configs.recommended],
  },
]);
