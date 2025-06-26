import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCondTypes } from "../api/getTypesService";

export const useCondTypes = () => {
  const { id } = useParams();
  const [type, setType] = useState(null);

  useEffect(() => {
    getCondTypes(id).then((types) => setType(types));
  }, [id]);

  return type;
};
