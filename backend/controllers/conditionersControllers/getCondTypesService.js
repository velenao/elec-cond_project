import condServices from "@/models/conditionersModels/condServices.js";
import condTypesService from "@/models/conditionersModels/condTypesService.js";

export const getCondTypesService = async (req, res) => {
  try {
    const { id } = req.params;
    const condCard = await condServices.findById(id).populate("types");
    if (!condCard) {
      return res.status(404).json({ error: "нет данных" });
    }
    res.json(condCard);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "ошибка при поиске данных" });
  }
};
