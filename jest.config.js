module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  roots: ['<rootDir>/src'],
  modulePaths: ['<rootDir>/src'],
  moduleDirectories: ['node_modules'],
  transform: {
    '^.+\\.tsx?$': 'esbuild-jest',
  },
  setupFilesAfterEnv: ['./src/utils/setupTests.ts'],
};
