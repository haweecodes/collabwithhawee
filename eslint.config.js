import js from '@eslint/js';
import { defineConfig, globalIgnores } from 'eslint/config';
import astro from 'eslint-plugin-astro';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default defineConfig([
  globalIgnores(['dist/', '.astro/', 'test-results/', 'playwright-report/']),
  js.configs.recommended,
  tseslint.configs.recommended,
  astro.configs.recommended,
  astro.configs['jsx-a11y-strict'],
  {
    languageOptions: {
      globals: globals.node,
    },
    rules: {
      // Safari drops list semantics from lists styled with `list-style: none`, so
      // role="list" on those isn't redundant.
      'astro/jsx-a11y/no-redundant-roles': ['error', { ul: ['list'] }],
    },
  },
]);
