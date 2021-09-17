import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

//importing mongoose models with schemas
import User from "./models/UserModel.js";

const app = express();

// Middleware
dotenv.config();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT;
const MONGODB_URI = process.env.MONGODB_URI;

// Connecting DB
mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((response) => {
    console.log(`Connected to MongoDB!`);
    // Starting server
    app.listen(PORT, () =>
      console.log(`Server is running on port ${PORT} and ready to work!`)
    );
  });

//! Routes

//! GET:
// GET: checking if it works
app.get("/", (req, res) => res.send("API is running..."));

// GET: all users
app.get("/api/users", async (req, res) => {
  let users = await User.find({});

  res.json(users);
});

// GET: get single user based on id
app.get("/api/users/:id", async (req, res) => {
  let userId = req.params.id;

  let user = await User.findById(userId);

  res.json(user);
});

//!POST
// POST: add single user to collection
app.post("/api/users", async (req, res) => {
  let userData = req.body;

  //*I could use  const newUser = new User({}) and .save(newUser), but I prefer to use insertMany, in this case performance difference is negligible.

  //validation

  if (userData.name && +userData.age && userData.email && userData.password) {
    let user = await User.insertMany(userData);

    res.json(user);
  } else {
    res.status(400).send({ error: "Wrong data submitted, check it." });
  }
});

//!PUT (Update)
// PUT: updates single user based on id
app.put("/api/users/:id", async (req, res) => {
  let userId = req.params.id;
  let userData = req.body;

  if (userData.name && +userData.age && userData.email && userData.password) {
    let user = await User.findByIdAndUpdate(userId, userData);

    res.json(user);
  } else {
    res.status(400).send({ error: "Wrong data submitted, check it." });
  }
});

//!DELETE
// DELETE: removes single user based on id from collection
app.delete("/api/users/:id", async (req, res) => {
  let userId = req.params.id;

  let user = await User.findByIdAndDelete(userId);

  res.json(user);
});
