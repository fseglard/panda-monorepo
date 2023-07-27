// @ts-check
import { createRequire } from 'module';
import nextJest from 'next/jest.js';
import { pathsToModuleNameMapper } from 'ts-jest';
import defaultJestConfig from '../../jest.config.js';

const require = createRequire(import.meta.url);
const { compilerOptions } = require('./tsconfig.json');

const createJestConfig = nextJest({ dir: './' });

/**
 * @type {import('jest').Config}
 */
const jestConfig = {
  ...defaultJestConfig,
  /**
   * The directory where Jest should output its coverage files.
   * See https://jestjs.io/docs/configuration#coveragedirectory-string
   */
  coverageDirectory: '../../coverage/next-app',
  /**
   * Allows for a label to be printed alongside a test while it is running.
   * See https://jestjs.io/docs/configuration#displayname-string-object
   */
  displayName: 'next-app',
  /**
   * A map from regular expressions to module names or to arrays of module names that allow to stub out resources,
   * like images or styles with a single module.
   * See https://jestjs.io/fr/docs/configuration#modulenamemapper-objectstring-string--arraystring
   */
  moduleNameMapper: {
    ...pathsToModuleNameMapper(compilerOptions.paths, { prefix: '<rootDir>/' }),
  },
  /**
   * A preset that is used as a base for Jest's configuration.
   * See https://jestjs.io/docs/configuration#preset-string
   */
  preset: null,
  /**
   * A list of paths to modules that run some code to configure
   * or set up the testing framework before each test file in the suite is executed.
   * See https://jestjs.io/docs/configuration#setupfilesafterenvarray
   */
  setupFilesAfterEnv: ['<rootDir>/src/tests/setup.ts'],
  /**
   * The test environment that will be used for testing.
   * See https://jestjs.io/docs/configuration#testenvironment-string
   */
  testEnvironment: 'jsdom',
};

export default createJestConfig(jestConfig);
