# Internet Explorer

```css
ie($version, [$strict])
```

Allows conditional IE styles to be written inline with the main Stylus. Adds the conditional styles specifically to IE stylesheets based on target version number.
To work as expected, any IE specific stylesheets will need to contain modified versions of the default variables.

```css
@param $version
  type: number (positive, unitless)
```
* Version of Internet Explorer that styles are intended for

```css
@param $strict
  type: boolean
  default: false
```
* By default, targets the specified version *and below*. Set to `true` to target the specified version only.


### Default Variables
```css
* $is-ie--version ?= 0 // Set the maximum version of IE which this stylesheet will be loaded for.
* $is-ie ?= false // Set to true to indicate the current stylesheet is intended for IE.
```

---

**Example: IE8 and below**:
Styles would output in any stylesheets indicated as being for IE8 or below
```css
+ie(8)
  .element
    background-color #000

/* CSS */
.element {
  background-color #000
}
```

**Example: IE7 only**:
Styles would only output in a stylesheet specifically indicated as being for IE7
```css
+ie(7, true)
  .element
    background-color #000

/* CSS */
.element {
  background-color #000
}
```

---

[Source](https://github.com/jackbrewer/stylus-mixins/blob/master/lib/stylus-mixins/ie.styl) - [Tests](https://github.com/jackbrewer/stylus-mixins/blob/master/test/tests/ie.styl)
