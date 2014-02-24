//
//  Shorthand Omissions Test Runner
//  -------------------------------
//

var testRunnerConfig = {
  describe: 'Mixins',
  stylus: {
    use: require('./index')(),
    import: 'mixins/unit-mixins'
  }
}

require('stylus-test-runner')(testRunnerConfig)
