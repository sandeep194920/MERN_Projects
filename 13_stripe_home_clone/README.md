# Project details

## Details

We will design stripe home page mainly we will focus on navbar where we have a nice drop-down for each nav link

## Things we can learn

- How to download and install a font to your mac
- How to add `Gradient animation background`
- How to make a flex-box child to have nowrap effect?

---

### How to download and install a font to your mac

I inspected stripe and saw they are using `Sohne-war`. I downloaded that fonts through some website and it downloaded a zip. I unzipped it and had `.otf` files.

I navigated to `sandeepamaranth/Library/Fonts` and pasted these `.otf` files in there.

You should then see these fonts in font book on mac. To access font book, `cmd+space` and search for Font Book, and you will see the font here.

### How to add `Gradient animation background`

I initially used [Code Sandbox Example](https://codesandbox.io/s/canvas-gradient-forked-yit2qt?file=/src/CanvasGradient.js) to generate animated gradient background,

but then I found another closely matching gradient generator so I used [this](https://codesandbox.io/s/bxnsx?file=/src/App.js:0-617)

### How to make a flex-box child to have nowrap effect?

[Codepen example](https://codepen.io/sandeepamarnath/pen/eYKMmgL)

![Flex-Shrink-Explain](./readmeImages/flex-shrink.png)

<!-- FLEX PARENT -->

```css
/* Header container */
.header-container {
  display: flex;
  margin-left: 20%;
  /* never use justify content when u are wrapping something if your child wants to have nowrap prop*/
  /* justify-content: center; */
}
```

<!-- FLEX CHILD 2 on which we are applying flex-shrink -->

```css
/* Image  container -  iphone and stripe images  */
.img-container {
  padding-left: 6rem;
  flex-shrink: 0;
  margin-top: 3rem;

  /* flex-sshrink makes image not to move to left and doesn't wrap it. we are applying it on child and parent is header-container */

  /* when using this prop flex-shrink on child, never use justify-content on parent. If u do, then flex-shrink won't work  */
}
```
