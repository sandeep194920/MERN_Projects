# Project details

[Text Generator](https://8-text-generator.netlify.app/)

- We are using copy to clip board funcionality to copy generated text

```js
const copyData = text.join('') // text is the array state value
navigator.clipboard.writeText(copyData)
```
