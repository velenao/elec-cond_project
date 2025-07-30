import React from "react";
import "./style.css";
import { Link } from "react-router";

export const Cards = ({ data, path }) => {
  if (!data) {
    return <div>Загрузка...</div>;
  }

  return (
    <>
      <div>
        {data.length > 0 && (
          <div className="cards">
            {data.map((item) => (
              <div className="card" key={item._id}>
                <Link className="cardsLink" to={`/${path}/${item._id}`}>
                  <div className="cardsTitle">{item.title}</div>
                  <img src={item.poster} alt="" />
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};
