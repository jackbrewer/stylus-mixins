# Hide Text

```css
hide-text()
```

Visually hides text using text indent. Commonly used when background images should appear instead of text content.

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

[Source](https://github.com/jackbrewer/stylus-mixins/blob/master/lib/stylus-mixins/media/hide-text.styl) - [Tests](https://github.com/jackbrewer/stylus-mixins/blob/master/test/tests/media/hide-text.styl)
