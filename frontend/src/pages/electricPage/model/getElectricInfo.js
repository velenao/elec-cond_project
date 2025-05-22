import { useEffect, useState } from "react";
import axios from "../../../utils/axios";

export const useGetElectricInfo = () => {
    const [data, setData] = useState([])

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get('/electric')
          setData(response.data)
        } catch (error) {
          console.error(error)
        }
      }
      fetchData()
    }, []);

    return data;
}