# Ellipsis

```css
ellipsis([$nowrap])
```

Adds an ellipsis to overflowing text.

```css
@param $nowrap
  type: boolean
  default: true
```
* Adds `white-space: nowrap` by default. Set to false to disable.

---

**Example**
```css
.element
  ellipsis()

/* CSS */
.element {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
```

---

[Source](https://github.com/jackbrewer/stylus-mixins/blob/master/lib/stylus-mixins/text/ellipsis.styl) - [Tests](https://github.com/jackbrewer/stylus-mixins/blob/master/test/tests/text/ellipsis.styl)
