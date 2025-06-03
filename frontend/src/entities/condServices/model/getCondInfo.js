import { useEffect, useState } from "react";
import axios from "utils/axios";

export const useGetCondInfo = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await axios.get("/conditioners");
        setData(resp.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);
  return data;
};
