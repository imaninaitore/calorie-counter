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
const foodContainer = 
document.getElementById("foodContainer");

data.recipes.forEach(food => {
//creating div 
const div = document.createElement("div")
//creating checkbox
const checkbox =document.createElement("input");checkbox.type = "checkbox";
//creating span
const span = document.createElement("span");

span.textContent = `${food.name} - ${food.caloriesPerServing} cal`;

foodContainer.appendChild(checkbox);    
foodContainer.appendChild(span);    
foodContainer.appendChild(div);
});

})

.catch(error =>
console.error("Error fetching data:", error));

