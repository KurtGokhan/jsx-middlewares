const { pathsToModuleNameMapper } = require('ts-jest');
const { compilerOptions } = require('./tsconfig.lib');

/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.spec.json',
    },
  },
  collectCoverage: true,
  // on node 14.x coverage provider v8 offers good speed and more or less good report
  coverageProvider: 'v8',
  collectCoverageFrom: [
    '**/*.{js,jsx,ts,tsx}',
    '!**/*.d.ts',
    '!**/tests/**',
    '!**/node_modules/**',
    '!<rootDir>/out/**',
    '!<rootDir>/examples/**',
    '!<rootDir>/.next/**',
    '!<rootDir>/*.config.js',
    '!<rootDir>/coverage/**',
    '!<rootDir>/dist/**',
    '!<rootDir>/artifacts/**',
    '!<rootDir>/out/**',
  ],
  preset: 'ts-jest',
  testEnvironment: 'node',
  testPathIgnorePatterns: [
    '<rootDir>/artifacts/',
    '<rootDir>/dist/',
    '<rootDir>/out/',
    '<rootDir>/coverage/',
    '<rootDir>/examples/',
    '<rootDir>/node_modules/',
  ],
  roots: ['<rootDir>'],
  modulePaths: [compilerOptions.baseUrl],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths),
};
