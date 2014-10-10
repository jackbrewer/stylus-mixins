# Rem

```css
rem($px)
```

Returns an rem value, based on a passed pixel value. IE8 and earlier get a pixel value instead.

```css
$base--font-size ?= 16px
```
* Sets a base font size, used for calculating rem values. Default value is provided.
* Use this variable within a project to set a custom value.

```css
@param $px
  type: unit (pixel)
```
* A pixel value passed to this mixin will be converted to an em value.

---

**Example**
```css
.element
  font-size rem(32) // 32/16 = 2

/* CSS */
.element {
  font-size: 2em;
}
```

**Example - IE8 and earlier**
```css
.element
  font-size rem(32)

/* CSS */
.element {
  font-size: 32px;
}
```

---

[Source](https://github.com/jackbrewer/stylus-mixins/blob/master/lib/stylus-mixins/units/rem.styl) - [Tests](https://github.com/jackbrewer/stylus-mixins/blob/master/test/tests/units/rem.styl)
