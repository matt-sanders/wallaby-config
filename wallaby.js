module.exports = function (wallaby) {
  return {
    files: [
      'proj1/**/*', 
      'proj2/**/*',
      'jest.config.js',
      {
        pattern: 'proj1/**/*.spec.js',
        ignore: true
      },
      {
        pattern: 'proj2/**/*.spec.js',
        ignore: true
      }
    ],

    tests: ['proj1/**/*.spec.js', 'proj2/**/*.spec.js'],

    env: {
      type: 'node',
      runner: 'node'
    },

    compilers: {
      '**/*.js': wallaby.compilers.babel(),
      '**/*.vue': require('wallaby-vue-compiler')(wallaby.compilers.babel({}))
    },

    preprocessors: {
      '**/*.vue': file => require('vue-jest').process(file.content, file.path)
    },

    setup: function (wallaby) {
      const jestConfig = require('./jest.config.js')
      jestConfig.transform = {};
      wallaby.testFramework.configure(jestConfig)
    },

    testFramework: 'jest',

    debug: true
  }
}