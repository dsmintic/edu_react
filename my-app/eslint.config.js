import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import esLintConfigPrettier from "eslint-config-prettier"
import esLintPluginPrettier from "eslint-plugin-prettier/recommended"

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended, esLintConfigPrettier, esLintPluginPrettier],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
      "prettier/prettier": [
        "warn",
        {
          endOfLine: "auto",
        },
      ],
      "@typescript-eslint/no-unused-expressions": ["warn"],
      "@typescript-eslint/no-unused-vars": ["warn"],
    },
  }
)