module.exports = pluginFactory;

function pluginFactory(){
  return function plugin(stylus) {
    stylus.include(__dirname);
  }
}
