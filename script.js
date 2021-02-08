const searchFood = () => {
  const searchText = document.getElementById("searchField").value;
  const apiURL = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;

  fetch(apiURL)
    .then((res) => res.json())
    .then((data) => displayFoods(data.meals))
    .catch((error) =>
      errorMsg("Something Went Wrong!! Please try again later!")
    );
};

const displayFoods = (foods) => {
  const foodContainer = document.getElementById("food-container");
  foodContainer.className = "foodList";
  foodContainer.innerHTML = "";

  foods.forEach((food) => {
    const foodDiv = document.createElement("div");
    foodDiv.innerHTML = `
    <div onclick='displayFoodDetail(${food.idMeal})' class='foodResize'>
    <img src='${food.strMealThumb}'>
    <h2>${food.strMeal}</h2>
    </div>
    `;
    foodContainer.appendChild(foodDiv);
  });
};

const displayFoodDetail = (foodID) => {
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${foodID}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => foodDetails(data.meals));
};

const foodDetails = (details) => {
  details.forEach((detail) => {
    const foodDetailDiv = document.getElementById("foodDetail");
    foodDetailDiv.className = "foodDetail";
    foodDetailDiv.innerHTML = "";

    foodDetailDiv.innerHTML = `
  <div class="detailsInfo">
    <img src="${detail.strMealThumb}">
    <h1>${detail.strMeal}</h1>
    <h2>Ingredients</h2>
    <ul>
      <li><i class="fas fa-check-square"></i>${detail.strMeasure1}  ${detail.strIngredient1}</li>
      <li><i class="fas fa-check-square"></i>${detail.strMeasure2}  ${detail.strIngredient2}</li>
      <li><i class="fas fa-check-square"></i>${detail.strMeasure3}  ${detail.strIngredient3}</li>
      <li><i class="fas fa-check-square"></i>${detail.strMeasure4}  ${detail.strIngredient4}</li>
      <li><i class="fas fa-check-square"></i>${detail.strMeasure5}  ${detail.strIngredient5}</li>
      <li><i class="fas fa-check-square"></i>${detail.strMeasure6}  ${detail.strIngredient6}</li>
    </ul>
  </div>  
    `;
  });
};

const errorMsg = (message) => {
  const errorMessage = document.getElementById("errorMessage");
  errorMessage.className = "error-msg";
  errorMessage.innerHTML = "";
  errorMessage.innerHTML = `
<h2>${message}</h2>
`;
};
