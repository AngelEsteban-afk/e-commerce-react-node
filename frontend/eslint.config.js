import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";

export default [
  { ignores: ["dist"] }, // Ignora la carpeta dist
  {
    // Configuración para archivos JavaScript/JSX
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: {
        ...globals.browser, // Agrega variables globales del navegador
        ...globals.node, // Agrega variables globales de Node.js
      },
      parserOptions: {
        ecmaVersion: "latest",
        ecmaFeatures: { jsx: true },
        sourceType: "module",
      },
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      "no-unused-vars": ["error", { varsIgnorePattern: "^[A-Z_]" }],
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
    },
  },
  {
    // Configuración específica para archivos de configuración de Node.js
    files: ["postcss.config.js", "tailwind.config.js"],
    languageOptions: {
      globals: {
        ...globals.node, // Agrega variables globales de Node.js
      },
    },
  },
];
