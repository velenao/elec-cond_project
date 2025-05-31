import React from "react"
import { useGetElectricInfo } from "../model/getElectricInfo"
import './style.css'
import { HeaderImg } from "../../../widgets/headerImg"
import { TextAboutUs } from "../../../widgets/textAboutUs/ui/TextAboutUs"

export const ElectricPage = () => {
  const data = useGetElectricInfo();
 return (
  <>
       <HeaderImg/>
       <TextAboutUs/>
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
  </>
 )
}