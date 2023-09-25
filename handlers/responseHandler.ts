import { Response } from "express";

const successResponse = (response:Response,message:any,statusCode:number) => {
    return response.status(statusCode).json({message})
}

const errorResponse = (response:Response,error:any,statusCode:number) => {
    return response.status(statusCode).json({error})
}

export {
    successResponse,
    errorResponse
}
