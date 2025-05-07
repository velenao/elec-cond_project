import electricInfo from '../models/electric.js'

export const getElectricInfo  = async (req, res) => {
  try {
    const data = await electricInfo.find()
    res.json(data)
  } catch (error) {
    console.error(error)
    res.status(500).json({error: "error"})
  }
}
