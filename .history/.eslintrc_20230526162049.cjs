module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "plugin:vue/vue3-essential",
        "standard-with-typescript"
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
