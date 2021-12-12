import { useLocation } from "react-router-dom";
import imgPath from "../../img/placeholder.jpg";
import s from "./DishCard.module.css";

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
      <div className={s.card}>
        <img
          className={s.img}
          width="390"
          src={imgUrl ? imgUrl : `${imgPath}`}
          alt="Default poster of the dish"
        />
        <div className={s.text}>
          <h2 className={s.title}>{title}</h2>
          <p className={s.desc}>{desc}</p>
        </div>

        <div className={s.cardFooter}>
          {location.pathname === "/favorites" && (
            <button className={s.btn} onClick={removeHandler} type="button">
              Remove
            </button>
          )}

          {location.pathname === "/" && (
            <div className={s.btnGroup}>
              <button className={s.btn} onClick={skipHandler} type="button">
                Skip
              </button>
              <button className={s.btn} onClick={likeHandler} type="button">
                Like
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default DishCard;
