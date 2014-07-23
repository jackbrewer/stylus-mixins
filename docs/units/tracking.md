# Tracking

```css
tracking($val, [$base])
```

Returns an em or pixel value, based on a passed tracking value, found in programs such as Photoshop. Most browsers now support subpixel letter-spacing but those which don't will round to the nearest whole pixel.

```css
@param $val
  type: unit (integer)
```
* A tracking value

```css
@param $base
  type: unit (pixel)
```
* A pixel value to use when calculating a pixel based output. Should match the current font-size of the element receiving letter-spacing.

---

**Example with em based output**
```css
.element
  tracking tracking(180)

/* CSS */
.element {
  font-size: 0.18em;
}
```

**Example with px based output**
```css
.element
  tracking tracking(180, 15px)

/* CSS */
.element {
  font-size: 2.7px;
}
```

---

[Source](https://github.com/jackbrewer/stylus-mixins/blob/master/lib/stylus-mixins/units/tracking.styl) - [Tests](https://github.com/jackbrewer/stylus-mixins/blob/master/test/tests/units/tracking.styl)
