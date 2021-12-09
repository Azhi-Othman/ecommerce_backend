import express from "express";
import userRouter from "./src/routes/user.routes.js";
const app = express();

//set up routegf

app.use(userRouter);

app.listen(5000, () => {
  console.log("listing on http://localhost:5000");
});
