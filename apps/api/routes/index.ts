import { Router } from "express";
const router: Router = Router();

router.get("/", (req, res) => {
  res.send("Welcome to the IdeeLab API!");
});
import user from "./user";
router.use("/user", user);

import challenges from "./challenges";
router.use("/challenges", challenges);

import leaderboard from "./leaderboard";
router.use("/leaderboard", leaderboard);

export default router;
