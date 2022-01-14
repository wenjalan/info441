# Lecture 2
## 2.1 - Review
Review. See notes from [Lecture 1](../lecture1.md).

## 2.2 - The File System
To read and write files on local storage, the `fs` library included in NodeJS can be used. It includes both asynchronous and synchronous options.

```js
const fs = require('fs');

// reads an html file
const htmlFile = fs.readFileSync('index.html'); 

// reads a css file
const cssFile = fs.readFileSync('style.css'); 
```

> Kyle hints that fs might've been recently been included in the default libraries of NodeJS.

Once you have an html file, you can send the file back in a response.

```js
app.get('/', (req, res) => {
    const html = fs.readFileSync('index.html');
    res.send(html);
});
```

## 2.3 - AJAX
AJAX is short for Asynchronous JavaScript and XML. XML is  an older data format that isn't really used any more but let's move beyond that. Back in ancient times (like 2005) most code was blocking or synchronous, which meant every time the user interacted with a page, they would wait for the server to regenerate the page.

## 2.4 - Async and Await
In JavaScript, an async function is a function that won't necessarily finish right away. All async functions return Promises. To define an async function, use the `async` keyword.

```js
async function someAsyncFunction() {
    // async stuff!
}
```

To get a result of an async function, use the `await` keyword.

```js
const result = await someAsyncFunction();
```

In the event that an async function encounters an error, you can use a try-catch statement to handle the error.

```js
try {
    const result = await someAsyncFunction();
} catch (err) {
    console.log(err);
}
```

The await keyword can only be used within an async function. Therefore, the following pattern is very common:

```js
async function someAsyncFunction() {
    // stuff
}

async function runAsyncFunction() {
    const result = await someAsyncFunction();
}
runAsyncFunction();
```

## 2.5 - Fetch
### Aside: Importing with import statements
In NodeJS, some libraries are only available with the `import` statement. For these cases, in `package.json`, set `"type"` to `"module"`.

### Fetch
The `fetch` function takes a URL and returns a `Promise`.

```js
import fetch from 'fetch';

async function someAsyncFunction() {
    const response = await fetch('/api/someData');
    const data = await response.json(); // .text() too
}
```

## 2.6 - Query Parameters
Query Paramters are added to the end of a URL to provide extra information to the server request. In Express, you can access the Query Parameters of a request in the `query` property of a `Request`.

```js
app.get('/api/', (req, res) => {
    const someParam = req.query.someParam;
    const someOtherParam = req.query.someOtherParam;
});
```


