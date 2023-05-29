module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "plugin:vue/vue3-strongly-recommended",
        'standard'
    ],
    "overrides": [
    ],
    "parserOptions": {
        "ecmaVersion": 12,
        parser: '@typescript-eslint/parser',
        "sourceType": "module"
    },
    "plugins": [
        "vue",
        '@typescript-eslint'
    ],
    "rules": {
    }
}
