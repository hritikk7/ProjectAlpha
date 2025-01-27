import { Request, Response, NextFunction } from "express";
import { ZodSchema } from "zod";


export const validate = (schema : ZodSchema) => (req: Request, res:Response, next:NextFunction)=>{
  try{
    schema.parse(req.body)
    next()
  }catch(err){
    return res.status(400).json({
      "message" : "Validation Error",
      "stack" : err.err
    })
  }
}