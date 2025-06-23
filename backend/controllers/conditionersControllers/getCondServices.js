import condServices from "@/models/conditionersModels/condServices.js";

export const getCondServices = async (req, res) => {
  try {
    const data = await condServices.find();
    if (!data) {
      return res.status(404).json({ error: "нет данных" });
    }
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "ошибка при поиске данных" });
  }
};
