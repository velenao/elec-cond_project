import axios from "utils/axios";

export const getCondTypes = async (id) => {
  try {
    const { data } = await axios.get(`/conditioners/${id}`);
    return data;
  } catch (error) {
    console.error(error);
  }
};
