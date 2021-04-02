// eslint-disable-next-line @typescript-eslint/no-var-requires
const baseConfig = require('./jest.config')

module.exports = {
  ...baseConfig,
  name: 'Storyshots',
  displayName: 'storyshots',
  testMatch: ['<rootDir>/test/Storyshots.test.ts'],
}
