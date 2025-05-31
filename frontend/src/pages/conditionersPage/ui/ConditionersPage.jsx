import React from 'react'
import { useGetCondInfo } from "../model/getCondInfo"
import { HeaderImg } from '../../../widgets/headerImg';
import { TextAboutUs } from '../../../widgets/textAboutUs/ui/TextAboutUs';



export const ConditionersPage = () => {
  const data = useGetCondInfo()

  return (
    <>
           <HeaderImg/>
           <TextAboutUs/>
    <div>
      {data.map((i) => ( //i - нельзя!!! необходимо точное название того, чем является
        <div key={i._id}>
          <h1>описание: {i.description}</h1>
          <ul>
            услуги: <br />
            <br />
            <div>
              {" "}
              {i.services.map((service) => (
                <div key={service.title + service.price}>
                  <li>
                    {" "}
                    {service.title}: price: {service.price}
                  </li>
                  <br></br>
                </div>
              ))}
            </div>
          </ul>
        </div>
      ))}
    </div>
    </>
  );
};
