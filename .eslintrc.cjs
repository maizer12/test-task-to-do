module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    '@wemake-services/typescript/recommended',
    '@wemake-services/javascript',
  ],
  ignorePatterns: ['vite.config.ts'],
}
