module.exports = {
    testEnvironment: 'jsdom',
    moduleNameMapper: {
      '^axios$': require.resolve('axios'),
      '^react-router-dom$': '<rootDir>/node_modules/react-router-dom',
    },
    transformIgnorePatterns: [
      '/node_modules/(?!axios)'
    ],
    setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
  };