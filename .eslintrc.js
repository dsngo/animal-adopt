const baseExtends = [
  "eslint:recommended",
  "plugin:import/errors",
  "plugin:jsx-a11y/recommended",
  "plugin:react/recommended",
];

const reactPureJsExtends = [].concat.apply(baseExtends, [
  // "airbnb",
  // "airbnb/hooks",
  "prettier",
  "prettier/react",
]);

const reactTypeScriptExtends = [].concat.apply(baseExtends, [
  "prettier/@typescript-eslint",
  "plugin:@typescript-eslint/recommended",
  "plugin:prettier/recommended",
]);

// Plugins
const basePlugins = [
  "import",
  "jsx-a11y",
  "react",
  "react-hooks",
  "sort-keys-fix",
  "sort-class-members",
  "prettier",
];

// Rules
const importOrderOptions = {
  alphabetize: { caseInsensitive: false, order: "asc" },
  groups: ["builtin", "external", "internal"],
  "newlines-between": "never",
  pathGroups: [{ group: "external", pattern: "react", position: "before" }],
  pathGroupsExcludedImportTypes: ["react"],
};

const paddingLineBetweenStatementsOptions = [
  {
    blankLine: "always",
    next: "*",
    prev: ["singleline-const", "singleline-let", "singleline-var", "import", "throw"],
  },
  {
    blankLine: "always",
    next: [
      "singleline-const",
      "multiline-const",
      "class",
      "export",
      "function",
      "return",
      "import",
    ],
    prev: ["*"],
  },
  {
    blankLine: "never",
    next: ["singleline-const", "singleline-let", "singleline-var"],
    prev: ["singleline-const", "singleline-let", "singleline-var"],
  },
  {
    blankLine: "never",
    next: "import",
    prev: "import",
  },
  {
    blankLine: "never",
    next: "export",
    prev: "export",
  },
];

const sortClassMembersOptions = {
  accessorPairPositioning: "getThenSet",
  order: [
    "constructor",
    "[conventional-private-properties]",
    "[properties]",
    "[static-properties]",
    "[static-methods]",
    "[methods]",
    "[conventional-private-methods]",
  ],
};

const baseRules = {
  "consistent-return": 1,
  "import/order": [1, importOrderOptions],
  "lines-between-class-members": 1,
  "no-console": 1,
  "padding-line-between-statements": [1, ...paddingLineBetweenStatementsOptions],
  "prettier/prettier": 1,
  "react-hooks/rules-of-hooks": 2,
  "react/button-has-type": 0,
  "react/destructuring-assignment": [1, "always", { ignoreClassFields: true }],
  "react/jsx-filename-extension": 0,
  "react/jsx-props-no-spreading": 0,
  "react/prop-types": 0,
  "react/state-in-constructor": 0,
  "sort-class-members/sort-class-members": [1, sortClassMembersOptions],
  "sort-keys-fix/sort-keys-fix": 1,
  "sort-vars": [1, { ignoreCase: true }],
};

// Combined Configs
const combinedConfigs = {
  env: { browser: true, es6: true, jest: true, node: true },
  overrides: [
    {
      extends: reactPureJsExtends,
      files: ["*.js", "*.jsx"],
      parser: "babel-eslint",
    },
    {
      extends: reactTypeScriptExtends,
      files: ["*.ts", "*.tsx"],
      parser: "@typescript-eslint/parser",
    },
  ],
  parserOptions: {
    ecmaFeatures: { jsx: true },
    ecmaVersion: 2020,
    sourceType: "module",
  },
  plugins: basePlugins,
  rules: baseRules,
  settings: {
    "import/resolver": {
      node: { extensions: [".js", ".jsx", ".ts", ".tsx"] },
    },
    react: { version: "detect" },
  },
};
// console.log(combinedConfigs.overrides);

module.exports = combinedConfigs;
