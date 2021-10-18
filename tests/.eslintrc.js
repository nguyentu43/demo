module.exports = {
  plugins: ['jest', 'react'],
  parser: '@babel/eslint-parser',
  extends: ['plugin:jest/recommended', 'plugin:react/recommended'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  },
  env: {
    'jest/globals': true
  },
  settings: {
    'jest': {
      'version': 27
    },
    'react':{
      'version': 'detect'
    }
  }
}