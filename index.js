module.exports = {
  extends: 'airbnb-base',
  plugins: [
    'sort-destructure-keys'
  ],
  rules: {
    'comma-dangle': ['error', 'never'],
    'import/order': ['error', { alphabetize: { order: 'asc' } }],
    'no-await-in-loop': 'off',
    'object-curly-newline': ['error', { consistent: true, multiline: true }],
    semi: ['error', 'never'],
    'sort-destructure-keys/sort-destructure-keys': 'error',
    'sort-imports': ['error', { ignoreDeclarationSort: true }],
    'sort-keys': ['error', 'asc', { natural: true }]
  }
}
