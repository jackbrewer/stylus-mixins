[![Build Status](https://travis-ci.org/jackbrewer/stylus-mixins.png?branch=master)](https://travis-ci.org/jackbrewer/stylus-mixins)

# Stylus Mixins

A collection of Stylus mixins which can be used in conjunction with [Stylus Autoprefixer](https://github.com/jenius/autoprefixer-stylus) or similar, to mimic, improve, and extend the functionality of [Nib](https://www.npmjs.com/package/nib).

## Documentation

Documentation for each mixin can be found in the [docs directory](https://github.com/jackbrewer/stylus-mixins/tree/master/docs).

**General**
* [Clearfix](https://github.com/jackbrewer/stylus-mixins/blob/master/docs/clearfix.md) - clearfix()
* [Internet Explorer](https://github.com/jackbrewer/stylus-mixins/blob/master/docs/ie.md) - ie()
* [Opacity](https://github.com/jackbrewer/stylus-mixins/blob/master/docs/opacity.md) - opacity()
* [Triangle](https://github.com/jackbrewer/stylus-mixins/blob/master/docs/triangle.md) - triangle()

**Media Queries**
* [HiDPI](https://github.com/jackbrewer/stylus-mixins/blob/master/docs/media/hidpi.md) - hidpi()
* [Width/Height](https://github.com/jackbrewer/stylus-mixins/blob/master/docs/media/width-height.md) - width-min(), width-max(), width-range(), height-min(), height-max(), height-range()

**Text**
* [Ellipsis](https://github.com/jackbrewer/stylus-mixins/blob/master/docs/text/ellipsis.md) - ellipsis()
* [Font Face](https://github.com/jackbrewer/stylus-mixins/blob/master/docs/text/font-face.md) - font-face()
* [Hide Text](https://github.com/jackbrewer/stylus-mixins/blob/master/docs/text/hide-text.md) - hide-text()

**Units**
* [Em](https://github.com/jackbrewer/stylus-mixins/blob/master/docs/units/em.md) - em()
* [Percentage](https://github.com/jackbrewer/stylus-mixins/blob/master/docs/units/percentage.md) - percentage()
* [Ratio](https://github.com/jackbrewer/stylus-mixins/blob/master/docs/units/ratio.md) - ratio()
* [Ratio Percentage](https://github.com/jackbrewer/stylus-mixins/blob/master/docs/units/ratio-percentage.md) - ratio-percentage()
* [Rem](https://github.com/jackbrewer/stylus-mixins/blob/master/docs/units/rem.md) - rem()
* [Tracking](https://github.com/jackbrewer/stylus-mixins/blob/master/docs/units/tracking.md) - tracking()

**Helpers**
* [Column Span Width](https://github.com/jackbrewer/stylus-mixins/blob/master/docs/helpers/col-span-width.md) - col-span-width()
* [Timing Function Variables](https://github.com/jackbrewer/stylus-mixins/blob/master/docs/helpers/timing-functions.md) - Cubic Bezier values for common easing functions


## Running Tests

All mixins have test coverage to ensure everything works as expected. To run the tests, clone this repo and run:

```
npm test
```

## Licence
ISC © [Jack Brewer](https://github.com/jackbrewer/)
