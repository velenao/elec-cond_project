import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import { useElecServices } from "../../helpers/ElecHelpers";

export const ElecCards = () => {
  const card = useElecServices();

  if (!card) {
    return <div>Загрузка...</div>;
  }

  return (
    <>
      <h2 id="elecServices">Услуги</h2>
      <div>
        {card.length > 0 && (
          <div className="cards">
            {card.map((item) => (
              <div className="card" key={item._id}>
                <Link className="cardsLink" to={`/electric/${item._id}`}>
                  <div className="cardsTitle">{item.title}</div>
                  <img width="50px" src={item.poster} alt="" />
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};
