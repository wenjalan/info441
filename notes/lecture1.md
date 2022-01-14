# Lecture 1
## 1.1 - Intro to Course
Basic class information.

## 1.2 - Teachers and Logistics
Basic class information.

## 1.3 - VSCode and NodeJS
Basic setup.

## 1.4 - Node Projects and Simple Server
For any NodeJS project, open a folder and run the command `npm init` in it to create a `package.json`.

> The package.json file keeps track of dependencies, tests, and various other information about the project.

When including libraries in NodeJS, use the `require` statement.

```js
const mongoose = require('mongoose');
var _ = require('lodash');
```

To install libraries, use the `npm install` command. This will create a `package-lock.json` file which keeps track of the versions of the libraries installed.

> Libraries in the NodeJS environment are infamous for being dependent on several other libraries, into infinitum.

In this class, we'll be using **express.js** to write servers. First, install express using the following command:
```
npm install express
```

Then write the following code in a file:

```js
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(3000, () => {
    console.log('Example app is listening at http://localhost:3000');
});
```

To run the code, use the following command:

```
node app.js
```

You can now visit your server at `http://localhost:3000`. Press `Ctrl + C` to stop a program.

## 1.5 - Details on Simple Serers
### URLS
The address of a webpage is its URL. There are several parts to a URL, separated by forward slashes and dots.

An example:

```
https://www.amazon.com/Douglas-Husky-Plush-Stuffed-Animal/dp/B08XZRR4LT/?keywords=stuffed+husky
```
* Scheme: `https`
* Subdomain: `www`
* Domain: `amazon.com`
* Route: `Douglas-Husky-Plush-Stuffed-Animal/dp/B08XZRR4LT`
* Query Parameters: `?keywords=stuffed+husky`

Sometimes a port will follow the domain, such as `http://localhost:3000/`.

### Routing
In express, app.get() handles traffic sent to particular routes. There's also a * wildcard.

* `app.get('/')` will get traffic sent to `'/'`
* `app.get('/style.css')` will get traffic sent to `'/style.css'`
* `app.get('hello*')` will get `/helloworld` `/hellouser` and anything that starts with `/hello...`
* `app.get('*')` will get all traffic

### Content-Type
There are various ways to respond too, including plaintext, html, css, and even JavaScript.

```js
res.type('txt');
res.set('content-type', 'text/plain'); // same as above
```

For a full list, check [this list](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types) on Mozilla.

## 1.6 - Simple Server Demo
