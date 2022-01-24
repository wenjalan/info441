# Lecture 3
## 3.1 - Server Side Development Landscape
[Tiobe](https://tiobe.com) tracks the popularity of languages for given tasks. For server-side, Java, C#, JavaScript, PHP, Go, and Ruby are popular choices, with different langauges having different strengths, backing by companies, etc.

Google trends also allows you to do a similar thing with search terms. Try looking up the popularity of given languages over time and see where trends are going.

## 3.2 - Parsing HTML
### Packages
To parse html, there's a package called `node-html-parser` you can use.

```js
import parser from 'node-html-parser';
...
let htmlPage = parser.parse(someHtmlString);
```

To get webpages, we can use the `node-fetch` library. It allows us to use `fetch` in much the same way as in client side, but on servers.

### Accessibility
We're going to make sure certain websites are accessible. Accessible means accounting for a number of conditions, including vision, hearing, mobility, cognition, etc. There are a number of standards out there, but we're going to focus on finding alt text for images.

After installing and importing libraries, retrieve a webpage with `fetch`. Make sure to set `type` to `module`.

```js
import parser from 'node-html-parser';
import fetch from 'node-fetch';

let url = 'https://ischool.uw.edu';

// async outside async function works in node, not in browser
let response = await fetch(url); 
```

Once we have the html of the webpage, we can use the parser to find stuff.

```js
let htmlText = response.text();

// parse the page into an HTML Page object
let htmlPage = parser.parse(htmlText);

// use querySelector to find all img tags in the doc
let imgTags = htmlPage.querySelectorAll('img');

// for each tag
imgTags.forEach((img, i) => {
    // retrieve the attributes of the img
    let altText = img.attribute.alt;
    let src = imgTag.attribute.src;

    // log it
    console.log(`Image ${i} has alt text ${altText} for src ${src}`);
});
```

## 3.3 - Parsing HTML 2
Kyle creates an express server and corresponding webpage to serve responses from the above demo.

## 3.4 - Express Project Generator
So there's a package called `express-generator` that allows us to generate express projects for us. To install it globally, use the following.

```
$ npm install -g express-generator
```

In Windows, you may need to allow shell to perform this. If you encounter an error, try the following.

```
$ Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
```

To use the generator, use the `express` command.

```
$ express --no-view my-express-project
```


