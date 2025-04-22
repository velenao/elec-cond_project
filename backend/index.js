import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import cors from "cors"

dotenv.config()
const app = express()


/*************importantConst*************/
const PORT = process.env.PORT
const DB_USER = process.env.DB_USER
const DB_PASSWORD = process.env.DB_PASSWORD
const DB_NAME = process.env.DB_NAME
/****************************************/



/*************middleware*************/
app.use(cors())
/***********************************/



async function startServer() {
    try {
        await mongoose.connect(
            `mongodb://${DB_USER}:${DB_PASSWORD}@127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&authSource=${DB_NAME}&appName=mongosh+2.5.0`
        )

       app.listen(PORT, () => console.log("server started")) 
    } catch (error) {
        console.log("error")
    }
}
startServer()