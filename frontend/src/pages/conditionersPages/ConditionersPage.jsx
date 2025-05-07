import React, { useEffect, useState } from "react";

import axios from '../../utils/axios'

export const ConditionersPage = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/conditioners')
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
        <h1>описание: {i.description}</h1>
          <ul>услуги: <br /><br />
           <div> {
            i.services.map((service) => (
                <div key={service.title + service.price}>
                    <li> {service.title}: price: {service.price}</li><br></br>
                </div>
            ))
            }</div>
            </ul>
      </div>
    ))}
  </div>
 )
}