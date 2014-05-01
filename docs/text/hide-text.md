# Hide Text

```css
hide-text()
```

Visually hides text using text indent. Commonly used when background images should appear instead of text content.

This will visually only take effect if used on a block level element, or when used with `display: block` or similar.

---

**Example**
```css
.element
  hide-text()

/* CSS */
.element {
  overflow: hidden;
  text-indent: 110%;
  white-space: nowrap;
}
```

---

[Source](https://github.com/jackbrewer/stylus-mixins/blob/master/lib/stylus-mixins/text/hide-text.styl) - [Tests](https://github.com/jackbrewer/stylus-mixins/blob/master/test/tests/text/hide-text.styl)
