import { Router } from "express";
const router: Router = Router();

import user from "./user";

router.get("/", (req, res) => {
  res.send("Welcome to the IdeeLab API!");
});

router.use("/auth", user);

export default router;
