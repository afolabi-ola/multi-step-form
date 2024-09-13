module.exports = {
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  extends: [
    'eslint:recommended', // Use the recommended rules from ESLint
    'plugin:react/recommended', // Use the recommended rules from the @eslint-plugin-react
    'plugin:@typescript-eslint/recommended', // Use the recommended rules from @typescript-eslint/eslint-plugin
  ],
  parserOptions: {
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
    },
  },
  settings: {
    react: {
      version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
    },
  },
  rules: {
    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
    'react/react-in-jsx-scope': 'off', // Not needed with React 17+
    '@typescript-eslint/no-unused-vars': ['error'], // Report unused variables as errors
    '@typescript-eslint/explicit-function-return-type': 'off', // Disable explicit return types on functions
    '@typescript-eslint/no-unused-vars': 'off', // Disable unused variables
  },
};
