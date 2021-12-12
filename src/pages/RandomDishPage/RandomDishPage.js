import Container from "../../components/Container/Container";
import DishCard from "../../components/DishCard/DishCard";
import s from "./RandomDishPage.module.css";

function RandomDishPage({ title, imgUrl, desc, skipHandler, likeHandler }) {
  return (
    <div className={s.page}>
      <Container>
        <DishCard
          title={title}
          imgUrl={imgUrl}
          desc={desc}
          skipHandler={skipHandler}
          likeHandler={likeHandler}
        />
      </Container>
    </div>
  );
}

export default RandomDishPage;
