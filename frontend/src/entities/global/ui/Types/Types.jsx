import React from "react";
import "./style.css";
import usePlayVideo from "shared/global/helpers/helpers";

export const Types = ({ data, ref }) => {
  usePlayVideo(data && data.video ? ref : null);

  if (!data || !data.video) {
    return <div>Загрузка...</div>;
  }

  return (
    <>
      <div className="types">
        <div className="imgType">
          {data.images.map((item, i) => (
            <img key={i} src={item} alt="" />
          ))}
        </div>
        <div className="contentType">
          <h2>{data.title}:</h2>
          <p>{data.description}</p>

          <h3>Стоимость:</h3>
          <table>
            {data.types.map((item) => (
              <tbody key={item._id}>
                <tr>
                  <td>{item.title}:</td>
                  <td>{item.price}Ъ</td>
                </tr>
              </tbody>
            ))}
          </table>
          <div className="video_services">
            <video ref={ref} src={data.video} loop muted></video>
          </div>
        </div>
      </div>
    </>
  );
};
