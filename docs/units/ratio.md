# Ratio

```css
ratio($numerator, $denominator)
```

Returns a decimal ratio between two passed numbers.

```css
@param $numerator
  type: number
```
* How many multiples of the denominator are required.

```css
@param $denominator
  type: number
```
* The number of parts into which one whole is divided.

---

**Example**
```css
.element
  top ratio(1, 2) // 1/2 = 0.5

/* CSS */
.element {
  top: 0.5;
}
```

---

[Source](https://github.com/jackbrewer/stylus-mixins/blob/master/lib/stylus-mixins/units/ratio.styl) - [Tests](https://github.com/jackbrewer/stylus-mixins/blob/master/test/tests/units/ratio.styl)
