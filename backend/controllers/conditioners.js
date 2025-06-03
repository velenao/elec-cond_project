import condInfo from "../models/conditioners.js";

export const getCondInfo = async (req, res) => {
  try {
    const data = await condInfo.find();
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "error" });
  }
};
