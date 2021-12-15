import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import AppBar from "./components/AppBar/AppBar";
import RandomDishPage from "./pages/RandomDishPage/RandomDishPage";
import FavoritesDishesPage from "./pages/FavoritesDishesPage/FavoritesDishesPage";
import ModalCustomDish from "./components/ModalCustomDish/ModalCustomDish";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Toaster } from "react-hot-toast";
import toast from "react-hot-toast";
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
      toast.success(`${randomDish.strMeal} added successfully!`);
      return;
    }

    const isAdd = favoritesDishes.find(
      (obj) => obj.idMeal === randomDish.idMeal
    );

    if (!isAdd) {
      setFavoritesDishes((prev) => [...prev, randomDish]);
      toast.success(`${randomDish.strMeal} added successfully!`);
      return;
    }

    toast.error(`${randomDish.strMeal} is already in the favorites!`);
  };

  const removeFromFavorites = (id) => {
    const updateFavorites = favoritesDishes.filter(
      (item) => item.idMeal !== id
    );
    const addedDish = favoritesDishes.find((item) => item.idMeal === id);
    setFavoritesDishes([...updateFavorites]);
    toast.success(`${addedDish.strMeal} was deleted successfully!`);
  };

  const showModal = () => {
    setIsShowModal(true);
  };

  const hideModal = () => {
    setIsShowModal(false);
  };

  const toAddsCustomDish = (customDish) => {
    favoritesDishes
      ? setFavoritesDishes((prev) => [...prev, customDish])
      : setFavoritesDishes([customDish]);

    toast.success(`${customDish.strMeal} was added successfully!`, {
      position: "center",
    });
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

      <Toaster
        position="top-right"
        reverseOrder={true}
        gutter={10}
        toastOptions={{
          className: "Toaster",
          duration: 3000,
          style: {
            background: "#3a80cf",
            color: "#fff",
          },

          error: {
            duration: 3000,
          },
        }}
      />
    </div>
  );
}

export default App;
