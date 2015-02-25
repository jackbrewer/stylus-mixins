# Rem

```css
rem($px, [$base])
```

Returns a rem value, based on a passed pixel value with an optional base font-size. IE8 and earlier get a pixel value instead.

```css
rem($px $px $px $px, [$base])
```

Multiple pixel values can be passed to the mixin.

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

```css
@param $base
  type: unit (pixel)
  default: $base--font-size
```
* Custom base values can be used if required to override the default base font-size.

---

**Example – single value**
```css
.element
  font-size rem(32) // 32/16 = 2

/* CSS */
.element {
  font-size: 2rem;
}
```

**Example - multiple values**

```css
.element
  margin rem(16 32) // 16/16 = 1, 32/16 = 2

/* CSS */
.element {
  margin: 1rem 2rem;
}
```

**Example - custom base font size**

```css
.element
  margin rem(16 32, 32) // 16/32 = 0.5, 32/32 = 1

/* CSS */
.element {
  margin: 0.5rem 1rem;
}
```

**Example - IE8 and earlier**

```css
.element
  margin rem(16 32)

/* CSS */
.element {
  margin: 16px 32px;
}
```

---

[Source](https://github.com/jackbrewer/stylus-mixins/blob/master/lib/stylus-mixins/units/rem.styl) - [Tests](https://github.com/jackbrewer/stylus-mixins/blob/master/test/tests/units/rem.styl)
