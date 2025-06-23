import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "utils/axios";

export const useGetCondTypes = () => {
  const { id } = useParams();
  const [type, setType] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await axios.get(`/conditioners/${id}`);
        setType(resp.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [id]);

  return type;
};
