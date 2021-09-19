module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "prettier"],
  rules: {
    "@typescript-eslint/no-floating-promises": "off",
    "import/prefer-default-export": "off",
    "import/no-extraneous-dependencies": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "no-underscore-dangle": "off",
    "@typescript-eslint/naming-convention": "off",
    "no-param-reassign": "off",
    "prettier/prettier": [
      "error",
      { singleQuote: true }
    ],
    quotes: [2, "single"]
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "airbnb",
    "airbnb-typescript",
    "plugin:prettier/recommended",
    "prettier",
  ],
  parserOptions: {
    project: './tsconfig.json'
  },
};
