import { Router } from "express";

const router: Router = Router();

import create from "./create";
router.use("/", create);

import get from "./get";
router.use("/", get);

export default router;
