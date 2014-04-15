# Width/Height

A set of mixins which can be used to wrap styles within media queries.

* [width-min()](#width-min)
* [width-max()](#width-max)
* [width-range()](#width-range)
* [height-min()](#height-min)
* [height-max()](#height-max)
* [height-range()](#height-range)

---

## Width Min
```css
width-min($width)
```

Places styles in a media query, to apply when a device viewport is wider that the specified width.

```css
@param $width
  type: unit (length)
```
* Device viewport must be wider than this value to receive passed styles.

**Example**
```css
+width-min(10em)
  .element
    color #000

/* CSS */
@media screen and (min-width: 10em) {
  .element {
    color: #000;
  }
}
```

## Width Max
```css
width-max($width)
```

Places styles in a media query, to apply when a device viewport is narrower that the specified width.

```css
@param $width
  type: unit (length)
```
* Device viewport must be narrower than this value to receive passed styles.

**Example**
```css
+width-max(10em)
  .element
    color #000

/* CSS */
@media screen and (max-width: 10em) {
  .element {
    color: #000;
  }
}
```

## Width Range
```css
width-range($min-width, $max-width)
```

Places styles in a media query, to apply when a device viewport is between the specified widths.

```css
@param $min-width
  type: unit (length)
```
* Device viewport must be wider than this value to receive passed styles.

```css
@param $max-width
  type: unit (length)
```
* Device viewport must be narrower than this value to receive passed styles

**Example**
```css
+width-range(10em, 20em)
  .element
    color #000

/* CSS */
@media screen and (min-width: 10em) and (max-width: 20em) {
  .element {
    color: #000;
  }
}
```

## Height Min
```css
height-min($height)
```

Places styles in a media query, to apply when a device viewport is wider that the specified height.

```css
@param $height
  type: unit (length)
```
* Device viewport must be wider than this value to receive passed styles.

**Example**
```css
+height-min(10em)
  .element
    color #000

/* CSS */
@media screen and (min-height: 10em) {
  .element {
    color: #000;
  }
}
```

## Height Max
```css
height-max($height)
```

Places styles in a media query, to apply when a device viewport is narrower that the specified height.

```css
@param $height
  type: unit (length)
```
* Device viewport must be narrower than this value to receive passed styles.

**Example**
```css
+height-max(10em)
  .element
    color #000

/* CSS */
@media screen and (max-height: 10em) {
  .element {
    color: #000;
  }
}
```

## Height Range
```css
height-range($min-height, $max-height)
```

Places styles in a media query, to apply when a device viewport is between the specified heights.

```css
@param $min-height
  type: unit (length)
```
* Device viewport must be wider than this value to receive passed styles.

```css
@param $max-height
  type: unit (length)
```
* Device viewport must be narrower than this value to receive passed styles

**Example**
```css
+height-range(10em, 20em)
  .element
    color #000

/* CSS */
@media screen and (min-height: 10em) and (max-height: 20em) {
  .element {
    color: #000;
  }
}
```

---

### Default Variables

```css
$no-mq ?= false
```
Set to true if compiling a stylesheet for browsers such as IE8, which don't support media queries

```css
$width--fixed-min ?= 960px
$width--fixed-max ?= 1200px
```
* If `$no-mq` is set to true, these values will be used to determine whether media query styles should be ommitted, or output without wrapping media queries.

---

[Source](https://github.com/jackbrewer/stylus-mixins/blob/master/lib/stylus-mixins/media/width-height.styl) - [Tests](https://github.com/jackbrewer/stylus-mixins/blob/master/test/tests/media/width-height.styl)
