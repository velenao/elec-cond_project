import { Router } from "express";
import { getCondInfo } from "../controllers/conditioners.js"

const router = new Router()

router.get('/', getCondInfo)

export default router

