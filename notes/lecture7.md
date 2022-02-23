# Lecture 7 - Middleware and SQL Injection
## 7.1 - Middleware
Middleware refers to functions that run during each request. They modify the request, the response, or log an item. The default express project contains a few of these.

```js
const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
...
```
To define a new middlware function, pass a function into `app.use()`.

```js
app.use((req, res, next) => {
    // modify req res or something else
    req.someValue = "hello this is a message";
    // calls the next function, middleware or handler
    // middleware handlers are executed in order of insertion
    next();
});

app.use((req, res, next) => {
    // someValue is found in req
    console.log(req.someValue);
    next();
})
```

## 7.2 - Sharing Database Connections With Middleware
Middleware is commonly used to establish and share database connections. There are several ways to do this, this is one of them.

```js

// db will store schemas and models for the database
import db from './someDbFile.js';

const app = express();

// append db to the request to allow all routers to access db connection
app.use((req, res, next) => {
    req.db = db;
    next();
});
```

## 7.3 - SQLite
SQLite is the easiest database solution. It doesn't require another server and can run as a library.

```js
import sqlite3 from 'sqlite3';
const sqlite3v = sqlite3.verbose();

// initialize db
let db = new sqlite3v.Database(':memory:', (err) => {
    if (err) console.err(err.message);
    else console.log('Connected to SQLite Database');
});

// initialize tables
db.serialize(() => {
    // run queries in the run function
    // run can be chained
    db.run('CREATE TABLE people(first_name text, last_name text')
    .run(`
    INSERT INTO people(first_name, last_name) 
    VALUES("Kyle", "Thayer"),
          ("James", "Wendell")
    `);
    .run(`
    CREATE TABLE secret_table(messages text)
    `)
    ...
});

// returns elements from the database
let query = "James";

db.all(`SELECT * FROM people WHERE first_name = ${query}`, (err, rows) => {
    if (err) {
        console.err(err);
    }
    else {
        const names = rows.map((row) => `${row.first_name} ${row.last_name}`);
        res.send(names);
    }
});
```

## 7.4 - SQL Injection Attacks
When you use Strings as SQL queries, users can potentially inject their own SQL code into your program.
