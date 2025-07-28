import { useCondServices } from "entities/conditioners/helpers/CondHelpers";
import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const MAX_SERVICES = 3;

export const CondFullPrice = ({ isShort }) => {
  const services = useCondServices();

  if (!services) {
    return <div>Загрузка...</div>;
  }

  let shortServices = services;

  if (isShort && services.length > MAX_SERVICES) {
    shortServices = services.slice(0, MAX_SERVICES);
  }

  return (
    <>
      {isShort && <h2 id="condPrice">Прайс</h2>}
      <div className="price">
        <table>
          {shortServices.map((service) => (
            <tbody key={service._id}>
              <tr>
                <th colSpan="2">{service.title}</th>
              </tr>
              {service.types.length > 0 &&
                service.types.map((type) => (
                  <tr key={type._id}>
                    <td>{type.title}:</td>
                    <td>{type.price}</td>
                  </tr>
                ))}
            </tbody>
          ))}
        </table>
        {isShort && (
          <Link className="priceLink" to={"/conditioners/price"}>
            посмотреть весь прайс
          </Link>
        )}
      </div>
    </>
  );
};
