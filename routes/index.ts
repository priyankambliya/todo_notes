import express from "express"

import {
    registerUser
} from "../controllers/commonController"

const router = express()

router.get('/register',registerUser)

export default router
