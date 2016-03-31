module.exports = plugin

function plugin () {
  return function (stylus) {
    stylus.include(__dirname)
  }
}
