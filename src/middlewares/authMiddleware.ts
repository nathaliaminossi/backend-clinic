import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export function authMiddleware(req: Request, res: Response, next: NextFunction) {

    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({ message: "Token not provided" })
    }

    const token = authHeader.split("Bearer ")[1];

    jwt.verify(token, process.env.JWT_SECRET!, (err, decoded) => {
        if(err){
               return res.status(401).json({ message: "Invalid token" })
        }

     req.user = { id: (decoded as any).id }
      
      next();
    })
}
