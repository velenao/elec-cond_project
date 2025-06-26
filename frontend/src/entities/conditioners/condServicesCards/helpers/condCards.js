import { useEffect, useState } from "react";
import { getCondServices } from "../api/getCondServices";

export const useCondCards = () => {
  const [card, setCard] = useState(null);

  useEffect(() => {
    getCondServices().then((services) => setCard(services));
  }, []);

  return card;
};
