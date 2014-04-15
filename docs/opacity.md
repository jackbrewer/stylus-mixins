# Opacity

```css
opacity($value, [$arguments])
```

A transparent mixin to automatically add IE fallbacks for opacity.

```css
@param $value
  type: number (positive, unitless)
  default: false
```
* Sets the desired opacity.

```css
@param $arguments
  type: number (positive, unitless)
  default: false
```
* Optionally allows for `!important` to be added.

---

**Example**
```css
.element
  opacity 0.5  // Transparent mixin syntax

/* CSS */
.element {
  opacity: 0.5;
  -ms-filter: "alpha(opacity=50)"; /* Appears for IE8 Only */
  filter: "alpha(opacity=50)"; /* Appears for IE7 and below */
}
```

---

[Source](https://github.com/jackbrewer/stylus-mixins/blob/master/lib/stylus-mixins/opacity.styl) - [Tests](https://github.com/jackbrewer/stylus-mixins/blob/master/test/tests/opacity.styl)
