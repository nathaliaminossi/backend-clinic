import { Request, Response, NextFunction } from "express";

export function validateLogin(req: Request, res: Response, next: NextFunction) {
    req.body.email = req.body.email?.trim();

    const {email, password} = req.body;

    if (!email) {
          return res.status(400).json({ message: "Email is required" });
    }

     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
        return res.status(400).json({ message: "Invalid email format" });
    }

    if(!password) {
      return res.status(400).json({ message: "Password is required" });

    }

    if(password.length < 12) {
            return res.status(400).json({message: "Password must be at least 12 characters"})
    }

 next();
}

