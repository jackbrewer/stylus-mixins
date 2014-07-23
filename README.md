[![Build Status](https://travis-ci.org/jackbrewer/stylus-mixins.png?branch=master)](https://travis-ci.org/jackbrewer/stylus-mixins)

# Stylus Mixins

A collection of Stylus mixins which can be used in conjunction with [Stylus Autoprefixer](https://github.com/jenius/autoprefixer-stylus) or similar, to mimic, improve, and extend the functionality of [Nib](http://visionmedia.github.io/nib/).

## Documentation

Documentation for each mixin can be found in the [docs directory](https://github.com/jackbrewer/stylus-mixins/tree/master/docs).

Some mixins access internal helper-mixins, which should never be called directly. These helper-mixins always have names beginning with an underscore.

## Running Tests

All mixins have test coverage to ensure everything works as expected. To run the tests, clone this repo and run:

```
npm test
```
