// DATABASE CONNECTION FILE:
import "./config/db"

import express,{Express,Request,Response} from "express"
import chalk from "chalk"

import data from "./security/confige"
import route from "./routes/index"

const app:Express = express()
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use(route)

app.listen(data.PORT,()=>{
    console.log(chalk.greenBright(`SERVER LISTNING ON PORT:${data.PORT}...`))
})

