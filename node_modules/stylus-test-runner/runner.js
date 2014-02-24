


//  Stylus Test Runner
//  ------------------

var fs       = require('fs')
var cleanCSS = require('clean-css')
var Stylus   = require('stylus')
var glob     = require('glob')
var _        = require('lodash')
var should   = require('should')



//  config is a global provided by index.js

runner(config)



function runner(config) {
  describe(config.describe, function() {
    forEachTest(config, function(test) {
      it(test.description, function() {
        renderStylus(test.givenStylus, config.stylus, function(actualCss) {
          actualCss.should.equal(test.expectedCss);
        })
      })
    })
  })
}

function renderStylus(stylusCode, config, callback) {
  stylus(stylusCode, config)
  .render(function(err, cssFromStylus) {
    if (err) throw err
    callback(cleanCSS.process(cssFromStylus))
  })
}

function forEachTest(config, callback) {
  var testFiles = _.reject(glob.sync(config.testDirPath + '/**/*.styl'), isEmptyFile)
  _.each(_.flatten(_.map(testFiles, getTestsFromFile)), callback)
}


function getTestsFromFile(filePath) {
  var fileContents = trimNewlines(fs.readFileSync(filePath, 'utf8'))
  return extractTestsFromString(fileContents)
}



function extractTestsFromString(string) {
  //  Filter empty strings out, it seems that the
  //  @it line leaves an empty string entry behind in the array
  return _.map(_.reject(string.split(/.*@it\s?/), isEmpty), extractTestFromString)
}



function extractTestFromString(test) {
  var description = test.match(/.*/)[0]
  test = test.replace(/.*/,'')
  stylusAndCss = test.split(/.*@expect.*/).map(trimNewlines)

  return {
    description : description,
    givenStylus : stylusAndCss[0],
    expectedCss : cleanCSS.process(stylusAndCss[1])
  }
}



//  string utils

function isEmpty(string) {
  return !string.length
}

function isEmptyFile(filePath) {
  return isEmpty(trimNewlines(fs.readFileSync(filePath, 'utf8')))
}

//  whitespace mutation utils

function trim(string)         { return string.trim() }
function trimNewlines(string) { return string.replace(/^(\s*|\n*)|(\s*|\n*)$/g,'') }






// fix stylus

function stylus(string, config) {
    // First through the whole config at stylus, it should ignore stuff it cannot handle
    // like use/import/include etc?
    var thisStylus = Stylus(string, config)
    // Enumerate over the config options that the stylus API only makes available by methods
    _.each(['use', 'import', 'include'], function(option){
      if (config[option])  _.each(arrayify(config[option]), thisStylus[option], thisStylus)
    })

    function arrayify(it) {
      return _.isArray(it) ? it : [it] ;
    }

    return thisStylus;
}
