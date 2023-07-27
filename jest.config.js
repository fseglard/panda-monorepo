// @ts-check
/**
 * @type {import('jest').Config}
 */
const jestConfig = {
  /**
   * The directory where Jest should store its cached dependency information.
   * See https://jestjs.io/docs/configuration#cachedirectory-string
   */
  cacheDirectory: '<rootDir>/node_modules/.cache/jest',
  /**
   * An array of glob patterns indicating a set of files for which coverage information should be collected.
   * See https://jestjs.io/docs/configuration#collectcoveragefrom-array
   */
  collectCoverageFrom: ['<rootDir>/src/**/*.{ts,tsx}', '!**/*.d.ts'],
  /**
   * Automatically clear mock calls and instances before every test.
   * See https://jestjs.io/docs/configuration#clearmocks-boolean
   */
  clearMocks: true,
  /**
   * A list of reporter names that Jest uses when writing coverage reports.
   * See https://jestjs.io/docs/configuration#coveragereporters-arraystring--string-options
   */
  coverageReporters: ['html'],
  /**
   * A preset that is used as a base for Jest's configuration.
   * See https://jestjs.io/docs/configuration#preset-string
   */
  preset: 'ts-jest',
};

export default jestConfig;
