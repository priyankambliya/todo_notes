import { Request,Response } from "express";
import * as bcrypt from "bcrypt"
import * as jwt from "jsonwebtoken"

import User from "../models/user.model";
import { errorResponse, successResponse } from "../handlers/responseHandler";
import data from "../security/confige";

// COMMON APIs:
const registerUser = async (request:Request,response:Response) => {
    try {
        const {
            username,
            email,
            password
        } = request.body
    
        const hasedPassword = await bcrypt.hash(password,10)
        
        const isAlreadyExist = await User.findOne({email})
        if(isAlreadyExist) throw "user already exist with this email.."
        await User.create({
            username,
            email,
            password:hasedPassword
        })

        successResponse(response,{message:"user created..."},201)
    } catch (error:any) {
        console.log(error.message)
        errorResponse(response,error,400)
    }
}

const loginUser = async (request:Request,response:Response) => {
    try {
        const {
            email,
            password
        } = request.body
    
        const user:any = await User.findOne({email})
    
        if(!user) throw "user not found.."
        const isEqual = await bcrypt.compare(password,user.password)
        if(!isEqual) throw "passoword miss match.."
        const token = await jwt.sign({ email:user.email },data.SECRET_KEY)
        const res = {
            message:"user loged in",
            token
        }
        successResponse(response,res,200)
    } catch (error) {
        errorResponse(response,error,400)
    }
}

export {
    registerUser,
    loginUser
}