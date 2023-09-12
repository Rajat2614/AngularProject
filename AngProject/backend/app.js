const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*"); //
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});

app.get("/api/posts", (req, res, next) => {
  const post = [
    {
      id: "abso31",
      title: "First Title",
      content: "First Content",
    },
    {
      id: "ewfn35",
      title: "Second Title",
      content: "Second Content",
    },
    {
      id: "dsou98",
      title: "Third Title",
      content: "Third Content",
    },
  ];
  res.status(200).json({
    message: "Posts Fetched Successfully",
    posts: post,
  });
});

app.post("/api/posts", (req, res, next) => {
  const post = req.body;
  console.log(post);
  res.status(200).json({
    message: "Posts Added Successfully",
  });
});

module.exports = app;
