module.exports = {
    parser: '@babel/eslint-parser',
    plugins: ['react'],
    extends: ['eslint:recommended', 'plugin:react/recommended'],
    parserOptions: {
        sourceType: 'module',
        allowImportExportEverywhere: true,
        ecmaFeatures: {
            jsx: true
        }
    },
    env: {
        browser: true
    },
    settings: {
        react: {
            version: 'detect'
        }
    }
}