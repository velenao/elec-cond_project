import { useCondServices } from "entities/conditioners/helpers/CondHelpers";
import React from "react";
import { Link, useLocation } from "react-router-dom";

export const CondFullPrice = () => {
  const servicesData = useCondServices();
  const location = useLocation();
  const currentPath = location.pathname;

  if (!servicesData) {
    return <div>Загрузка...</div>;
  }

  const services = servicesData.slice(0, 6);

  return (
    <>
      <h2>Прайс</h2>
      <div>
        <table border="1">
          {services.map((service) => (
            <tbody key={service._id}>
              <tr>
                <td colSpan="2">{service.title}</td>
              </tr>
              {service.types.length > 0
                ? service.types.map((type) => (
                    <tr key={type._id}>
                      <td>{type.title}</td>
                      <td>{type.price}</td>
                    </tr>
                  ))
                : null}
            </tbody>
          ))}
        </table>
        {currentPath === "/conditioners" && (
          <Link to={"/conditioners/price"}>посмотреть весь прайс</Link>
        )}
      </div>
    </>
  );
};
