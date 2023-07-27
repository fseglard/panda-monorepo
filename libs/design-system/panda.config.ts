import { defineConfig } from '@pandacss/dev';

export default defineConfig({
  /**
   * Whether to emit the artifacts to `node_modules` as a package.
   * See https://panda-css.com/docs/references/config#emitpackage
   */
  // emitPackage: true,
  /**
   * Whether to hash the generated class names.
   * See https://panda-css.com/docs/references/config#hash
   */
  hash: process.env.NODE_ENV === 'production',
  /**
   * List of files glob to watch for changes.
   * See https://panda-css.com/docs/references/config#include
   */
  include: ['./src/**/*.{ts,tsx}'],
  /**
   * Options for the generated typescript definitions.
   * See https://panda-css.com/docs/references/config#jsxframework
   */
  jsxFramework: 'react',
  /**
   * Whether to minify the generated css.
   * See https://panda-css.com/docs/references/config#minify
   */
  minify: process.env.NODE_ENV === 'production',
  /**
   * The output directory for the generated css.
   * See https://panda-css.com/docs/references/config#outdir
   */
  outdir: 'styled-system',
  /**
   * Whether to enable css reset styles.
   * See https://panda-css.com/docs/references/config#preflight
   */
  preflight: true,
  /**
   * The set of reusable and shareable configuration presets.
   * See https://panda-css.com/docs/references/config#presets
   */
  presets: ['@pandacss/preset-panda', '@acme/panda-preset'],
  /**
   * The separator for the generated css classes.
   * See https://panda-css.com/docs/references/config#separator
   */
  separator: '-',
});
