import React from "react";
import { useGetElectricInfo } from "../model/getElectricInfo";
import "./style.css";
import { ImgHeader } from "widgets/global/ui/imgHeader";
import { TextAboutUs } from "widgets/global/ui/textAboutUs";

export const ElectricPage = () => {
  const data = useGetElectricInfo();
  return (
    <>
      <ImgHeader />
      <TextAboutUs />
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
  );
};
