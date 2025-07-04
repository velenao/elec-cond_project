import React from "react";
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
      </div>
    </>
  );
};
