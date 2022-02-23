# Lecture 12 - User Actions
## Deployment Strategies
In the real world, there are usually several environments where your application runs. This includes development, staging, and production branches, databases, etc.

* Development is where changes are made
* Staging is where testing occurs
* Prod is where it is published

Continuous integration is a system used to ensure changes are made that can be pushed to staging. This includes

* On every commit, compile source code and run tests
* If there as an error, mark commit as broken and email team
* Possibly block commit from being pulled

## Project Deployment Suggestions
* Always have an MVP working and published under prod
* Use separate databases for prod and test

## Adding and Removing Users with Auth
```js
const newUser = new req.db.User({
    username: username,
    favorite_bands: []
});
let response = await newUser.save();
res.json({status: "success"});
```