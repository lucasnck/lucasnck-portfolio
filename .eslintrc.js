module.exports = {
  extends: [
    "airbnb-typescript",
    "airbnb/hooks",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "plugin:react-hooks/recommended",
  ],
  plugins: ["react", "@typescript-eslint"],
  env: {
    browser: true,
    es6: true,
  },
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
    project: "./tsconfig.json",
  },
  rules: {
    "import/prefer-default-export": "off",
    "@typescript-eslint/no-empty-interface": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "react/destructuring-assignment": "off",
    "react/jsx-props-no-spreading": "off",
    "react/prop-types": "off",
    "linebreak-style": "off",
    "no-restricted-globals": "off",
    "react/require-default-props": "off",
    "react/no-unescaped-entities": "off",
    "react/no-danger": "off",
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
  },
};
