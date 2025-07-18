import { Router } from "express";
import { getElecServices } from "@/controllers/electricControllers/getElecServices.js";
import { getElecTypesService } from "@/controllers/electricControllers/getElecTypesService.js";

const router = Router();

router.get("/", getElecServices);
router.get("/:id", getElecTypesService);

export default router;
