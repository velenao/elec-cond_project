import React from "react";
import img from "assets/conditionersAssets/condImg/cond.jpg";
import { useCondTypes } from "../helpers/condTypes";

export const CondTypes = () => {
  const type = useCondTypes();

  if (!type) {
    return <div>Загрузка...</div>;
  }

  if (!type.types || type.types.length === 0) {
    return <div>Нет типов услуг.</div>;
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
