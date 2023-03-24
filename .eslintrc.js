// eslint-disable-next-line functional/no-expression-statements, functional/immutable-data, no-undef
module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "plugin:functional/all",
        "plugin:functional/stylistic",
        "plugin:functional/no-other-paradigms",
        "plugin:functional/external-vanilla-recommended",
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "overrides": [
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "functional"
    ],
    "rules": {
        "functional/prefer-readonly-type": "off",
        "functional/prefer-immutable-types": "off",
        "functional/no-conditional-statements": "off",
        "react/prop-types": "off",
        "react/display-name": "off",
        "indent": [
            "error",
            4
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "double"
        ],
        "semi": [
            "error",
            "never"
        ]
    }
}
