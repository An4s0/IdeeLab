import { Router } from "express";

const router: Router = Router();

// Import all routes
import user from "./user";
router.use("/user", user);

import idea from "./idea";
router.use("/idea", idea);

export default router;
