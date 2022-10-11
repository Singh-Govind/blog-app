const express = require("express");
const cors = require("cors");
const dbConnect = require("./config/dbConnect");
const userRouter = require("./user/user.router");
const postRouter = require("./articles/articles.router");

const app = express();

app.use(express.json());
app.use(cors());

app.use("/users", userRouter);
app.use("/posts", postRouter);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(8080, async () => {
  try {
    await dbConnect();
    console.log("server started at http://localhost:8080");
  } catch (e) {
    console.log("failed", e.message);
  }
});
