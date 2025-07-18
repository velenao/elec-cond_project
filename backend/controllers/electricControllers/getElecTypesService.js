import elecServices from "@/models/electricModels/elecServices.js";
import elecTypesService from "@/models/electricModels/elecTypesService.js";

export const getElecTypesService = async (req, res) => {
  try {
    const { id } = req.params;
    const elecCard = await elecServices.findById(id).populate("types");
    if (!elecCard) {
      return res.status(404).json({ error: "нет данных" });
    }
    res.json(elecCard);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "ошибка при поиске данных" });
  }
};
