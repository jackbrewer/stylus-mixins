# Font Face

```css
font-face($font-name, $file-path, [$weight], [$style])
```

Output a @font-face declaration by passing a font name and file path. Uses the ['Bulletproof Syntax'](http://www.fontspring.com/blog/further-hardening-of-the-bulletproof-syntax).

```css
@param $font-name
  type: string
```
* The name of the font, as you would access it a `font-family` declaration.

```css
@param $file-path
  type: string
```
* A path to your font files.
* Should include the file name as part of the string, but without any file extension.
* Relies on all file names being identical, other than extensions.

```css
@param $weight
  type: string
  default: 'normal'
```
* Optionally pass a `font-weight` value.

```css
@param $style
  type: string
  default: 'normal'
```
* Optionally pass a `font-style` value.

---

**Example**
```css
font-face('FontName', '/fonts/font-name', 'bold', 'italic')

/* CSS */
@font-face {
  font-family: "FontName";
  src: url("/fonts/font-name.eot");
  src: url("/fonts/font-name.eot?#iefix") format("embedded-opentype"),
       url("/fonts/font-name.woff") format("woff"),
       url("/fonts/font-name.ttf") format("truetype"),
       url("/fonts/font-name.svg#svgFontName") format("svg");
  font-weight: bold;
  font-style: italic;
}
```

---

[Source](https://github.com/jackbrewer/stylus-mixins/blob/master/lib/stylus-mixins/media/font-face.styl) - [Tests](https://github.com/jackbrewer/stylus-mixins/blob/master/test/tests/media/font-face.styl)
