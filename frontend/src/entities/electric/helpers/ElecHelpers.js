import { useEffect, useState } from "react";
import { getElecServices, getElecTypes } from "../api/ElecRequests";
import { useParams } from "react-router-dom";

export const useElecServices = () => {
  const [services, setServices] = useState(null);

  useEffect(() => {
    getElecServices().then((services) => setServices(services));
  }, []);

  return services;
};

export const useElecTypes = () => {
  const { id } = useParams();
  const [type, setType] = useState(null);

  useEffect(() => {
    getElecTypes(id).then((types) => setType(types));
  }, [id]);

  return type;
};
