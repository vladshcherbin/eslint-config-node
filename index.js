module.exports = {
  extends: 'airbnb-base',
  plugins: [
    'sort-destructure-keys'
  ],
  rules: {
    'comma-dangle': ['error', 'never'],
    'import/order': ['error', { alphabetize: { order: 'asc' } }],
    'no-await-in-loop': 'off',
    'no-restricted-syntax': [
      'error',
      {
        message: 'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
        selector: 'ForInStatement'
      },
      {
        message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
        selector: 'LabeledStatement'
      },
      {
        message: '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
        selector: 'WithStatement'
      }
    ],
    'object-curly-newline': ['error', { consistent: true, multiline: true }],
    semi: ['error', 'never'],
    'sort-destructure-keys/sort-destructure-keys': 'error',
    'sort-imports': ['error', { ignoreDeclarationSort: true }]
  }
}
