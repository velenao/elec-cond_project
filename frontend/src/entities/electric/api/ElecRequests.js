import axios from "utils/axios";

export const getElecServices = async () => {
  try {
    const { data } = await axios.get("/electric");
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const getElecTypes = async (id) => {
  try {
    const { data } = await axios.get(`/electric/${id}`);
    return data;
  } catch (error) {
    console.error(error);
  }
};
