import { Router } from "express";

const userRouter = Router();

userRouter.get("/users", (req, res) => {
  res.send("hello userssssss");
});

export default userRouter;
