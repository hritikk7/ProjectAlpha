import { z } from 'zod';

export const loginSchema = z.object({
  email : z.string().email("Invalid Email"),
  password : z.string().min(3, "Name is required"),
})

export const registerSchema = z.object({
  name : z.string.min(3, "Name is required"),
  email : z.string().email("Invalid Email"),
  password : z.string().min(3, "Name is required"),
})