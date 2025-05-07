import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import cors from "cors"

import electricRouter from "./routes/electric.js"
import condRouter from "./routes/conditioners.js"

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
app.use(express.json())
/***********************************/

app.use('/api/electric', electricRouter)
app.use("/api/conditioners", condRouter)

app.get('/', (req, res) => {
res.json({mess: "kkkk"})
})


async function startServer() {
    try {
        await mongoose.connect(`mongodb://${DB_USER}:${DB_PASSWORD}@127.0.0.1:27017/${DB_NAME}?directConnection=true&serverSelectionTimeoutMS=2000`);

       app.listen(PORT, () => console.log("server started")) 
    } catch (error) {
       console.log("error")
    }
}
startServer()