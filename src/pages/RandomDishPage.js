import DishCard from "../components/DishCard/DishCard";

function RandomDishPage({ title, imgUrl, desc, skipHandler, likeHandler }) {
  return (
    <DishCard
      title={title}
      imgUrl={imgUrl}
      desc={desc}
      skipHandler={skipHandler}
      likeHandler={likeHandler}
    />
  );
}

export default RandomDishPage;
