module.exports = {
  ignorePatterns: ['node_modules/', '/.next/'],
  setupFiles: [
    '<rootDir>/src/setupTests.ts',
  ],
  transform: {
    "^.+\\.js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest",
  },
  testEnvironment: 'jsdom',
}
