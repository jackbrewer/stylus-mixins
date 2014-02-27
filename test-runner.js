//
//  Shorthand Omissions Test Runner
//  -------------------------------
//

var testRunnerConfig = {
  describe: 'Mixins',
  stylus: {
    use: require('./index')(),
    import: 'mixins/mixins'
  }
}

require('stylus-test-runner')(testRunnerConfig)
