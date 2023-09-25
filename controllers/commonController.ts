import { Request,Response } from "express";
import * as bcrypt from "bcrypt"

import User from "../models/user.model";
import { errorResponse, successResponse } from "../handlers/responseHandler";

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

        successResponse(response,"user created...",201)
    } catch (error:any) {
        console.log(error.message)
        errorResponse(response,error,400)
    }
}

export {
    registerUser
}