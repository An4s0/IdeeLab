import { Router, Request, Response } from "express";
const router: Router = Router();

import { ApiResponse } from "@/types";
import UserSchema from "@/models/user";

router.post('/register', async (req, res) => {
    try {
        const { name, username, email, password } = req.body;
        if (!name || !username || !email || !password) {
            res.status(400).json({
                success: false,
                message: "Please fill all the fields"
            } as ApiResponse);
            return;
        }

        if(name.length < 3 && name.length > 20) {
            res.status(400).json({
                success: false,
                message: "Name must be between 3 and 20 characters long"
            } as ApiResponse);
            return;
        }
        if(username.length < 3 && username.length > 20) {
            res.status(400).json({
                success: false,
                message: "Username must be between 3 and 20 characters long"
            } as ApiResponse);
            return;
        }
        if(!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
            res.status(400).json({
                success: false,
                message: "Email is not valid"
            } as ApiResponse);
            return;
        }
                if(password.length < 8 && password.length > 30) {
            res.status(400).json({
                success: false,
                message: "Password must be between 8 and 30 characters long"
            } as ApiResponse);
            return;
        }
        if(password.includes(" ")) {
            res.status(400).json({
                success: false,
                message: "Password must not contain spaces"
            } as ApiResponse);
            return;
        }
        if(!password.match(/[a-z]/)) {
            res.status(400).json({
                success: false,
                message: "Password must contain at least one lowercase letter"
            } as ApiResponse);
            return;
        }
        if(!password.match(/[A-Z]/)) {
            res.status(400).json({
                success: false,
                message: "Password must contain at least one uppercase letter"
            } as ApiResponse);
            return;
        }
        if(!password.match(/[0-9]/)) {
            res.status(400).json({
                success: false,
                message: "Password must contain at least one number"
            } as ApiResponse);
            return;
        }
        if(!password.match(/[^a-zA-Z0-9]/)) {
            res.status(400).json({
                success: false,
                message: "Password must contain at least one special character"
            } as ApiResponse);
            return;
        }

        



    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal server error",
        } as ApiResponse);
    }
});


export default router;