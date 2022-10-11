const express = require("express");
const cors = require("cors");
const userRouter = require("./user/user.router");
const postRouter = require("./articles/articles.router");

const app = express();

app.use(express.json());
app.use(cors());

app.use("/user", userRouter);
app.use("/posts", postRouter);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(8080, () => {
  console.log("server started at http://localhost:8080");
});
