import mongoose from "mongoose"

import data from "../security/confige"
import chalk from "chalk"

mongoose.connect(data.DATABASE_URL)
.then(()=>{
    console.log(chalk.greenBright("DATABASE CONNECTION ESTABLISHED..."))
})
.catch(error => {
    console.log(error)
})