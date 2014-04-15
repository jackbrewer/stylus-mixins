# Clearfix

```css
clearfix()
```

Outputs a [micro clearfix hack](http://nicolasgallagher.com/micro-clearfix-hack/) on a parent element, to contain floated children elements without adding extra markup.

---

**Example**
```css
.element
  clearfix()

/* CSS */
.element {
  zoom: 1; /* Appears for IE7 Only */
}
.element:after,
.element:before {
  content: "";
  display: table;
}
.element:after {
  clear: both;
}
```

---

[Source](https://github.com/jackbrewer/stylus-mixins/blob/master/lib/stylus-mixins/clearfix.styl) - [Tests](https://github.com/jackbrewer/stylus-mixins/blob/master/test/tests/clearfix.styl)
