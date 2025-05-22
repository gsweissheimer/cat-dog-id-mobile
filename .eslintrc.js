module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },
  plugins: ['@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking'
  ],
  rules: {
    // proíbe qualquer uso de `any` sem que seja explicitamente declarado
    '@typescript-eslint/no-explicit-any': 'error',
    // exige tipagem de retorno em funções públicas
    '@typescript-eslint/explicit-module-boundary-types': 'error',
    // exige tipagem em todas as funções (podendo ajustar conforme necessidade)
    '@typescript-eslint/explicit-function-return-type': [
      'error',
      {
        allowExpressions: true,
        allowTypedFunctionExpressions: true
      }
    ]
  }
};
