const BASE_URL = "https://www.themealdb.com/api/json/v1/1/random.php";

function fetchRandomDish() {
  return fetch(BASE_URL)
    .then((res) => {
      return res.json();
    })
    .catch((err) => console.log(err.message));
}

export { fetchRandomDish };
