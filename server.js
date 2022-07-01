const express = require("express");
const path = require('path');
const fs = require("fs");
const app = express();
const db = require("./db/db.json");
const PORT = 3001;
const { dbdata } = require("./db/db.json");

app.use(express.static("public"));

app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/notes.html"));
  });

app.get("/api/notes", (req, res) => {
  res.json(db);
});

app.post("/api/notes", (req, res) => {
    console.log(res.json(req.body));
    }
);

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/index.html"));
});

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
});

// The application should have a db.json file on the back end
// that will be used to store and retrieve notes using the fs module.

// The following HTML routes should be created:

// The following API routes should be created:

// POST /api/notes should receive a new note to save on the request body,
// add it to the db.json file, and then return the new note to the client.
// You'll need to find a way to give each note a unique id when it's saved
// (look into npm packages that could do this for you).