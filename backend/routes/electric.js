import { Router } from "express";
import { getElectricInfo } from "../controllers/electric.js"

const router = new Router()

router.get('/', getElectricInfo)

export default router


