# HiDPI

```css
hidpi([$ratio])
```

Allows styles to be passed to a media query for devices with HiDPI displays.

```css
@param $ratio
  type: number (positive, unitless)
  default: 1.3
```
* An optional custom pixel ratio, which defaults to the Nexus 7 pixel ratio of 1.3.

---

**Example**
```css
+hidpi(2)
  .element
    background-image url('image@2x.png')

/* CSS */
@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
  .element {
    background-image: url('image@2x.png');
  }
}
```

Further reading: [Brett Jankord – Cross Browser Retina/High Resolution Media Queries](http://www.brettjankord.com/2012/11/28/cross-browser-retinahigh-resolution-media-queries/)

---

[Source](https://github.com/jackbrewer/stylus-mixins/blob/master/lib/stylus-mixins/media/hidpi.styl) - [Tests](https://github.com/jackbrewer/stylus-mixins/blob/master/test/tests/media/hidpi.styl)

