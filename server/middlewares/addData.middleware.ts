import { NextFunction, Request, Response } from "express";

export const addDataMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const { name, email } = req.body;

  if(!name || !email) {
    res.status(204).json({
      "message": "Please enter data correctly !!"
    })
  }else{
    next();
  }
}