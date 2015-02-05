# Rem

```css
rem($px)
```

Returns a rem value, based on a passed pixel value. IE8 and earlier get a pixel value instead.

```css
rem($px $px $px $px)
```

As shown above, multiple pixel values can be passed to the mixin.

```css
$base--font-size ?= 16px
```
* Sets a base font size, used for calculating rem values. Default value is provided.
* Use this variable within a project to set a custom value.

```css
@param $px
  type: unit (pixel)
```
* A pixel value passed to this mixin will be converted to a rem value.

---

**Example**
```css
.element
  width rem(16 32) // 16/16 = 1, 32/16 = 2

/* CSS */
.element {
  width: 1rem 2em;
}
```

**Example - IE8 and earlier**

```css
.element
  width rem(16 32)

/* CSS */
.element {
  width: 16px 32px;
}
```

---

[Source](https://github.com/jackbrewer/stylus-mixins/blob/master/lib/stylus-mixins/units/rem.styl) - [Tests](https://github.com/jackbrewer/stylus-mixins/blob/master/test/tests/units/rem.styl)
