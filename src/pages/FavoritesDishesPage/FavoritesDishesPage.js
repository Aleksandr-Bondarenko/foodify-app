import Container from "../../components/Container/Container";
import DishCard from "../../components/DishCard/DishCard";
import s from "./FavoritesDishesPage.module.css";

function FavoritesDishesPage({ favoritesDishes, removeHandler }) {
  return (
    <div className={s.page}>
      <Container>
        {favoritesDishes && favoritesDishes.length !== 0 ? (
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
        ) : (
          <p className={s.notify}>
            You have not added anything to your favorites yet...
          </p>
        )}
      </Container>
    </div>
  );
}

export default FavoritesDishesPage;
