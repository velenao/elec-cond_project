import React from "react";
import "./style.css";
import { Link } from "react-router";

const MAX_SERVICES = 3;

export const FullPrice = ({ data, path, isShort }) => {
  if (!data) {
    return <div>Загрузка...</div>;
  }

  let shortServices = data;

  if (isShort && data.length > MAX_SERVICES) {
    shortServices = data.slice(0, MAX_SERVICES);
  }

  return (
    <>
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
          <Link className="priceLink" to={`/${path}/price`}>
            посмотреть весь прайс
          </Link>
        )}
      </div>
    </>
  );
};
