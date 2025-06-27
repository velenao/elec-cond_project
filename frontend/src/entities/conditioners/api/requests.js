import axios from "utils/axios";

export const getCondServices = async () => {
  try {
    const { data } = await axios.get("/conditioners");
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const getCondTypes = async (id) => {
  try {
    const { data } = await axios.get(`/conditioners/${id}`);
    return data;
  } catch (error) {
    console.error(error);
  }
};
