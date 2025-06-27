import { useCondServices } from "entities/conditioners/helpers/helpers";
import React from "react";
import { Link } from "react-router-dom";

export const FullPrice = () => {
  const servicesData = useCondServices();

  if (!servicesData) {
    return <div>Загрузка...</div>;
  }

  const services = servicesData.slice(0, 6);

  return (
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
      <Link to={"/conditioners/price"}>посмотреть весь прайс-лист</Link>
    </div>
  );
};
