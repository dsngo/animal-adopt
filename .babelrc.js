const plugins = ["@babel/plugin-proposal-class-properties"];
const presets = [
  "@babel/preset-react",
  "@babel/preset-env",
  ["@emotion/babel-preset-css-prop", { sourceMap: true }],
];

module.exports = { plugins, presets };
