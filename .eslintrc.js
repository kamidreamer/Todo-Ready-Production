module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
    },
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: "module",
        parser: "@typescript-eslint/parser",
    },
    extends: [
        "plugin:@typescript-eslint/recommended",
        "plugin:nuxt/recommended",
        "plugin:vue/vue3-recommended",
        "plugin:prettier/recommended",
    ],
    plugins: ["@typescript-eslint", "eslint-plugin-neverthrow"],
    rules: {
        "no-unused-vars": "off",
        "no-undef": "off",
        "prettier/prettier": "error",
        "vue/multi-word-component-names": "off",
        "no-empty-function": "off",
        "@typescript-eslint/no-empty-function": [
            "error",
            {
                allow: ["arrowFunctions"],
            },
        ],
        "@typescript-eslint/no-explicit-any": [
            "error",
            {
                ignoreRestArgs: true,
            },
        ],
        "vue/no-multiple-template-root": "off",
    },
};
