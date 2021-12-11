import DishCard from "../components/DishCard/DishCard";

function FavoritesDishesPage({ favoritesDishes, removeHandler }) {
  return (
    <>
      <ul>
        {favoritesDishes.map(
          ({ idMeal, strMeal, strMealThumb, strInstructions }) => (
            <li key={idMeal}>
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
    </>
  );
}

export default FavoritesDishesPage;
