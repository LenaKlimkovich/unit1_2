import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";
import jest from "eslint-plugin-jest";
import eslint from '@eslint/js';

export default defineConfig([
  { files: ["**/*.{js,mjs,cjs,test.js}"],  ignores: ["dist/", "build/", "*.min.js", "temp/", "webpack.config.js", "coverage/", "docs/"], plugins: { js, jest }, extends: ["js/recommended"], languageOptions: { globals: globals.browser}, rules: {
      "semi": "error", 
      "prefer-const": "warn"
    } },
]);

