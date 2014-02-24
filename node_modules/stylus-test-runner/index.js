

var Mocha = require('mocha');
var _     = require('lodash');

module.exports = stylusTestRunner;



// @param  customConfig:
//
//          describe       <String>  Title used by Mocha top-level describe function
//          testDirPath    <String>  the path where your styl tests are
//          stylus         <Object>  stylus config
//          mocha          <Object>  mocha config

function stylusTestRunner(customConfig) {

  var defaultConfig = {
    describe    : getDefaultTestDescription(),
    testDirPath : './test',
    stylus      : {compress : true},
    mocha       : {reporter : 'spec'}
  };

  //  global config will be used by runner
  //  for configing stylus compiler and test description / suite path

  root.config = _.merge({}, defaultConfig, customConfig);

  new Mocha(config.mocha)
  .addFile(__dirname + '/runner')
  .run();
}



//  @summary  Read the users npm package name property to provide a name for
//            the test suite's initial 'describe'
//
//  @returns  <String>  '' || 'some-package-name'

function getDefaultTestDescription() {
  var fs = require('fs');
  var packageName;
  try {
     packageName = JSON.parse(fs.readFileSync('./package.json')).name;
  } catch (err) {
    packageName = '';
  }
  return packageName;
}
