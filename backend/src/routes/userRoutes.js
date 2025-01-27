const express = require("express")
const registerUser = require("../../controller/userControllers")



const userRouter = express.Router

userRouter.post('/register', registerUser)