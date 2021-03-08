module.exports = {
  root: true,
  env: {
    node: true,
    jest: true
  },
  extends: [
    'plugin:vue/recommended',
    'plugin:jest/recommended',
    'standard'
  ],
  plugins: [
    'vue',
    'jest'
  ],
  rules: {
    // 0 = off, 1 = warn, 2 = error
    'no-console': process.env.NODE_ENV === 'production' ? 2 : 0,
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'array-callback-return': 0
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
