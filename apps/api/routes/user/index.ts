import { Router } from "express";

const router: Router = Router();

import register from "./register";
router.use("/", register);

import login from "./login";
router.use("/", login);

import me from "./me";
router.use("/", me);

import github from "./auth/github";
router.use("/auth", github);

import google from "./auth/google";
router.use("/auth", google);

export default router;
