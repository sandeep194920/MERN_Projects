# Project details

// DELETE THIS
where to get free-logo, css only, svg-logo, animation effect

## Details

This project is about designing responsive navbar. We will see how the navbar will hide itself and becomes a vertical display on small screen.

## Things we can learn

- How to hide and show the navbar on small screen with animation effect
- Problem with using fixed height, where useRef comes into picture in this case

---

### How to hide and show the navbar on small screen with animation effect

![smooth-animation](./readmeImages/smooth-animation.png)

When this button is clicked smooth animation happens. For this to happen, we as usual, set the state and based on that state, we show or hide this (apply css). But for this animation to happen, we can't use `display:none` as the animation won't be applied on display prop. But we can do it with `height` prop set on parent. `transition` which is responsible for animation can be applied on `height` and not on `display`.

These are the main classes on which we apply common styles

```css
.small-screen-nav-hidden {
  /* bg will be removed here. just to demo parent and child, we have it here */
  background-color: rgb(7, 198, 84);
  overflow: hidden;
  transition: height 0.5s; /* transition for smooth effect*/
}
```

Note that we need `overflow:hidden` on parent so that the child will automatically content (however large) will be visible until parent's height

**to show this parent div**

```css
/* div container - parent - show*/
.small-screen-nav-shown {
  /* We won't use display none but we will use height 0 */
  height: 10rem;
}
```

**to hide this parent div**

```css
/* div container - parent - hide*/
.small-screen-nav-hidden {
  /* We won't use display none but we will use height 0 */
  height: 0;
}
```

This parent div will have the child container which is ul and that ul will have all links.

```css
/* div container - child */
.small-screen-nav-hidden ul,
.small-screen-nav-shown ul {
  /* we will remove width - this is just to demo parent div and child ul. If this is removed, parent div will not be visible which is green color */
  width: 80%;
  padding-left: 2rem;
  list-style: none;
  /*  overflow: hidden; should be present - the max height of container is shown until the items are present. Content is only shown unitl height of this or parent container  */
  overflow: hidden;
  background-color: var(--navbar-clr);
  /* bg will be removed here. just to demo parent and child, we have it here */
  background-color: rgb(85, 7, 163);
}
```

Finally, it looks like this

![smooth-animation](./readmeImages/withoutUseRef.png)

---

### Problem with using fixed height, where useRef comes into picture in this case

![smooth-animation](./readmeImages/diagram.png)
