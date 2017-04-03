module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node": true
    },
    "extends": ["eslint:recommended", "plugin:react/recommended"],
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "arrow-body-style": "error",
        "arrow-parens": "error",
        "arrow-spacing": "error",
        "block-spacing": ["error", "always"],
        "brace-style": ["error", "1tbs"],
        "camelcase": "error",
        "dot-notation": "error",
        "indent": [
            "off",
            4
        ],
        "linebreak-style": [
            "error",
            "windows"
        ],
        "no-console": "off",
        "no-extra-bind": "error",
        "no-invalid-this": "error",
        "quotes": [
            "error",
            "double"
        ],
        "semi": [
            "error",
            "always"
        ]
    }
};