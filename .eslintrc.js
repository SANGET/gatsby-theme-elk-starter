module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },
  extends: [
    "airbnb-base",
    `react-app`
  ],
  "rules": {
    "indent": ["error", 2],
    "semi": ["error", "always"],
    "no-unused-vars": [
      1,
      {
        "vars": "all", "args": "after-used", "ignoreRestSiblings": false
      }
    ],
    "import/prefer-default-export": 0,
    "arrow-body-style": 0,
    "no-console": 0,
    "jsx-a11y/click-events-have-key-events": 0,
    "jsx-a11y/no-static-element-interactions": 0,
    "react/jsx-tag-spacing": 0,
    "react/destructuring-assignment": 0,
    "react/no-unused-state": 0,
    "react/display-name": 0,
    "react/jsx-max-props-per-line": 0,
    "react/jsx-first-prop-new-line": 0,
    "react/jsx-one-expression-per-line": 0,
    "react/jsx-closing-bracket-location": [1, "after-props"],
    "react/jsx-filename-extension": [
      1,
      {
        "extensions": [".js", ".jsx"]
      }
    ]
  }
}
