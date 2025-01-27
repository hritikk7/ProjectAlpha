import express  from "express";
import { registerUser } from "../controller/userControllers";


const router = express.Router()

// register User 
router.post('/', registerUser)

export default router