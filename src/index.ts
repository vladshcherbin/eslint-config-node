import config from '@shcherbin/eslint-config'
import { defineConfig } from 'eslint/config'
import globals from 'globals'

export default defineConfig([
  config,
  {
    files: ['**/*.{js,ts}'],
    languageOptions: {
      globals: globals.node
    }
  }
])
