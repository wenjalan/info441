# Lecture 6 - MongoDB and Mongoose
## Databases
Once we can send data to and from a client and a server, we need to send data between a server and a database to make things work faster. Object relational model are libraries for working with databases. One such ORM is Mongoose, which allows us to interface with MongoDB. Set up MongoDB Atlas and optionally MongoDB Compass for debugging. Once you have that, you can interact with your database using the Mongoose library.

```
$ npm install mongoose
```

```js
import mongoose from 'mongoose';

// replace this with your connection string
const uri = "mongodb://localhost:27017/info_upload";


// connects to a given uri
const start = async (uri) => {
    mongoose.connect(uri);
    console.log(`Connected to ${uri}`);

    // define a new Schema to put in the database
    const userSchema = new mongoose.Schema({
        first_name: String,
        last_name: String,
        favorite_ice_cream: String
    });

    // create a User model to house the schema
    const User = mongoose.model("User", userSchema);    

    // save a new User to the database
    const someUser = new User({
        first_name: "James",
        last_name: "Wendell",
        favorite_ice_cream: "Grape"
    });
    await someUser.save();
    
}

start(uri);
```