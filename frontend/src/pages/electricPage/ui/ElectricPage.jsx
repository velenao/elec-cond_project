import React from "react"
import { useGetElectricInfo } from "../model/getElectricInfo"

export const ElectricPage = () => {
  const data = useGetElectricInfo();
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