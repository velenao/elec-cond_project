import React from "react";
import { Link } from "react-router-dom";
import img from "assets/conditioners/condImg/cond.jpg";
import { useCondServices } from "../../helpers/CondHelpers";

export const CondCards = () => {
  const card = useCondServices();

  if (!card) {
    return <div>Загрузка...</div>;
  }

  return (
    <>
      <h2>Услуги</h2>
      <div>
        {card.length > 0 ? (
          <div>
            {card.map((item) => (
              <div key={item._id}>
                <Link to={`/conditioners/${item._id}`}>
                  {item.title}
                  <img width="50px" src={img} alt="" />
                </Link>
              </div>
            ))}
          </div>
        ) : (
          <p>Нет услуг</p>
        )}
      </div>
    </>
  );
};
