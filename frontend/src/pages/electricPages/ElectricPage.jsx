import React, { useEffect, useState } from "react";

import axios from '../../utils/axios'

export const ElectricPage = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/electric')
        console.log('Данные:', response.data);
        setData(response.data)
      } catch (error) {
        console.error("error")
      }
    }
    fetchData()
  }, [])

 return (
  <div>
    {data.map((i) => (
      <div key={i._id}>
        <h3>описание: {i.description}</h3>
        <ul>
          <li>услуги: {i.services.length}</li>
        </ul>
      </div>
    ))}
  </div>
 )
}