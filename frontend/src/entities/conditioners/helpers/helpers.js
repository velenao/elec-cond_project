import { useEffect, useState } from "react";
import { getCondServices, getCondTypes } from "../api/requests";
import { useParams } from "react-router-dom";

export const useCondCards = () => {
  const [card, setCard] = useState(null);

  useEffect(() => {
    getCondServices().then((services) => setCard(services));
  }, []);

  return card;
};

export const useCondTypes = () => {
  const { id } = useParams();
  const [type, setType] = useState(null);

  useEffect(() => {
    getCondTypes(id).then((types) => setType(types));
  }, [id]);

  return type;
};
