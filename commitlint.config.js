// @ts-check
/**
 * @type {import('@commitlint/types').UserConfig}
 */
const commitlintConfig = {
  extends: ['@commitlint/config-conventional'],
  defaultIgnores: process.env.CI ? false : true,
};

export default commitlintConfig;
