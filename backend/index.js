import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import elecRouter from "./routes/electricRoutes/electric.js";
import condRouter from "./routes/conditionersRoutes/conditioners.js";

dotenv.config();

const app = express();

/*************importantConst*************/
const PORT_SERVER = process.env.PORT_SERVER;
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_NAME = process.env.DB_NAME;
/****************************************/

/*************middleware*************/
app.use(cors());
app.use(express.json());
/***********************************/

app.use("/api/electric", elecRouter);
app.use("/api/conditioners", condRouter);

async function startServer() {
  try {
    await mongoose.connect(
      `mongodb://${DB_USER}:${DB_PASSWORD}@database:27017/${DB_NAME}`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );

    app.listen(PORT_SERVER, () => console.log("server started"));
  } catch (error) {
    console.log("error");
  }
}
startServer();
