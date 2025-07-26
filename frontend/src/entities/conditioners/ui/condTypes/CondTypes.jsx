import React, { useRef } from "react";
import { useCondTypes } from "../../helpers/CondHelpers";
import usePlayVideo from "pages/helpers/helpers";

export const CondTypes = () => {
  const type = useCondTypes();
  const vidRef = useRef(null);

  usePlayVideo(type && type.video ? vidRef : null);

  if (!type || !type.video) {
    return <div>Загрузка...</div>;
  }

  return (
    <>
      <div className="imgCondType">
        {type.images.map((item, i) => (
          <img key={i} src={item} alt="" />
        ))}
      </div>
      <div className="contentCondType">
        <h2>{type.title}:</h2>
        <p>{type.description}</p>

        <h3>Стоимость:</h3>
        <table>
          {type.types.map((item) => (
            <tbody key={item._id}>
              <tr>
                <td>{item.title}:</td>
                <td>{item.price}Ъ</td>
              </tr>
            </tbody>
          ))}
        </table>
        <div className="video_services">
          <video ref={vidRef} src={type.video} loop muted></video>
        </div>
      </div>
    </>
  );
};
