module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "prettier", "import", "react", "react-hooks"],
  rules: {
    "@typescript-eslint/no-floating-promises": "off",
    "import/prefer-default-export": "off",
    "import/no-extraneous-dependencies": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "no-underscore-dangle": "off",
    "@typescript-eslint/naming-convention": "off",
    "import/order": [
      'error',
      {
        groups: [['builtin', 'external'], 'internal', ['sibling', 'parent', 'index']],
        pathGroups: [
          {
            pattern: "@reduxjs/**",
            group: "external",
          },
          {
            pattern: "@redux-saga/**",
            group: "external",
          },
        ],
        "pathGroupsExcludedImportTypes": ["external"],
        'newlines-between': 'always',
        warnOnUnassignedImports: true
      }
    ],
    "no-param-reassign": "off",
    "prettier/prettier": [
      "error",
      { singleQuote: true }
    ],
    quotes: [2, "single"]
  },
  settings: {
    "import/internal-regex": "^@.*"
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
