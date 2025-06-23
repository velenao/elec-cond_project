import { useEffect, useState } from "react";
import axios from "utils/axios";

export const useGetCondCards = () => {
  const [card, setCard] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await axios.get("/conditioners");
        setCard(resp.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return card;
};
