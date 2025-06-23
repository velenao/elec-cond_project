import { Router } from "express";
import { getCondServices } from "@/controllers/conditionersControllers/getCondServices.js";
import { getCondTypesService } from "@/controllers/conditionersControllers/getCondTypesService.js";

const router = Router();

router.get("/", getCondServices);
router.get("/:id", getCondTypesService);

export default router;
