[![Build Status](https://travis-ci.org/jackbrewer/stylus-mixins.png?branch=master)](https://travis-ci.org/jackbrewer/stylus-mixins)

# Stylus Mixins

A collection of Stylus mixins which can be used in conjunction with [Stylus Autoprefixer](https://github.com/jenius/autoprefixer-stylus) or similar, to mimic, improve, and extend the functionality of [Nib](http://visionmedia.github.io/nib/).

*Currently in an early stage, but with grand plans for the future.*

## Running Tests

All mixins have test coverage to ensure everything works as expected. To run the tests, clone this repo and run:

```
npm test
```

## Mixin Documentation

Mixins can found in the `lib/stylus-mixins` folder. The test directory gives good example usage of each mixin.

### Clearfix
```css
clearfix()
```

Outputs a [micro clearfix hack](http://nicolasgallagher.com/micro-clearfix-hack/) on a parent element, to contain floated children elements without adding extra markup.

**Example Usage**
```css
.element
  clearfix()

/* CSS */
.element {
  zoom: 1; /* Appears for IE7 Only */
}
.element:after,
.element:before {
  content: "";
  display: table;
}
.element:after {
  clear: both;
}
```


## Coming Soon

* More mixins
* List of all existing mixins with usage details
* More tests (currently estimated ~95% code coverage)
