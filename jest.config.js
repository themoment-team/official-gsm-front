/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  rootDir: './',
  transform: {
    '^.+\\.ts?$': 'ts-jest',
  },
  coverageDirectory: '<rootDir>/coverage',
  testPathIgnorePatterns: ['<rootDir>/node_modules'],
  moduleFileExtensions: ['ts', 'js'],
  projects: [
    {
      displayName: 'Common',
      testEnvironment: 'node',
      transform: {
        '^.+\\.ts?$': 'ts-jest',
      },
      testMatch: ['<rootDir>/packages/common/src/**/*.test.ts'],
      testPathIgnorePatterns: ['<rootDir>/packages/node_modules'],
    },
  ],
};
