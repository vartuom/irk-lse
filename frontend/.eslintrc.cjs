module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        "airbnb",
        "airbnb-typescript",
        "airbnb/hooks",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:prettier/recommended",
    ],
    overrides: [
        {
            files: ['src/**/*.slice.ts'],
            rules: { 'no-param-reassign': ['error', { props: false }] },
        },
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        project: "./tsconfig.json",
    },
    plugins: ["react", "@typescript-eslint", "prettier"],
    rules: {
        "react/require-default-props": 0,
        "prettier/prettier": [
            "error",
            {
                endOfLine: "auto",
            },
        ],
    },
};
