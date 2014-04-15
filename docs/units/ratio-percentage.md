# Ratio Percentage

```css
ratio-percentage($numerator, $denominator)
```

Returns a percentage, based on a ratio between two passed numbers.

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
  width ratio-percentage(1, 2) // 1/2 = 0.5 = 50%

/* CSS */
.element {
  width: 50%;
}
```

A common use would be for responsive images and embeds, [without causing reflow](http://andmag.se/2012/10/responsive-images-how-to-prevent-reflow/). To work out the `padding-bottom` required for a 16:9 widescreen video embed, you could use:

```css
.element
  height 0
  padding-bottom ratio-percentage(9, 16) // 9/16 = 0.5625 = 56.25%
/* CSS */
.element {
  height: 0;
  padding-bottom: 56.25%;
}
```

---

[Source](https://github.com/jackbrewer/stylus-mixins/blob/master/lib/stylus-mixins/units/ratio-percentage.styl) - [Tests](https://github.com/jackbrewer/stylus-mixins/blob/master/test/tests/units/ratio-percentage.styl)
