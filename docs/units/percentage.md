# Percentage

```css
percentage($decimal)
```

Returns a percentage when passed a decimal number.

```css
@param $decimal
  type: number (unitless)
```
* A decimal to be converted to a percentage.

---

**Example**
```css
.element
  width percentage(0.5)

/* CSS */
.element {
  width: 50%;
}
```

---

[Source](https://github.com/jackbrewer/stylus-mixins/blob/master/lib/stylus-mixins/units/percentage.styl) - [Tests](https://github.com/jackbrewer/stylus-mixins/blob/master/test/tests/units/percentage.styl)
