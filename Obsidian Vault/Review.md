Everything is a box in CSS and there are two types: block and inline boxes. 

Their type affects how they behave in regards to page flow and in relation to other boxes on the page.

Boxes have outer display type and inner display type (determines how elements inside the box are laid out)

Parts of a box: content, padding, margin, and border

CSS Box Model: Standard and Alternative

To use alternative box model, do this.

```
html {
  box-sizing: border-box;
}
*,
*::before,
*::after {
  box-sizing: inherit;
}
```




