# Column Span Width

```css
col-span-width($col-span, [$col-total], [$col-gutter], [$max-width])
```

Returns the width of a specified column span, based on a column total, column gutter and max-width. The same unit type should be used for the column gutter and max-width, as that is what the returned width will use.

```css
@param $col-span
  type: number (positive, unitless)
```
* The number of columns required for the intended width

```css
@param $col-total
  type: number (positive, unitless)
  default: 12
```
* The total number of columns in the layout

```css
@param $col-gutter
  type: unit (length)
  default: 20px
```
* The gutter size used to separate columns in the layout

```css
@param $max-width
  type: unit (length)
  default: 1180px
```
* The overall max-width of the layout


### Default Variables

```css
$base--col-total ?= 12
$grid--gutter ?= 20px
$base--max-width ?= 1180px
```
* Default values are provided for column total, column gutter and max-width making them optional.
* Use these variables within a project to set custom values.

---

**Example – single value**
```css
.element
  max-width col-span-width(4)

/* CSS */
.element {
  max-width: 380px;
}
```

**Example - custom column total**
```css
.element
  max-width col-span-width(4, 16)

/* CSS */
.element {
  max-width: 280px;
}
```

**Example - custom column total, column gutter and max-width**

```css
.element
  width col-span-width(5, 10, 2rem, 80rem)

/* CSS */
.element {
  width: 39rem;
}
```

---

[Source](https://github.com/jackbrewer/stylus-mixins/blob/master/lib/stylus-mixins/helpers/col-span-width.styl) - [Tests](https://github.com/jackbrewer/stylus-mixins/blob/master/test/tests/helpers/col-span-width.styl)
