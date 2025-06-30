import React from "react";
import img from "assets/conditioners/condImg/cond.jpg";
import { useCondTypes } from "../../helpers/CondHelpers";

export const CondTypes = () => {
  const type = useCondTypes();

  if (!type) {
    return <div>Загрузка...</div>;
  }
  return (
    <>
      <div>
        <h2>
          {type.title}: {type.description}{" "}
        </h2>
        {
          <ul>
            {type.types.map((item) => (
              <li key={item._id}>
                {item.title}: {item.price}
              </li>
            ))}
          </ul>
        }

        <img width="50px" src={img} alt="" />
      </div>
    </>
  );
};
