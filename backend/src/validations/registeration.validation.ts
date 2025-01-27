import { object, Schema, string } from "zod";

export const registerUserSchema = object({
  body: object({
    email: string().email("Invalid Email"),
    password: string().min(3, "Name is required"),
  }),
});
 
 