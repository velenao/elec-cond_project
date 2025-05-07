import React from "react";

export const MainPage = () => {
  return (
    <React.Fragment>
      <div>MainPage</div>
      <div>
        <button type="button">
          <a href="/electric">Электрика</a>
        </button>
      </div>
      <div>
        <button type="button">
          <a href="/conditioners">Кондиционеры</a>
        </button>
      </div>
    </React.Fragment>
  );
};
