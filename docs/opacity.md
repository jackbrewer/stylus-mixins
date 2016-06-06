# Opacity

```css
opacity($value, [$arguments])
```

A transparent mixin to optionally add legacy IE fallbacks for opacity. This only adds fallback code for IE8 or earlier if you have the [IE default variables](https://github.com/jackbrewer/stylus-mixins/blob/master/docs/ie.md#default-variables) set.

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

**Example - Default:** No fallback required, so nothing added
```stylus
.element
  opacity 0.5

/* CSS */
.element {
  opacity: 0.5;
}
```

_Note: This mixin can use the transparent mixin syntax, meaning you can author opacity as you would any other property, rather than using `opacity(0.5)`._

**Example - IE8:** If `$is-ie--version` is set to `8`
```stylus
.element
  opacity 0.5

/* CSS */
.element {
  opacity: 0.5;
  -ms-filter: "alpha(opacity=50)"; // Appears for IE8 Only
}
```


**Example - IE7:** If `$is-ie--version` is set to `7` or lower
```stylus
.element
  opacity 0.5

/* CSS */
.element {
  opacity: 0.5;
  filter: "alpha(opacity=50)"; // Appears for IE7 and earlier
}
```

---

[Source](https://github.com/jackbrewer/stylus-mixins/blob/master/lib/stylus-mixins/opacity.styl) - [Tests](https://github.com/jackbrewer/stylus-mixins/blob/master/test/tests/opacity.styl)
