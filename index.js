module.exports = {
  extends: [
    'airbnb-base'
  ],
  plugins: [
    'sort-destructure-keys'
  ],
  rules: {
    'import/order': ['error', { alphabetize: { order: 'asc' } }],
    'object-curly-newline': ['error', { consistent: true, multiline: true }],
    'sort-destructure-keys/sort-destructure-keys': 'error',
    'sort-imports': ['error', { ignoreDeclarationSort: true }],
    'sort-keys': ['error', 'asc', { natural: true }]
  }
}