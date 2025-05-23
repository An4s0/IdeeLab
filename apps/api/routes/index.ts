import { Router } from "express";

const router: Router = Router();

// Import all routes
import user from "./user";
router.use("/user", user);

export default router;
