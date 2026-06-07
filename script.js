/*
//create variable before using
const totalCalories = 
document.getElementById("totalCalories");

const foodContainer = 
document.getElementById("foodContainer");
//fetching data
const url = "https://dummyjson.com/recipes";

fetch(url)

.then((response) => response.json())

.then((data) => {

    data.recipes.forEach(food => {

        console.log(
        `food: ${food.name} calories: ${food.caloriesPerServing}`
        );

    });

//grabbing the food container


data.recipes.forEach(food => {
//creating div 
const div = document.createElement("div");
//creating checkbox
const checkbox =document.createElement("input");checkbox.type = "checkbox";

//calculation
//find calorie number
let total = 0;

//listen for check
checkbox.addEventListener("change", () => {
if (checkbox.checked) {
    total = total + food.caloriesPerServing;
} else {
    total = total - food.caloriesPerServing;
}

totalCalories.textContent = total;
});


//creating span
const span = document.createElement("span");

span.textContent = `${food.name} - ${food.caloriesPerServing} cal`;

foodContainer.appendChild(div);
div.appendChild(checkbox);    
div.appendChild(span);    
});

})

.catch(error =>
console.error("Error fetching data:", error));

*/

