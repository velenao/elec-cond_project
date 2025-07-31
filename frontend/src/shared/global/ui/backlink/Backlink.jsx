import "./style.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export const Backlink = ({ id }) => {
  const location = useLocation();
  const path = location.pathname;
  const newPath = path.slice(0, path.lastIndexOf("/"));
  console.log(newPath);

  return (
    <Link className="backLink" to={`${newPath}#${id}`}>
      Назад
    </Link>
  );
};
