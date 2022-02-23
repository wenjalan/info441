# Lecture 10 - Sessions
HTTP requests have no context of other HTTP requests. So in order to keep track of state between requests, there are two main ways.

* Send all state information with the requests
* Use a Session with a key or token of some sort, linked to some state on the server

Tokens themselves:
* Are uninformative
* Are fast to verify
* Are revocable
* Expire eventually
* Are safe to lose

> Redis is a database that stores session tokens, look into it

On the client side, session info or token info can be saved in the browser's cookies or authorization headers/local storage. On the server side, they can be saved as a local variable, but that isn't scalable. Therefore, a session store.

To get started, install express-session:
```
$ npm install express-session
``` 

To create a session, use `sessions` from `express-sessions` as middleware.
```js
import sessions from 'express-session';

const app = express();

// after cookies
app.use(cookieParser());
...

// sessions takes an object with options
const oneDay = 1000 * 60 * 60 * 24; // in ms
app.use(sessions({
    secret: "someSecretGoesHere", // a secret key to encrypt with
    saveUninitialized: true, // ????
    // save the cookies in browser for at most one day
    cookie: {
        maxAge: oneDay,
    },
    resave: false
}));

app.get('/login', (req, res) => {
    // get session from request
    const session = req.session;
    
    // save whatever you want to session
    session.someUsername = 'echeng23';
    session.somePassword = 'valIsLove';

    // if you want to destroy a session, use destroy()
    if (passwordIsInvalid(session.somePasswor)) {
        session.destroy();
    }
});
```