import express from "express"

import {
    registerUser
} from "../controllers/commonController"

const router = express()

router.post('/register',registerUser)

export default router
