# Lecture 4 - Deployment
## 4.1 - Special Tricks in NodeJS
NodeJS has a few specific code things you can do to make your life easier. Here are a few.

### String Formatting and Template Strings
Traditionally, we used string concantenation.
```js
let someString = "this is some heading";
let html = "<h1>" + someString + "</h1>";
```
We can use backticks to make templates instead. Line returns are preserved.
```js
let html2 = `
<body>
    <main>
        <h1>${someString}</h1>
    </main>
</body>
`;
```

### Ternary Operators
JavaScript supports ternary operators.
```js
let description = undefined;

// description is rendered inside the h1 tag if it's defined, and if not, an empty string is rendered
let heading = `<h1>${description ? description : ""}</h1>`;

// you can also give it a function
const complexHeader = (headerString) => {
    return <strong>${headerString}</strong>;
}
let complexHeading = `<h1>${description ? complexHeader(description) : ""}</h1>`;
```

### Iterators
JavaScript has their own iterator structures too.

```js
// an array of strings with some useful data we need
let arr = [
    "first name : Kyle",
    "last name : Thayer",
    "age : 38",
    "glasses : yes"
];

// a for each
let values = {};
arr.forEach(string => {
    let splitItem = item.split(" : ");
    values[splitItem[0]] = splitItem[1];
})

// a map
// in each element, replace the : with a =
let newArr = arr.map(item => {
    return item.replace(":", "=");
});

// a filter
let filtered = arr.filter(item => {
    return item.includes("name");
});
```

### Start Scripts
In `package.json`, you can define custom scripts under the scripts tag. A common one is to define `start` as `node app.js` to use `npm start` to run the app.

```json
{
    ...
    "scripts": {
        "start": "node app.js",
        ...
    },
    ...
}
```

### Express Starter
Kyle made a template repo in the 441 files. It is a standard express template server converted to a module.
