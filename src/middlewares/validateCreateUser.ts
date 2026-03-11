import { Request, Response, NextFunction } from "express";

export function validateCreateUser(req: Request, res: Response, next: NextFunction) {

    req.body.name = req.body.name?.trim();
    req.body.email = req.body.email?.trim();

    const { name, email, password } = req.body;

    if (!name) {
        return res.status(400).json({ message: "Name is required" })
    }

    if (!email) {
        return res.status(400).json({ message: "Email is required" })
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
        return res.status(400).json({ message: "Invalid email format" });
    }

    if (!password) {
        return res.status(400).json({ message: "Password is required" });
    }

    if (password.length < 12) {
        return res.status(400).json({ message: "Password must be at least 12 characters" });
    }

    next();
}