import { Router } from "express";
const router: Router = Router();

import register from "./register";
router.use("/", register);

import login from "./login";
router.use("/", login);

import me from "./me";
router.use("/", me);

import github from "./third-party/github";
router.use("/", github);

import google from "./third-party/google";
router.use("/", google);

import sendVerifyEmail from "./send-verify-email";
router.use("/", sendVerifyEmail);

import verifyEmail from "./verify-email";
router.use("/", verifyEmail);

export default router;
