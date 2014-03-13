var testRunnerConfig = {
  describe: 'Stylus Mixins',
  testDirPath: './test',
  stylus: {
    use: require('../lib/stylus-mixins')(),
    import: '../index.styl'
  }
}

require('stylus-test-runner')(testRunnerConfig)
