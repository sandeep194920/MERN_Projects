# Project details

- This project is about Accordion questions. Generally you will see this on a website in FAQs section

## What you will learn?

1. What is MUI's CSSBaseline?
2. sx vs style prop. On our components we can use both sx and style prop. Then what's the difference between these two

#### CSSBaseline

- CSSBaseline is a css preset. It's as good as writing defaults like this in index.css

```css
*,
::after,
::before{
    margin:0,
    padding:0,
    box-sizing:border-box
    /* And many more defaults */
}
```

If we include CSSBaseline in our App component, it provides all these defaults out of the box.

- CSSBaseline is a utility provided by MUI where you need `@mui/System` installed for this to work

#### sx vs style

While using style, we cannot make use of the properties provided by MUI. For example, if we need to write media queries for different breakpoints then

- in sx prop, we can use `[theme.breakpoints.up('md')] : {}`
- but in style prop, this doesn't work

[Refer my Stackoverflow Answer for sx vs style](https://stackoverflow.com/a/73768249/10824697)
