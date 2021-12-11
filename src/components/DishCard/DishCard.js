import { useLocation } from "react-router-dom";
import imgPath from "../../img/placeholder.png";

function DishCard({
  title,
  imgUrl,
  desc,
  skipHandler,
  likeHandler,
  removeHandler,
}) {
  const location = useLocation();

  return (
    <>
      <div>
        <img
          width="390"
          src={imgUrl ? imgUrl : `${imgPath}`}
          alt="Default poster of the dish"
        />

        <h2>{title}</h2>
        <p>{desc}</p>

        {location.pathname === "/favorites" && (
          <button onClick={removeHandler} type="button">
            Remove
          </button>
        )}

        {location.pathname === "/" && (
          <>
            <button onClick={skipHandler} type="button">
              Skip
            </button>
            <button onClick={likeHandler} type="button">
              Like
            </button>
          </>
        )}
      </div>
    </>
  );
}

export default DishCard;
