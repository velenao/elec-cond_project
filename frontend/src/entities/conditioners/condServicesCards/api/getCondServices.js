import axios from "utils/axios";

export const getCondServices = async () => {
  try {
    const { data } = await axios.get("/conditioners");
    return data;
  } catch (error) {
    console.error(error);
  }
};
