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

## 4.2 - Deployment, In Theory
In the old days, we ran servers off our own computers. The computer had to be on all the time, and you had to use your own internet connection. You had full control over your website but also is completely unscalable.  

Next there were dedicated servers. These were servers thats only job was to run that program. You had to manage it, but someone else managed the internet connection. Sometimes the code works on your computer but not on the server. Also you paid for the server.  

Then there were virtual machines. Same server setup, but multiple programs shared a given computer, and resources were allocated depending on the demand of each program. Cheaper, but slower to load, and space is spend on duplicate operating systems. This is pretty much where we are today.

## 4.3 - Heroku
Heroku is a service that allows you to have a VM for free for a limited amount of time. The paid service allows you to run a machine forever and have a custom domain.

### Create Heroku App
Download the Heroku CLI, and initialize a new Heroku project inside of a Git repo with the command `heroku create`.

``` $ heroku create```

Heroku will prompt you to log in if you haven't. Make sure your project has a `start` script defined in `package.json`. Heroku will use the `npm start` command to run your app.

When running on Heroku, the port of your express server will need to be retrieved from the environment.

```js
// returns process.env.PORT if it is defined, or 3000
const PORT = process.env.PORT || 3000;
```

Push your app to Heroku using the following Git command.

``` $ git push heroku main ```

Alternatively:

``` $ git push heroku master ```

To find out what you ultimately messed up, use the command `heroku log` to find out your errors.