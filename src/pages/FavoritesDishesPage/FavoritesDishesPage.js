import Container from "../../components/Container/Container";
import DishCard from "../../components/DishCard/DishCard";
import s from "./FavoritesDishesPage.module.css";

function FavoritesDishesPage({ favoritesDishes, removeHandler }) {
  return (
    <div className={s.page}>
      <Container>
        <ul className={s.list}>
          {favoritesDishes.map(
            ({ idMeal, strMeal, strMealThumb, strInstructions }) => (
              <li className={s.item} key={idMeal}>
                <DishCard
                  title={strMeal}
                  imgUrl={strMealThumb}
                  desc={strInstructions}
                  removeHandler={() => removeHandler(idMeal)}
                />
              </li>
            )
          )}
        </ul>
      </Container>
    </div>
  );
}

export default FavoritesDishesPage;
