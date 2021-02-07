const apiURL = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
const main = document.getElementById("foodList");

function foodShow(url) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      data.meals.forEach((element) => {
        const div = document.createElement("div");
        div.setAttribute("onclick", "displayFoodDetail();");

        const image = document.createElement("img");
        image.src = element.strMealThumb;

        const text = document.createElement("h2");
        text.innerHTML = element.strMeal;

        div.appendChild(image);
        div.appendChild(text);
        main.appendChild(div);
      });
    });
}

const displayFoodDetail = () => {
  fetch(apiURL)
    .then((res) => res.json())
    .then((data) => {
      data.meals.forEach((element) => {
        const foodDetail = document.getElementById("foodDetail");
        const imageDetail = document.createElement("img");
        imageDetail.src = element.strMealThumb;

        const textDetail = document.createElement("h1");
        textDetail.innerHTML = element.strMeal;

        const ul = document.createElement("ul");
        const li1 = document.createElement("li");
        const li2 = document.createElement("li");
        const li3 = document.createElement("li");
        const li4 = document.createElement("li");
        const li5 = document.createElement("li");
        const li6 = document.createElement("li");

        const listText1 = element.strMeasure1 + element.strIngredient1;
        const listText2 = element.strMeasure2 + element.strIngredient2;
        const listText3 = element.strMeasure3 + element.strIngredient3;
        const listText4 = element.strMeasure4 + element.strIngredient4;
        const listText5 = element.strMeasure5 + element.strIngredient5;
        const listText6 = element.strMeasure6 + element.strIngredient6;

        li1.innerHTML = listText1;
        li2.innerHTML = listText2;
        li3.innerHTML = listText3;
        li4.innerHTML = listText4;
        li5.innerHTML = listText5;
        li6.innerHTML = listText6;

        foodDetail.appendChild(imageDetail);
        foodDetail.appendChild(textDetail);
        ul.appendChild(li1);
        ul.appendChild(li2);
        ul.appendChild(li3);
        ul.appendChild(li4);
        ul.appendChild(li5);
        ul.appendChild(li6);
        foodDetail.appendChild(ul);

        foodDetail.style.width = "400px";
        foodDetail.style.height = "450px";
        foodDetail.style.background = "#fff";
      });
    });
};

const btn = document.getElementById("btn").addEventListener("click", () => {
  let input = document.getElementById("inputField");

  const inputValue = input.value;
  const inputResult = apiURL + inputValue;

  foodShow(inputResult);
  input.value = "";
});
