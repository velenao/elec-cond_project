import { useEffect, useState } from "react";
import { getCondServices, getCondTypes } from "../api/CondRequests";
import { useParams } from "react-router-dom";

export const useCondServices = () => {
  const [services, setServices] = useState(null);

  useEffect(() => {
    getCondServices().then((services) => setServices(services));
  }, []);

  return services;
};

export const useCondTypes = () => {
  const { id } = useParams();
  const [type, setType] = useState(null);

  useEffect(() => {
    getCondTypes(id).then((types) => setType(types));
  }, [id]);

  return type;
};
