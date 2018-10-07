module.exports = {
  "env": {
    "node": true,
    "browser": true,
    "es6": true
  },
  rules: {
    "no-undef": 0,
    "import/prefer-default-export": 0,
    "import/no-unresolved": 0,
    "camelcase": 0,
    "no-underscore-dangle": 0,
    "global-require": 0,
    "react/jsx-filename-extension": 0,
    "react/destructuring-assignment": 0,
    "no-restricted-globals": 0,
    "jsx-a11y/anchor-is-valid": 0,
    "no-script-url": 0
  },
  "parser": "babel-eslint",
  "extends": "airbnb"
};