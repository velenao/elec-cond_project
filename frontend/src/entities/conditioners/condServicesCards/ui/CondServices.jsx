import React from "react";
import { Link } from "react-router-dom";
import img from "assets/conditionersAssets/condImg/cond.jpg";
import { useGetCondCards } from "../model/getCondServices.js";

export const CondCards = () => {
  const card = useGetCondCards();

  if (!card) {
    return <div>Загрузка...</div>;
  }

  return (
    <>
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
