module.exports = {
    "extends": "airbnb",
    "parser": "babel-eslint",
    "env": {
        "browser": true,
        "es6": true
    },
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly",
        "window": true,
        "$": true
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "no-console": 'off',
        "object-curly-newline": 'off',
        "max-len": 'off',
        "react/jsx-filename-extension": 'off',
        "react/react-in-jsx-scope": 'off',
        "jsx-a11y/html-has-lang": 'off',
        "jsx-a11y/alt-text": 'off',
        "import/prefer-default-export": 'off',
        "jsx-a11y/anchor-is-valid": 'off',
        "react/forbid-prop-types": 'off',
        "react/require-default-props": 'off',
        "jsx-a11y/label-has-for": 'off',
        "react/no-danger": 'off',
        "react/no-multi-comp": 'off',
        "jsx-a11y/click-events-have-key-events": 'off',
        "jsx-a11y/no-static-element-interactions": 'off',
        "no-alert": 'off',
        "react/no-danger": 'off',
        "jsx-a11y/no-noninteractive-element-interactions": 'off',
        "eslint-disable-next-line react/jsx-filename-extension": 'off',
        "react/state-in-constructor": 'off',
        "react/static-property-placement": 'off',
        "react/destructuring-assignment": 'off',
        "max-classes-per-file": 'off',
        "no-nested-ternary": 'off',
        "react/sort-comp": 'off',
        "no-plusplus": 'off',
        "indent": [
            "error",
            2
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ]
    }
};
