import { Router } from "express";
const router: Router = Router();

import register from "./register";

router.use("/", register);

export default router;