import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import AppBar from "./components/AppBar/AppBar";
import RandomDishPage from "./pages/RandomDishPage";
import FavoritesDishesPage from "./pages/FavoritesDishesPage";
import ModalCustomDish from "./components/ModalCustomDish/ModalCustomDish";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { fetchRandomDish } from "./services/foodify-api";

function App() {
  const [randomDish, setRandomDish] = useState(null);
  const [favoritesDishes, setFavoritesDishes] = useState(
    JSON.parse(localStorage.getItem("favorites"))
  );

  const [isShowModal, setIsShowModal] = useState(false);

  const updateRandomDish = () => {
    return fetchRandomDish().then((data) => setRandomDish(data.meals[0]));
  };

  useEffect(() => {
    updateRandomDish();
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favoritesDishes));
  }, [favoritesDishes]);

  const addToFavorites = () => {
    if (!favoritesDishes) {
      setFavoritesDishes([randomDish]);
      return;
    }

    const isAdd = favoritesDishes.find(
      (obj) => obj.idMeal === randomDish.idMeal
    );

    if (!isAdd) {
      setFavoritesDishes((prev) => [...prev, randomDish]);
      console.log("Блюдо добавлено успешно.");
      return;
    }

    console.log("Такое блюдо уже добавлено!");

    // const favorites = JSON.parse(localStorage.getItem("favorites"));
    // if (!favorites) {
    //   localStorage.setItem("favorites", JSON.stringify([randomDish]));
    //   console.log("Блюдо добавлено успешно.");
    // } else {
    //   const isAdd = favorites.find((obj) => obj.idMeal === randomDish.idMeal);
    //   if (!isAdd) {
    //     favorites.push(randomDish);
    //     localStorage.setItem("favorites", JSON.stringify(favorites));
    //     console.log("Блюдо добавлено успешно.");
    //     return;
    //   }

    //   console.log("Такое блюдо уже добавлено!");
    // }
  };

  const removeFromFavorites = (id) => {
    console.log("REMOVE FROM APP");
    console.log(id);
    const updateFavorites = favoritesDishes.filter(
      (item) => item.idMeal !== id
    );
    setFavoritesDishes([...updateFavorites]);
  };

  const showModal = () => {
    setIsShowModal(true);
  };

  const hideModal = () => {
    setIsShowModal(false);
  };

  const toAddsCustomDish = (customDish) => {
    setFavoritesDishes((prev) => [...prev, customDish]);
  };

  return (
    <div className="App">
      <AppBar showModal={showModal} />
      <Routes>
        <Route
          path="/"
          element={
            randomDish && (
              <RandomDishPage
                title={randomDish.strMeal}
                imgUrl={randomDish.strMealThumb}
                desc={randomDish.strInstructions}
                skipHandler={updateRandomDish}
                likeHandler={addToFavorites}
              />
            )
          }
        />
        <Route
          path="/favorites"
          element={
            <FavoritesDishesPage
              favoritesDishes={favoritesDishes}
              removeHandler={removeFromFavorites}
            />
          }
        />
      </Routes>
      <ModalCustomDish
        isShowModal={isShowModal}
        hideModal={hideModal}
        toAddsCustomDish={toAddsCustomDish}
      />
    </div>
  );
}

export default App;
