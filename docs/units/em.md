# Em

```css
em($px, [$base])
```

Returns an em value, based on a passed pixel value.

```css
em($px $px $px $px, [$base])
```

As shown above, multiple pixel values can be passed to the mixin.

```css
$base--font-size ?= 16px
```
* Sets a base font size, used for calculating em values. Default value is provided.
* Use this variable within a project to set a custom value.

```css
@param $px
  type: unit (pixel)
```
* A pixel value passed to this mixin will be converted to an em value.

```css
@param $base
  type: unit (pixel)
  default: $base--font-size
```
* Custom base values can be used if required to override the default base font-size.

---

**Example**
```css
.element
  font-size em(32) // 32/16 = 2

/* CSS */
.element {
  font-size: 2em;
}
```

---

[Source](https://github.com/jackbrewer/stylus-mixins/blob/master/lib/stylus-mixins/units/em.styl) - [Tests](https://github.com/jackbrewer/stylus-mixins/blob/master/test/tests/units/em.styl)
